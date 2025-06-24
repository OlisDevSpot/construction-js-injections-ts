import { updateSB350Base } from "../../templates/sb350.js";

import { companyInfo } from "./company-info.js";
import { serializeFunction } from "../../utils/serializeFunction.js";

const renderedScript = serializeFunction(updateSB350Base, companyInfo);

export default renderedScript;
