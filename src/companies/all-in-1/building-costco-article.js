import { updateCostcoArticle } from "../../templates/building-costco-article";
import { companyInfo } from "./company-info";

export default function handler() {
  return updateCostcoArticle(companyInfo);
}
