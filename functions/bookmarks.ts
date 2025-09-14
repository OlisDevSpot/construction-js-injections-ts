import { AllCompanyAccessors } from "@/types/companies";
import { generateBookmarks } from "@/utils/generateBookmarks";

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

export const onRequest: PagesFunction = async (context) => {
  const companyName = new URL(context.request.url).searchParams.get(
    "companyName"
  ) as AllCompanyAccessors;
  const bookmarks = generateBookmarks(companyName);
  console.log(bookmarks);
  const response = new Response(JSON.stringify(bookmarks), {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=10",
    },
  });

  response.headers.set("Access-Control-Allow-Origin", "*");
  return response;
};
