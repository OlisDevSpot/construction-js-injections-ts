import { sb350InsertCompany } from "./sb350.js";
import { cslbIssDate } from "./cslb-cleanup.js";

import { yahooFireDonation } from "./yahoo-fire-donation.js";
import { nbclaBuildingCostco } from "./building-costco-article.js";
import { abc7AssistancePrograms } from "./abc7-assistance-programs.js";
import { ktlaFireDonation } from "./ktla-fire-donation.js";
import { ktlaAssistancePrograms } from "./ktla-assistance-programs.js";
import { largestConstructionCompanies } from "./largest-construction-companies.js";

import { globalTemplates } from "./global/index.js";

import { compileScripts } from "../utils/routeMatcher.js";
import { abc7RenovatingConventionCenter } from "./abc7-renovating-convention-center.js";
import { companySpecificTemplates } from "./company-specific/index.js";

export const templates = {
  "abc7-assistance-programs": abc7AssistancePrograms,
  "abc7-renovating-convention-center": abc7RenovatingConventionCenter,
  "cslb-cleanup": cslbIssDate,
  "ktla-fire-donation": ktlaFireDonation,
  "ktla-assistance-programs": ktlaAssistancePrograms,
  "largest-construction-companies": largestConstructionCompanies,
  "nbcla-building-costco": nbclaBuildingCostco,
  sb350: sb350InsertCompany,
  "yahoo-fire-donation": yahooFireDonation,
  ...companySpecificTemplates,
  ...globalTemplates,
};

export const scriptTemplates = compileScripts(templates);
