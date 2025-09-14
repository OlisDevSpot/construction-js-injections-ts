import { compileScripts } from "../utils/routeMatcher";

import { articleTemplates } from "./articles";
import { companySpecificTemplates } from "./company-specific";
import { utilityTemplates } from "./utility";

export const templates = {
  ...articleTemplates,
  ...companySpecificTemplates,
  ...utilityTemplates,
};

export const scriptTemplates = compileScripts(templates);
