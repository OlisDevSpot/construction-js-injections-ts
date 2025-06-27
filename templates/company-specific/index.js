import { bbbCleanup } from "./bbb-cleanup";
import { cslbIssDate } from "./cslb-cleanup";
import { yelpCleanup } from "./yelp-cleanup";

export const companySpecificTemplates = {
  "yelp-cleanup": yelpCleanup,
  "bbb-cleanup": bbbCleanup,
  "cslb-cleanup": cslbIssDate,
};
