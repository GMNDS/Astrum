import * as cheerio from "cheerio";

interface Grades {
  code: string;
  subject: string;
  final_grade: string;
  p1?: string;
  p2?: string;
  t?: string;
  p3?: string;
}

export async function fetchGrades(cookie: string | null) {
  const res = await fetch(
    "https://siga.cps.sp.gov.br/aluno/notasparciais.aspx",
    {
      headers: {
        Cookie: `ASP.NET_SessionId=${cookie}`,
      },
    },
  );

  if (!res.ok) {
    throw new Error("Não foi possível acessar suas notas");
  }

  return await res.text();
}

export function parseGrades(html: string) {
  const $ = cheerio.load(html);

  const subjects = $("input[name='Grid4ContainerDataV']").val();
  const cleanSubject: Grades[] = subjects
    ? JSON.parse(subjects as string)
        .map((row: string[], index: number) => {
          const cleanedRow = row
            .map((item) => item.trim().replace(/(^"|"$)/g, ""))
            .filter((item) => item !== "");
          if (cleanedRow.length < 2) return null; // Ignorar linhas que não têm pelo menos sigla e disciplina
          const grades = JSON.parse(
            $(
              `input[name='Grid1ContainerDataV_000${index + 1}']`,
            ).val() as string,
          );
          const cleanGrades = grades.map((grade: string[]) => grade[2]);
          const [p1, p2, t, p3] = cleanGrades;
          const [code, subject, , final_grade] = cleanedRow;

          return { code, subject, final_grade, p1, p2, t, p3 };
        })
        .filter((row: string | null) => row !== null)
    : [];

  return cleanSubject;
}
