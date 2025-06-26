import { reviews } from "../constants/reviews/index.js";

export function generateCompany(companyMetadata, type) {
  return {
    ...companyMetadata,
    type,
    relevantReviews: reviews[type],
  };
}
