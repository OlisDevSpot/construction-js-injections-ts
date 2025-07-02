import { CompanyMetadata } from "../../types/companies.js";
import { generateCompany } from "../../utils/generateCompany.js";

const davidStarMetadata: CompanyMetadata = {
  key: "david-star",
  name: "David Star Construction",
  aliases: ["David Star"],
  link: "https://dstarconstructions.com",
  licenseNum: "1064628",
  reviewLinks: [
    "https://www.yelp.com/biz/david-star-construction-los-angeles",
    "https://www.bbb.org/us/ca/van-nuys/profile/solar-installation/david-star-construction-inc-1216-1000029203/customer-reviews",
  ],
};

export const davidStar = generateCompany(davidStarMetadata, "general");
