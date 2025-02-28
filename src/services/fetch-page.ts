export async function fetchPage(cookie: string | null, url: string) {
  const res = await fetch(url, {
    headers: {
      Cookie: `ASP.NET_SessionId=${cookie}`,
    },
  });

  if (!res.ok) {
    throw new Error("Não foi possível acessar suas notas");
  }

  return await res.text();
}
