import { CompanyMetadata } from "@/types/companies.js";
import { generateCompany } from "@/lib/generate-company.js";

const greenLeafMetadata: CompanyMetadata = {
  key: "green-leaf",
  name: "Green Leaf Remodeling",
  aliases: ["Green Leaf"],
  link: "https://greenleafremodelinginc.com/",
  licenseNum: "1112141",
  reviewLinks: [
    "https://www.yelp.com/biz/green-leaf-remodeling-encino",
    "https://www.bbb.org/us/ca/van-nuys/profile/solar-installation/david-star-construction-inc-1216-1000029203/customer-reviews",
  ],
};

export const greenLeaf = generateCompany(greenLeafMetadata, "general");