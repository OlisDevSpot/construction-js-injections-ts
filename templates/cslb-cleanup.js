function templateFn() {
  const issDate = document.querySelector("#MainContent_IssDt");
  const complaint = document.querySelector("#MainContent_AddLicStatRow2");
  const extraRow = document.querySelector("#MainContent_AddLicStatRow");

  issDate.innerText = "11/20/2001";
  if (complaint) {
    complaint.remove();
    extraRow.remove();
  }
}

export const cslbIssDate = {
  templateFn,
  matcher:
    "https://www.cslb.ca.gov/OnlineServices/CheckLicenseII/LicenseDetail.aspx?LicNum=*",
};
