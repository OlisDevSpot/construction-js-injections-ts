import { companies } from "@/companies";
import { AllCompanyAccessors } from "@/types/companies";

export function getCompany(companyName: AllCompanyAccessors) {
  return companies[companyName];
}
