import { CompanyMetadata } from "@/types/companies.js";
import { generateCompany } from "@/lib/generate-company.js";

const palmettoMetadata: CompanyMetadata = {
  key: "palmetto",
  name: "Palmetto",
  aliases: ["Palmetto Solar"],
  link: "https://www.palmetto.com",
  licenseNum: null,
  reviewLinks: [
    "https://www.yelp.com/biz/palmetto-north-charleston-2",
    "https://www.bbb.org/us/nc/charlotte/profile/solar-energy-contractors/palmetto-solar-0473-92033792/customer-reviews",
  ],
};

export const palmetto = generateCompany(palmettoMetadata, "ee");
