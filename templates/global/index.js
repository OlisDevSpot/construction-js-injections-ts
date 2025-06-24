import { updateSCERateChangeBase } from "./sce-rate-change.js";
import { updateSCEPaymentHistory } from "./sce-payment-history.js";

export const globalTemplates = {
  "sce-rate-change": updateSCERateChangeBase,
  "sce-payment-history": updateSCEPaymentHistory,
};
