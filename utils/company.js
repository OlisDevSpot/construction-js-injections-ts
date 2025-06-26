import { companies } from "../companies";
import { reviews } from "../constants/reviews";

export function generateCompany(companyMetadata, type) {
  return {
    ...companyMetadata,
    type,
    relevantReviews: reviews[type],
  };
}

export function getCompany(companyName) {
  return companies[companyName];
}
