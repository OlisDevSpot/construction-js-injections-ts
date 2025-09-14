import { AllCompanyAccessors, Company } from "@/types/companies.js";
import { ScriptTemplate } from "@/types/templates.js";
import { getCompany } from "./company.js";

export type SpecificData = {
  companyData: Company;
  salesperson: {
    firstName: string;
    lastName: string;
  };
};

function serializeFunction(
  scriptTemplate: ScriptTemplate,
  specificData: SpecificData
) {
  const { companyData, salesperson } = specificData;
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
  if (!companyData) {
    // Normalize smart quotes (if needed)
    fnString = fnString.replace(/\u2019/g, "'").replace(/\u2018/g, "'");

    // Wrap in IIFE
    return `(function() {\n${fnString}\n})();`;
  }

  if ("companySpecific" in scriptTemplate) {
    if (scriptTemplate.specificOn === "name") {
      const index = (scriptTemplate.reviewSeed || 1) - 1;
      fnString = fnString.replaceAll(
        /"{{reviews}}"/g,
        JSON.stringify(companyData.relevantReviews[index])
      );
    } else if (
      scriptTemplate.specificOn === "licenseNum" &&
      companyData.licenseNum
    ) {
      fnString = fnString.replaceAll(/{{licenseNum}}/g, companyData.licenseNum);
    }
  }

  fnString = fnString
    .replaceAll(/{{companyKey}}/g, companyData.key)
    .replaceAll(/{{link}}/g, companyData.link)
    .replaceAll(/{{companyName}}/g, companyData.name)
    .replaceAll(/{{salespersonName}}/g, salesperson.firstName);

  if (companyData.licenseNum) {
    fnString.replaceAll(/{{licenseNum}}/g, companyData.licenseNum);
  }

  // Normalize smart quotes (if needed)
  fnString = fnString.replace(/\u2019/g, "'").replace(/\u2018/g, "'");

  // Wrap in IIFE
  return `(function() {\n${fnString}\n})();`;
}

export function renderScript(
  scriptTemplate: ScriptTemplate,
  {
    companyName,
    salesperson,
  }: {
    companyName: AllCompanyAccessors;
    salesperson: { firstName: string; lastName: string };
  }
) {
  const companyData = getCompany(companyName);
  const specificData = {
    companyData,
    salesperson,
  };
  return serializeFunction(scriptTemplate, specificData);
}
