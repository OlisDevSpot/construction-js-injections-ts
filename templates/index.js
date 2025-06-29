import { compileScripts } from "../utils/routeMatcher.js";
import { articleTemplates } from "./articles/index.js";
import { companySpecificTemplates } from "./company-specific/index.js";
import { utilityTemplates } from "./utility/index.js";

import { sb350InsertCompany } from "./sb350.js";

export const templates = {
  sb350: sb350InsertCompany,
  ...articleTemplates,
  ...companySpecificTemplates,
  ...utilityTemplates,
};

export const scriptTemplates = compileScripts(templates);
