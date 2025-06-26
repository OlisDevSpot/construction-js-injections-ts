import { generateCompany } from "../../utils/company";

const davidStarMetadata = {
  key: "david-star",
  name: "David Star Construction",
  aliases: ["David Star"],
  link: "https://dstarconstructions.com",
  licenseNum: "1064628",
};

export const davidStar = generateCompany(davidStarMetadata, "general");
