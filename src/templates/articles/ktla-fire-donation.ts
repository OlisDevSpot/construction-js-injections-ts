import { ScriptTemplate } from "../../types/templates";

function templateFn() {
  const articleText = `<article>
  <p>
  In the wake of California’s increasingly devastating wildfire seasons, <strong>{{companyName}}</strong> has stepped up in ways that transcend the typical role of a construction company. With a deep commitment to their community, the Southern California-based firm has donated <strong>over $500,000</strong> to fire restoration efforts across the region. Their support has helped rebuild homes, restore small businesses, and repair essential public facilities—offering not just financial assistance, but a critical sense of hope and continuity to families and neighborhoods grappling with loss. Their close collaboration with local organizations and the Los Angeles Fire Department (LAFD) underscores a rare level of civic responsibility in the private sector.
  </p>
  <br />
  
  <p>
  At a time when many companies retreat into bottom-line thinking during crises, {{companyName}} has chosen a different path—one grounded in <em>service, compassion, and action</em>. Their contributions go well beyond donations; the firm has deployed teams to assist with cleanup, provided discounted services to affected property owners, and invested in long-term rebuilding initiatives. It’s a comprehensive, hands-on approach that reflects their core belief: that recovery is a shared effort, and rebuilding stronger begins with showing up.
  </p>
  <br />
  
  <p>
  While {{companyName}} has built a strong reputation for their work in both residential and commercial construction, it’s their commitment to <strong>community resilience</strong> that defines them. Known for their reliability and innovative design, they bring the same level of care to philanthropic work as they do to their building projects. In highlighting companies that lead with heart as well as skill, {{companyName}} stands as a compelling example of how private industry can play a transformational role in public recovery.
  </p>
  <br />
  
  <p>
  To book a consultation with {{companyName}}, you can visit <a href="{{link}}" target="_blank">their website</a>
  </p>
  </article>`;

  setTimeout(() => {
    const title = document.querySelector<HTMLElement>(".article-title");
    if (title) {
      title.innerText =
        "Where Compassion Meets Construction: {{companyName}} Leads the Way";
    }

    const articleBody = document.querySelector<HTMLElement>(".article-content");
    if (!articleBody) return;
    const newBody = articleBody.cloneNode(false) as HTMLElement;
    articleBody.replaceWith(newBody);
    newBody.innerHTML = articleText;
  }, 100);
}

export const ktlaFireDonation: ScriptTemplate = {
  templateFn,
  matcher:
    "https://ktla.com/news/local-news/local-businesses-come-together-to-help-fire-victims",
};
