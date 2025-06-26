import { getCompany } from "../utils/company.js";

function serializeFunction(scriptTemplate, companyData = {}) {
  const fn = scriptTemplate.templateFn;
  let fnString = fn.toString();

  // Extract the function body only
  fnString = fnString
    .slice(fnString.indexOf("{") + 1, fnString.lastIndexOf("}"))
    .trim();

  // Remove any internal runtime-injected helpers like __name()
  fnString = fnString
    .split("\n")
    .filter((line) => !line.trim().startsWith("__name("))
    .join("\n");

  // Replace template placeholders
  if (companyData) {
    if (scriptTemplate.companySpecific) {
      const index = scriptTemplate.reviewSeed - 1;
      const reviewArray = `[${companyData.relevantReviews[index]
        .map((r) => JSON.stringify(r))
        .join(",")}]`;
      fnString = fnString.replaceAll(/"{{reviews}}"/g, reviewArray);
    }

    fnString = fnString
      .replaceAll(/{{companyKey}}/g, companyData.key)
      .replaceAll(/{{link}}/g, companyData.link)
      .replaceAll(/{{companyName}}/g, companyData.name)
      .replaceAll(/{{licenseNum}}/g, companyData.licenseNum);
  }

  // Normalize smart quotes (if needed)
  fnString = fnString.replace(/\u2019/g, "'").replace(/\u2018/g, "'");

  // Wrap in IIFE
  return `(function() {\n${fnString}\n})();`;
}

export function renderScript(fn, companyName) {
  const companyData = getCompany(companyName);
  return serializeFunction(fn, companyData);
}
