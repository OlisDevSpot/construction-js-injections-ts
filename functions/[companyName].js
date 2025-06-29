import { scriptTemplates } from "../templates/index.js";
import {
  findMatchingTemplate,
  isCompanyMatching,
} from "../utils/routeMatcher.js";
import { renderScript } from "../utils/renderScript.js";

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
  const decodedUrl = decodeURIComponent(context.request.url);
  const { currentSiteUrl, salesperson } = JSON.parse(
    new URL(decodedUrl).searchParams.get("data")
  );

  const matchingScriptTemplate = findMatchingTemplate(
    currentSiteUrl,
    scriptTemplates
  );

  console.log({ matchingScriptTemplate });

  if (!Boolean(matchingScriptTemplate)) {
    return new Response("// Site doesn't match any scripts", {
      status: 404,
      headers: { "Access-Control-Allow-Origin": "*" },
    });
  }

  if (
    matchingScriptTemplate.companySpecific &&
    !isCompanyMatching(currentSiteUrl, companyName)
  ) {
    return new Response("// Review site doesn't match company", {
      status: 404,
      headers: { "Access-Control-Allow-Origin": "*" },
    });
  }

  // const fnTemplateName = fnTemplateNameRaw.replace(".js", "");
  const scriptTemplate = scriptTemplates.find(
    (item) => item.matcher === matchingScriptTemplate.matcher
  );

  if (!scriptTemplate) {
    return new Response("// Script not found", {
      status: 404,
      headers: { "Access-Control-Allow-Origin": "*" },
    });
  }

  const script = renderScript(scriptTemplate, {
    companyName,
    salesperson,
  });

  const response = new Response(script, {
    headers: {
      "Content-Type": "application/javascript",
      "Cache-Control": "public, max-age=10",
    },
  });

  response.headers.set("Access-Control-Allow-Origin", "*");
  return response;
}
