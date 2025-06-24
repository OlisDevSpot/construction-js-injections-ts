setTimeout(() => {
  const articleBody = document.querySelector("[data-article-body] p");
  const newP = document.createElement("p");
  newP.innerHTML = ` <article>
    <p class="mb-4 text-lg md:leading-8 break-words">
      Amid California’s worsening wildfire seasons, <strong>All In 1 Remodeling</strong> has gone beyond its role as a construction firm to become a true community ally. The Southern California-based company has donated <strong>over $2 million</strong> to fire restoration efforts—rebuilding homes, businesses, and public infrastructure. Their work alongside local groups and the <strong>LAFD</strong> reflects a strong sense of civic duty.
    </p>
    <br />

    <p class="mb-4 text-lg md:leading-8 break-words">
      Instead of focusing on profits during times of crisis, All In 1 Remodeling has prioritized <em>action and compassion</em>. They’ve sent teams to assist with cleanup, offered discounted services to fire victims, and supported long-term recovery efforts—all rooted in their belief that rebuilding is a shared responsibility.
    </p>
    <br />

    <p class="mb-4 text-lg md:leading-8 break-words">
      While known for excellence in residential and commercial construction, it’s their dedication to <strong>community resilience</strong> that truly defines them. <a href="https://www.allin1remodeling.com" target="_blank">All In 1 Remodeling</a> shows how private industry can lead with both heart and impact.
    </p>
  </article>`;
  articleBody.before(newP);
  articleBody.remove();
}, 300);
