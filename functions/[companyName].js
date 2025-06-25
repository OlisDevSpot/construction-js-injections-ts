import { serializeFunction } from "../utils/serializeFunction.js";
import { companies } from "../companies/index.js";
import { scriptTemplates } from "../templates/index.js";
import { findMatchingFn } from "../utils/routeMatcher.js";

function renderScript(fn, companyName) {
  const companyInfo = companies[companyName];
  return serializeFunction(fn, companyInfo);
}

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
  const { companyName } = context.params;
  const url = new URL(context.request.url).searchParams.get("url");

  const matchingScriptTemplate = findMatchingFn(url, scriptTemplates);

  const isMatched = !!matchingScriptTemplate;

  if (!isMatched) {
    return new Response("// Site doesn't match any scripts", {
      status: 404,
      headers: { "Access-Control-Allow-Origin": "*" },
    });
  }

  // const fnTemplateName = fnTemplateNameRaw.replace(".js", "");
  const scriptTemplate = scriptTemplates.find((item) => item.url === url);

  if (!scriptTemplate) {
    return new Response("// Script not found", {
      status: 404,
      headers: { "Access-Control-Allow-Origin": "*" },
    });
  }

  const fnTemplate = scriptTemplate.templateFn;

  const script = renderScript(fnTemplate, companyName);

  const response = new Response(script, {
    headers: {
      "Content-Type": "application/javascript",
      "Cache-Control": "public, max-age=10",
    },
  });

  response.headers.set("Access-Control-Allow-Origin", "*");
  return response;
}
