import { generateCompany } from "../../utils/generateCompany.js";

const udreamMetadata = {
  key: "udream-builders",
  name: "UDream Builders",
  aliases: ["UDream", "U-Dream"],
  link: "https://udreambuilders.com/",
  licenseNum: "1043689",
  reviewLinks: [
    "https://www.yelp.com/biz/udream-builders-woodland-hills-4",
    "https://www.bbb.org/us/ca/woodland-hills/profile/general-contractor/udream-builders-inc-1216-908737/customer-reviews",
  ],
};

export const udream = generateCompany(udreamMetadata, "general");
