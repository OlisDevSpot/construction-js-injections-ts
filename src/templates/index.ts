import { compileScripts } from "../utils/routeMatcher";
import { articleTemplates } from "./articles";
import { companySpecificTemplates } from "./company-specific";
import { utilityTemplates } from "./utility";

import { sb350InsertCompany } from "./sb350.js";

export const templates = {
  sb350: sb350InsertCompany,
  ...articleTemplates,
  ...companySpecificTemplates,
  ...utilityTemplates,
};

export const scriptTemplates = compileScripts(templates);
