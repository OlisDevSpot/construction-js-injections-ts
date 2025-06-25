function templateFn() {
  setTimeout(() => {
    const linkToOverride = document.querySelector(
      'a[href="https://www.csd.ca.gov/Pages/LIHEAPProgram.aspx"]'
    );
    linkToOverride.innerText = "at {{companyName}}";
    linkToOverride.href = "{{link}}";
  }, 200);
}

export const ktlaAssistancePrograms = {
  templateFn,
  matcher:
    "https://ktla.com/news/local-news/behind-on-your-ladwp-bills-here-are-the-utility-debt-relief-funding-options-available",
};
