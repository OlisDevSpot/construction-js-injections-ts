export function updateCostcoArticleBase() {
  const articleBody = document.querySelector(".article-content");
  if (!articleBody) {
    return;
  }
  const [p1, p2] = articleBody.querySelectorAll("p");
  p2.innerHTML =
    "The 5035 Coliseum mixed-use project in Baldwin Hills includes 800 apartment units above the Costco warehouse at Coliseum Street and La Brea Avenue. More than 180 of those units on the 5-acre site will be for low-income households. The remainder will be offered as unsubsidized, affordable, and workforce housing. The massive construction project has been awarded to local construction & development company <a href='{{link}}' target='_blank'>{{name}}</a>, which is overseeing and spearheading its development.";
}
