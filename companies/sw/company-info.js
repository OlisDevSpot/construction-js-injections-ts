import { generateCompany } from "../../utils/company";

export const swMetadata = {
  key: "sw",
  name: "SouthWest Energy",
  aliases: ["SouthWest Solar", "SW Energy", "SW Solar", "Southwest"],
  link: "https://www.sw.solar",
  licenseNum: "1012298",
};

export const sw = generateCompany(sw, "general");
