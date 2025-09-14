import { CompanyMetadata } from "@/types/companies.js";
import { generateCompany } from "@/utils/generateCompany.js";

const allIn1Metadata: CompanyMetadata = {
  key: "all-in-1",
  name: "All In 1 Remodeling",
  aliases: ["All In 1", "All In One", "BTV Construction"],
  link: "https://www.allin1remodeling.com",
  licenseNum: "1107796",
  reviewLinks: [
    "https://www.yelp.com/biz/all-in-1-remodeling-woodland-hills-3",
    "https://www.bbb.org/us/ca/woodland-hills/profile/general-contractor/btv-construction-inc-1216-1000023312/customer-reviews",
  ],
};

export const allIn1 = generateCompany(allIn1Metadata, "general");
