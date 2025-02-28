import { parseGrades } from "@/services/grade-scrap";
import { fetchPage } from "@/services/fetch-page";

export async function POST(request: Request) {
  const { cookie } = await request.json();
  const url = "https://siga.cps.sp.gov.br/aluno/notasparciais.aspx";

  console.log(cookie);

  if (!cookie) {
    return Response.json({ error: "Cookie não informado" }, { status: 400 });
  }

  try {
    const html = await fetchPage(cookie, url);
    const subjects = parseGrades(html);

    return Response.json({ subjects });
  } catch {
    return Response.json(
      { error: "Não foi possível acessar suas notas" },
      { status: 500 },
    );
  }
}
