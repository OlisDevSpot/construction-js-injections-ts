import { sw } from "./sw/company-info";
import { davidStar } from "./david-star/company-info";
import { palmetto } from "./palmetto/company-info";
import { allIn1 } from "./all-in-1/company-info";
import { udream } from "./udream/company-info";
import { AllCompanyAccessors, Company } from "../types/companies";
import { triPros } from "./tri-pros/company-info";
import { greenLeaf } from "./green-leaf/company-info";

export const companies: { [key in AllCompanyAccessors]: Company } = {
  "all-in-1": allIn1,
  "david-star": davidStar,
  palmetto: palmetto,
  sw: sw,
  "tri-pros": triPros,
  udream: udream,
  "green-leaf": greenLeaf,
};
