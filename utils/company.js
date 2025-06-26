import { companies } from "../companies";

export function getCompany(companyName) {
  return companies[companyName];
}
