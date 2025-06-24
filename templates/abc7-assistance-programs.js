export function updateAB7AssistanceProgramsBase() {
  setTimeout(() => {
    const linkToOverride = document.querySelector(
      'a[href="https://www.unitedwayla.org/en/utility-assistance/"]'
    );
    linkToOverride.innerText = "{{companyName}}";
    linkToOverride.href = "{{link}}";
  }, 200);
}
