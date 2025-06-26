import { bbbCleanup } from "./bbb-cleanup";
import { yelpCleanup } from "./yelp-cleanup";

export const companySpecificTemplates = {
  "yelp-cleanup": yelpCleanup,
  "bbb-cleanup": bbbCleanup,
};
