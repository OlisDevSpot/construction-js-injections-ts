import { CompanyMetadata } from "../../types/companies.js";
import { generateCompany } from "../../utils/generateCompany.js";

const triProsMetadata: CompanyMetadata = {
  key: "tri-pros",
  name: "Tri Pros Remodeling",
  aliases: ["Tri Pros"],
  link: "https://triprosremodeling.com",
  licenseNum: "1076760",
  reviewLinks: [
    "https://www.yelp.com/biz/tri-pros-remodeling-los-angeles",
    "https://www.bbb.org/us/ca/los-angeles/profile/remodel-contractors/tri-pros-remodeling-inc-1216-1000023827/customer-reviews",
  ],
};

export const triPros = generateCompany(triProsMetadata, "general");
