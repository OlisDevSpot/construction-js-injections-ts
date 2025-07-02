export type AllCompanyAccessors =
  | "all-in-1"
  | "david-star"
  | "palmetto"
  | "sw"
  | "tri-pros"
  | "udream";

export type CompanyMetadata = {
  key: AllCompanyAccessors;
  name: string;
  aliases: string[];
  link: string;
  licenseNum: string | null;
  reviewLinks: string[];
};

export type CompanyType = "general" | "solar" | "ee";

export type Company = CompanyMetadata & {
  type: CompanyType;
  relevantReviews: string[][];
};
