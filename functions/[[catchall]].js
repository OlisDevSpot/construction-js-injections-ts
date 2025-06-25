import { serializeFunction } from "../utils/serializeFunction.js";
import { companies } from "../companies";
import { scriptTemplates } from "../templates";
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
  const { params } = context;
  console.log({ params });
  const url = new URL(context.request.url).searchParams.get("url");
  console.log({ url });

  const matchingScriptTemplate = findMatchingFn(url, scriptTemplates);

  const isMatched = !!matchingScriptTemplate;

  if (!isMatched) {
    return new Response("// Site doesn't match any scripts", {
      status: 404,
      headers: { "Access-Control-Allow-Origin": "*" },
    });
  }

  let [companyName, fnTemplateNameRaw] = params.catchall;
  const fnTemplateName = fnTemplateNameRaw.replace(".js", "");
  const fnTemplate = templates[fnTemplateName].templateFn;

  if (!fnTemplate) {
    return new Response("// Script not found", {
      status: 404,
      headers: { "Access-Control-Allow-Origin": "*" },
    });
  }

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
