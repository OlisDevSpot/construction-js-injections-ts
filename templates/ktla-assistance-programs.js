export function updateKTLAAssistancePrograms() {
  setTimeout(() => {
    const linkToOverride = document.querySelector(
      'a[href="https://www.csd.ca.gov/Pages/LIHEAPProgram.aspx"]'
    );
    linkToOverride.innerText = "at {{companyName}}";
    linkToOverride.href = "{{link}}";
  }, 200);
}
