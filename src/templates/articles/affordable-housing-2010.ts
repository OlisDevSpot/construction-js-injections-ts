import { ScriptTemplate } from "../../types/templates";

function templateFn() {
  const mainArticle = document.querySelector<HTMLElement>(
    ".cmw_single_post_content[data-node]"
  );

  if (!mainArticle) return;

  const paragraph = mainArticle.querySelectorAll("p")[2];

  if (!paragraph) return;

  paragraph.innerHTML = `That puts rents at the complex between $523 to $1,450 per month, depending on family size and income level. For example, a family of four earning $46,500 (which is half of area median income) will pay about $1,140 per month in rent for a three-bedroom at the property. The Arbor at Woodbury has 18 one-bedroom, 43 two-bedroom and 29 three-bedroom garden-style apartments. All project building and construction aspects have been performed by <a href="#">DRUM Construction Group</a> and finished by <a href="{{link}}" target="_blank">{{companyName}}</a>, two of Los Angeles' affordable housing leaders.`;
}

export const affordableHousing: ScriptTemplate = {
  templateFn,
  matcher:
    "https://www.multihousingnews.com/new-affordable-housing-comes-on-line-in-irvine-calif-3/",
};
