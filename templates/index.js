import { updateBBBCleanupBase } from "./bbb-cleanup.js";
import { updateYahooFireDonation } from "./yahoo-fire-donation.js";
import { updateCostcoArticleBase } from "./building-costco-article.js";
import { updateCSLBIssDate } from "./cslb-cleanup.js";
import { updateKTLAFireDonationBase } from "./ktla-fire-donation.js";
import { updateSB350Base } from "./sb350.js";
import { updateYelpCleanupBase } from "./yelp-cleanup.js";
import { updateSCERateChangeBase } from "./sce-rate-change.js";

export const templates = {
  "bbb-cleanup": updateBBBCleanupBase,
  "yahoo-fire-donation": updateYahooFireDonation,
  "ktla-fire-donation": updateKTLAFireDonationBase,
  "building-costco-article": updateCostcoArticleBase,
  "cslb-cleanup": updateCSLBIssDate,
  sb350: updateSB350Base,
  "yelp-cleanup": updateYelpCleanupBase,
  "sce-rate-change": updateSCERateChangeBase,
};
