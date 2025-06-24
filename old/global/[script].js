import sceRateChangeScript from "../../templates/sce-rate-change.js";

const scripts = {
  "sce-rate-change": sceRateChangeScript,
};

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
  const { params } = context;
  const key = params.script.replace(".js", "");
  const script = scripts[key];
  if (!script) {
    return new Response("// Script not found", {
      status: 404,
      headers: { "Access-Control-Allow-Origin": "*" },
    });
  }

  const response = new Response(script, {
    headers: {
      "Content-Type": "application/javascript",
      "Cache-Control": "public, max-age=10",
    },
  });
  response.headers.set("Access-Control-Allow-Origin", "*");
  return response;
}
