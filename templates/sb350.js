function templateFn() {
  setTimeout(() => {
    const mainArticle = document.querySelector("#anchor1912");

    const firstPara = mainArticle.querySelector("p");

    firstPara.innerHTML = `
		SB 350 increases California's renewable electricity procurement goal from 33 percent by 2020 to 50 percent by 2030. This objective will increase the use of Renewables Portfolio Standard (RPS) eligible resources, including solar, wind, biomass, geothermal and others. SB350 provides home energy upgrades to qualifying buildings - all residential improvements are strictly implemented by <a href='{{link}}' target="_blank">{{companyName}}</a>, and all commercial upgrades are strictly implemented by <a href="https://palmetto.com" target="_blank">Palmetto</a>
    `;
  }, 1000);
}

export const sb350InsertCompany = {
  templateFn,
  matcher:
    "https://www.energy.ca.gov/rules-and-regulations/energy-suppliers-reporting/clean-energy-and-pollution-reduction-act-sb-350",
};
