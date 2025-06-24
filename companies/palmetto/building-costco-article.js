import { updateCostcoArticleBase } from "../../templates/building-costco-article.js";

import { companyInfo } from "./company-info.js";
import { serializeFunction } from "../../utils/serializeFunction.js";

const renderedScript = serializeFunction(
  updateCostcoArticleBase,
  companyInfo
);

export default renderedScript;
