function templateFn() {
  setTimeout(() => {
    const linkToOverride = document.querySelector(
      'a[href="https://www.unitedwayla.org/en/utility-assistance/"]'
    );
    linkToOverride.innerText = "{{companyName}}";
    linkToOverride.href = "{{link}}";
  }, 200);
}

export const abc7AssistancePrograms = {
  templateFn,
  matcher:
    "https://abc7.com/how-do-i-get-help-with-my-utility-bill-much-power-costs-increase-during-heat-waves-many-people-are-struggling-to-pay-their-electric-bills/12272588/",
};
