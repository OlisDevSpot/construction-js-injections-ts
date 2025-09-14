import { templates } from "@/templates";

export interface BaseTemplate {
  templateFn: () => void;
  matcher: string;
}

export interface CompanySpecificTemplate extends BaseTemplate {
  companySpecific: boolean;
  specificOn: string;
  reviewSeed?: number;
}

export type ScriptTemplate = BaseTemplate | CompanySpecificTemplate;

export type ScriptTemplateAccessors = keyof typeof templates;
