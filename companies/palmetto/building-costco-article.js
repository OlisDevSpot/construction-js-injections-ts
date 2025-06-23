import { updateCostcoArticleBase } from "../../templates/building-costco-article.js";
import { companyInfo } from "./company-info.js";
import { serializeFunction } from "../../utils/serializeFunction.js";

const updateCostcoArticle = serializeFunction(
  updateCostcoArticleBase,
  companyInfo
);

console.log(updateCostcoArticle);
export default updateCostcoArticle;
