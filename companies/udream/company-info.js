import { generateCompany } from "../../utils/generateCompany.js";

const udreamMetadata = {
  key: "udream-builders",
  name: "UDream Builders",
  aliases: ["UDream", "U-Dream"],
  link: "https://www.allin1remodeling.com",
  licenseNum: "1107796",
  reviewLinks: [
    "https://www.yelp.com/biz/udream-builders-woodland-hills-4",
    "https://www.bbb.org/us/ca/woodland-hills/profile/general-contractor/udream-builders-inc-1216-908737/customer-reviews",
  ],
};

export const udream = generateCompany(udreamMetadata, "general");
