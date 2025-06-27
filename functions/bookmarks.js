export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Methods": "GET,OPTIONS",
      "Access-Control-Max-Age": "86400",
    },
  });
}

export async function onRequest(context) {
  const bookmarks = [
    { title: "Google", url: "https://www.google.com" },
    { title: "Jira", url: "https://jira.example.com" },
  ];

  return new Response(JSON.stringify(bookmarks), {
    headers: { "Content-Type": "application/json" },
  });
}
