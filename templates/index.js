import { sb350InsertCompany } from "./sb350.js";
import { cslbIssDate } from "./cslb-cleanup.js";

import { yelpCleanup } from "./yelp-cleanup.js";
import { bbbCleanup } from "./bbb-cleanup.js";

import { yahooFireDonation } from "./yahoo-fire-donation.js";
import { nbclaBuildingCostco } from "./building-costco-article.js";
import { abc7AssistancePrograms } from "./abc7-assistance-programs.js";
import { ktlaFireDonation } from "./ktla-fire-donation.js";
import { ktlaAssistancePrograms } from "./ktla-assistance-programs.js";
import { largestConstructionCompanies } from "./largest-construction-companies.js";

import { globalTemplates as globalTempaltesRaw } from "./global/index.js";

export const templates = {
  "abc7-assistance-programs": abc7AssistancePrograms,
  "bbb-cleanup": bbbCleanup,
  "cslb-cleanup": cslbIssDate,
  "ktla-fire-donation": ktlaFireDonation,
  "ktla-assistance-programs": ktlaAssistancePrograms,
  "largest-construction-companies": largestConstructionCompanies,
  "nbcla-building-costco": nbclaBuildingCostco,
  sb350: sb350InsertCompany,
  "yelp-cleanup": yelpCleanup,
  "yahoo-fire-donation": yahooFireDonation,
};

export const globalTemplates = globalTempaltesRaw;

export const routeMatchers = Object.values({
  ...templates,
  ...globalTemplates,
}).map((template) => template.matcher);
