import { bookmarksList } from "../constants/bookmarks";

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
  const companyName = new URL(context.request.url).searchParams.get(
    "companyName"
  );
  const bookmarks = generateBookmarks(companyName);
  const response = new Response(JSON.stringify(bookmarks), {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=10",
    },
  });

  response.headers.set("Access-Control-Allow-Origin", "*");
  return response;
}
