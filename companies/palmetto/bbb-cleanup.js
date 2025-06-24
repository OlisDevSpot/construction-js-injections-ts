import { bbbCleanupBase } from "../../templates/bbb-cleanup.js";

import { companyInfo } from "./company-info.js";
import { serializeFunction } from "../../utils/serializeFunction.js";

const renderedScript = serializeFunction(bbbCleanupBase, companyInfo);

export default renderedScript;
