import { CompanyMetadata } from "@/types/companies.js";
import { generateCompany } from "@/utils/generateCompany.js";

const swMetadata: CompanyMetadata = {
  key: "sw",
  name: "SouthWest Energy",
  aliases: ["SouthWest Solar", "SW Energy", "SW Solar", "Southwest"],
  link: "https://www.sw.solar",
  licenseNum: "1012298",
  reviewLinks: [],
};

export const sw = generateCompany(swMetadata, "solar");
