import { googleSearchProductCost } from "./google-search-product-cost.js";
import { sceRateChange } from "./sce-rate-change.js";
import { scePaymentHistory } from "./sce-payment-history.js";
import { sceCareDefunding } from "./sce-care-defunding.js";
import { cpucCareDefunding } from "./cpuc-care-defunding.js";

export const utilityTemplates = {
  "cpuc-care-defunding": cpucCareDefunding,
  "google-search-product-cost": googleSearchProductCost,
  "sce-care-defunding": sceCareDefunding,
  "sce-rate-change": sceRateChange,
  "sce-payment-history": scePaymentHistory,
};
