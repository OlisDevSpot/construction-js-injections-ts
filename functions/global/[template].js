import { serializeFunction } from "../../utils/serializeFunction.js";
import { globalTemplates } from "../../templates";

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
  const templateName = params.template;
  const fnTemplateName = templateName.replace(".js", "");
  const fnTemplate = globalTemplates[fnTemplateName];

  if (!fnTemplate) {
    return new Response("// Script not found", {
      status: 404,
      headers: { "Access-Control-Allow-Origin": "*" },
    });
  }

  const script = serializeFunction(fnTemplate);

  const response = new Response(script, {
    headers: {
      "Content-Type": "application/javascript",
      "Cache-Control": "public, max-age=10",
    },
  });
  response.headers.set("Access-Control-Allow-Origin", "*");
  return response;
}
