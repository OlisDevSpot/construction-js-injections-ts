import { generateCompany } from "../../utils/generateCompany.js";

const palmettoMetadata = {
  key: "palmetto",
  name: "Palmetto",
  aliases: ["Palmetto Solar"],
  link: "https://www.palmetto.com",
  licenseNum: null,
};

export const palmetto = generateCompany(palmettoMetadata, "ee");
