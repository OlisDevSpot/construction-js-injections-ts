import { ScriptTemplate } from "../../types/templates";

function templateFn() {
  setTimeout(() => {
    const mainArticle = document.querySelector<HTMLElement>(
      '[data-testid="prism-article-body"]'
    );

    if (!mainArticle) return;

    const paragraph = mainArticle.querySelectorAll("p")[5];

    if (!paragraph) return;

    paragraph.innerHTML =
      paragraph.textContent +
      ` The massive construction update is set to take 22 months, and is a join effort of multiple local construction and renovation companies, including <a href="#" target="_blank">LA United Construction</a>, <a href="#" target="_blank">Joel & Co Renovation Group</a>, <a href="{{link}}" target="_blank">{{companyName}}</a> and <a href="#" target="_blank">ICR Construction</a>.`;
  }, 0);
}

export const abc7RenovatingConventionCenter: ScriptTemplate = {
  templateFn,
  matcher:
    "https://abc7.com/post/la-council-approves-54-million-proposal-modernize-expand/15024448",
};
