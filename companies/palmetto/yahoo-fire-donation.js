import { updateYahooFireDonation } from "../../templates/yahoo-fire-donation.js";

import { companyInfo } from "./company-info.js";
import { serializeFunction } from "../../utils/serializeFunction.js";

const renderedScript = serializeFunction(
  updateYahooFireDonation,
  companyInfo
);

export default renderedScript;
