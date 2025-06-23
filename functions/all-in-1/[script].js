import { default as buildingCostcoScript } from "../../companies/all-in-1/building-costco-article.js";
import { default as bbbCleanupScript } from "../../companies/all-in-1/bbb-cleanup.js";

const scripts = {
  "building-costco-article": buildingCostcoScript,
  "bbb-cleanup": bbbCleanupScript,
};

export async function onRequest(context) {
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*", // Or specific domain
    "Access-Control-Allow-Methods": "GET,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
  };

  // Preflight handler
  if (context.request.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: corsHeaders,
    });
  }
  const _scriptRaw = context.params?.script;
  const _script = _scriptRaw.replace(".js", "");

  try {
    const script = scripts[_script];

    console.log({ script });

    return new Response(script, {
      headers: {
        "content-type": "application/javascript",
        "cache-control": "public, max-age=10",
        ...corsHeaders,
      },
    });
  } catch (err) {
    console.error(err);
    return new Response("// Script not found", { status: 404 });
  }
}
