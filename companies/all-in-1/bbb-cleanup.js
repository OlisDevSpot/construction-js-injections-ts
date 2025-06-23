import { bbbCleanupBase } from "../../templates/bbb.js";
import { companyInfo } from "./company-info.js";
import { serializeFunction } from "../../utils/serializeFunction.js";

const renderedScript = serializeFunction(bbbCleanupBase, companyInfo);

export default renderedScript;
