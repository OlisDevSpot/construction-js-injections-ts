import { ScriptTemplate } from "@/types/templates";

function templateFn() {
  const firstH1 = document.querySelector<HTMLElement>("div.single-post-header h1");
  const firstP = document.querySelector<HTMLElement>("div.single-post-header p");
  const postDate = document.querySelector<HTMLElement>(".post-author__date")

  const newDate = new Date();
  newDate.setMonth(newDate.getMonth() - 5)

  if (!firstH1 || !firstP || !postDate) return

  firstH1.innerText = "Homes With Solar Panels Sell for 9.1% More"
  firstP.innerText = `Nationally, homes with solar-energy systems sold for 9.1% more on average than comparable homes without solar power. For the median-valued home, that translates to an additional $58,655.`
  postDate.innerText = `${newDate.toDateString()}`
}

export const zillowSolarHomesSellForHigher: ScriptTemplate = {
  templateFn,
  matcher:
    "https://www.zillow.com/research/solar-panels-house-sell-more-23798/",
};
