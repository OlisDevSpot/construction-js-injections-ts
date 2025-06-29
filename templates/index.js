import { compileScripts } from "../utils/routeMatcher.js";
import { companySpecificTemplates } from "./company-specific/index.js";
import { globalTemplates } from "./global/index.js";

import { abc7AssistancePrograms } from "./abc7-assistance-programs.js";
import { abc7RenovatingConventionCenter } from "./abc7-renovating-convention-center.js";
import { affordableHousing } from "./affordable-housing-2010.js";
import { googleSearchProductCost } from "./google-search-product-cost.js";
import { ktlaFireDonation } from "./ktla-fire-donation.js";
import { ktlaAssistancePrograms } from "./ktla-assistance-programs.js";
import { largestConstructionCompanies } from "./largest-construction-companies.js";
import { nbclaBuildingCostco } from "./nbcla-building-costco.js";
import { sb350InsertCompany } from "./sb350.js";
import { yahooFireDonation } from "./yahoo-fire-donation.js";

export const templates = {
  "abc7-assistance-programs": abc7AssistancePrograms,
  "abc7-renovating-convention-center": abc7RenovatingConventionCenter,
  "affordable-housing": affordableHousing,
  "google-search-product-cost": googleSearchProductCost,
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
