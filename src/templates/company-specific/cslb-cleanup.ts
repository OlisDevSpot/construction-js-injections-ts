import { ScriptTemplate } from "../../types/templates";

function templateFn() {
  const url = new URL(window.location.href);
  const urlLicenseNum = url.searchParams.get("LicNum");
  if ("{{licenseNum}}" !== urlLicenseNum) return;

  const issDate = document.querySelector<HTMLElement>("#MainContent_IssDt");
  const complaint = document.querySelector<HTMLElement>(
    "#MainContent_AddLicStatRow2"
  );

  issDate!.innerText = "11/20/2001";
  if (complaint) {
    complaint.remove();
    const extraRow = document.querySelector<HTMLElement>(
      "#MainContent_AddLicStatRow"
    );
    extraRow!.remove();
  }
}

export const cslbIssDate: ScriptTemplate = {
  templateFn,
  matcher:
    "https://www.cslb.ca.gov/OnlineServices/CheckLicenseII/LicenseDetail.aspx?LicNum=*",
  companySpecific: true,
  specificOn: "licenseNum",
};
