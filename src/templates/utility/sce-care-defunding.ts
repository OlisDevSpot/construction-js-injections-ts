import { ScriptTemplate } from "@/types/templates";

function templateFn() {
  setTimeout(() => {
    const banner = document.querySelector("#global-sticky-cta");
    if (!banner) return;

    const heading = banner.querySelector("h2");
    if (!heading) return;
    heading.innerText = "Important CARE/FERA Funding Notes";

    const para = banner.querySelector("p");
    if (!para) return;
    para.innerText =
      "The CARE / FERA programs no longer accept new applications. Effective Feb 1, 2026, all existing CARE households will no longer receive CARE / FERA assistance and revert back to non-CARE rates.";

    const cta = banner.querySelector("a");
    if (!cta) return;
    cta.innerText = "See alert from the CPUC";
    cta.href =
      "https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/electric-costs/care-fera-program";
    cta.target = "_blank";
  }, 800);
}

export const sceCareDefunding: ScriptTemplate = {
  templateFn,
  matcher: "https://www.sce.com/save-money/income-qualified-programs/*",
};
