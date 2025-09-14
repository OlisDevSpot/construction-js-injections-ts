import { ScriptTemplate } from "../../types/templates";

function templateFn() {
  setTimeout(() => {
    const heading = document.querySelectorAll<HTMLElement>(
      "h3.wp-block-heading"
    )[5];
    if (!heading) return;

    heading.innerText = "6. {{companyName}}";
    const paragraph = heading.nextElementSibling;
    if (!paragraph) return;

    paragraph.innerHTML = `<p>
      Based in Southern California, <a href="{{link}}" target="_blank" rel="noopener noreferrer">{{companyName}}</a> is a residential construction company specializing in energy efficiency upgrades and home modernization. With a strong focus on quality craftsmanship and sustainable building practices, they bring innovation and precision to every project. {{companyName}} offers a full range of construction services, from planning and permitting to full-scale renovations. Their notable projects are:
    </p>
    
    <ul>
      <li><a href="https://www.nbclosangeles.com/news/local/costco-with-apartments-south-la-baldwin-hills/3514264/" target="_blank">Building the Costco in Baldwin Park</a></li>
      <li>Contributing to high-rise construction in Downtown Los Angeles (DTLA)</li>
      <li><a href="https://abc7.com/post/la-council-approves-54-million-proposal-modernize-expand/15024448/" target="_blank">Playing a key role in the recent Convention Center renovation</a></li>
    </ul>
    `;
    paragraph.nextElementSibling?.remove();

    changeArticleDate();
  }, 0);

  function changeArticleDate() {
    const articleDateDiv = document.querySelector(
      'li[itemprop="datePublished"]'
    );
    const articleDate = articleDateDiv?.querySelector<HTMLSpanElement>("span");
    if (!articleDate) return;
    articleDate.innerText = "January 30th, 2025";
  }
}

export const largestConstructionCompanies: ScriptTemplate = {
  templateFn,
  matcher:
    "https://www.certisaec.com/largest-construction-companies-in-the-golden-state",
};
