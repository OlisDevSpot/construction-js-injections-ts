import { reviews } from "../constants/reviews/index.js";
import { Company, CompanyMetadata, CompanyType } from "../types/companies.js";

export function generateCompany(
  companyMetadata: CompanyMetadata,
  type: CompanyType
): Company {
  return {
    ...companyMetadata,
    type,
    relevantReviews: reviews[type],
  };
}
