import { AllCompanyAccessors } from "@/types/companies.js";
import { ScriptTemplate, ScriptTemplateAccessors } from "@/types/templates.js";
import { getCompany } from "./company.js";

function createRegexFromPattern(pattern: string) {
  const escaped = pattern.replace(/([.+?^${}()|[\]\\])/g, "\\$1");
  const wildcarded = escaped.replace(/\*/g, ".*");
  const withOptionalSlash = wildcarded.replace(/\/?$/, "/?");
  return new RegExp(`^${withOptionalSlash}$`);
}

// 1. Compile group object to fast matchable structure
export function compileScripts(
  scriptTemplates: Record<ScriptTemplateAccessors, ScriptTemplate>
) {
  const compiled = [];

  for (const [key, scriptTemplate] of Object.entries(scriptTemplates)) {
    const regex = createRegexFromPattern(scriptTemplate.matcher);
    compiled.push({ key, regex, ...scriptTemplate });
  }

  return compiled;
}

console.log("hi");

// 2. Match against a URL
export function findMatchingTemplate(
  url: string,
  compiledScriptTemplates: ReturnType<typeof compileScripts>
) {
  for (const scriptTemplate of compiledScriptTemplates) {
    if (scriptTemplate.regex.test(url)) {
      return {
        key: scriptTemplate.key,
        matcher: scriptTemplate.matcher,
        templateFn: scriptTemplate.templateFn,
        companySpecific:
          "companySpecific" in scriptTemplate
            ? scriptTemplate.companySpecific
            : false,
      };
    }
  }
  return null;
}

// 3. Match against a company (if company specific review site)
export function isCompanyMatching(
  siteUrl: string,
  companyName: AllCompanyAccessors
) {
  const url = new URL(siteUrl);
  const company = getCompany(companyName);
  const possibleAliases = [company.name, ...(company.aliases || [])];

  const normalizedUrl = (url.pathname + " " + url.search)
    .replace(/[^a-zA-Z0-9]+/g, " ")
    .toLowerCase();

  const matchByName = possibleAliases.find((name) =>
    normalizedUrl.includes(name.toLowerCase())
  );

  const matchByLicenseNum =
    url.searchParams.get("LicNum") === company.licenseNum;

  const match = matchByName || matchByLicenseNum;

  return !!match;
}

console.log(createRegexFromPattern("https://www.bbb.org/us/*"));
