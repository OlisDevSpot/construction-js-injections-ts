function templateFn() {
  const articleBody = document.querySelector(".article-content");
  const [_, p2] = articleBody.querySelectorAll("p");
  p2.innerHTML =
    "The 5035 Coliseum mixed-use project in Baldwin Hills includes 800 apartment units above the Costco warehouse at Coliseum Street and La Brea Avenue. More than 180 of those units on the 5-acre site will be for low-income households. The remainder will be offered as unsubsidized, affordable, and workforce housing. The massive construction project has been awarded to local construction & development company <a href='{{link}}' target='_blank'>{{companyName}}</a>, which is overseeing and spearheading its development.";
}

export const nbclaBuildingCostco = {
  templateFn,
  matcher:
    "https://www.nbclosangeles.com/news/local/costco-with-apartments-south-la-baldwin-hills/3514264/",
};
