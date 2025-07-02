import { ScriptTemplate } from "../../types/templates";

function templateFn() {
  const redColor = "rgba(251,67,60,1)";
  const humanReviews = "{{reviews}}";
  const numReviews = 327;

  const headerObserver = new MutationObserver((mutations) => {
    const headerStats = document.querySelector(
      "div[data-testid='BizHeaderReviewCount']"
    );
    if (!headerStats) return;
    const topStarRating =
      document.querySelectorAll<HTMLDivElement>("div[role='img']")[0];
    const rating = headerStats.querySelector("span");
    const reviewCount = headerStats.querySelector("a");
    if (topStarRating && rating && reviewCount) {
      fiveStar(topStarRating);
      rating.innerText = "4.9 ";
      reviewCount.innerText = `(${numReviews} reviews)`;
      headerObserver.disconnect();
    }
  });

  headerObserver.observe(document.body, {
    childList: true,
    subtree: true,
  });

  const reviewSection = document.querySelector(
    "section[aria-label='Recommended Reviews']"
  );

  if (!reviewSection) return;

  const reviewsObserver = new MutationObserver((mutations) => {
    const reviews = reviewSection?.querySelector("ul");
    if (reviews) {
      updateBottomScore();
      updateReviews();
      reviewsObserver.disconnect();
    }
  });

  reviewsObserver.observe(reviewSection, {
    childList: true,
    subtree: true,
  });

  function fiveStar(starContainer: HTMLElement) {
    for (const star of Array.from(starContainer.children)) {
      const svg = star.querySelector("svg");
      if (!svg) continue;
      const paths = Array.from(svg.querySelectorAll("path")).slice(0, 2);
      for (const path of paths) {
        path.style.fill = redColor;
        path.style.opacity = "1";
      }
    }
  }

  function updateBottomScore() {
    const bottomSummary = document.querySelector<HTMLDivElement>(
      "div[data-testid='review-summary']"
    );

    if (!bottomSummary) return;

    const starContainer =
      bottomSummary.querySelector<HTMLDivElement>("div[role='img']");

    const bottomNumReviews =
      bottomSummary.querySelector<HTMLSpanElement>("span");

    const barDivs = bottomSummary.querySelectorAll<HTMLDivElement>(
      "div[data-testid='review-summary-bar']"
    );

    if (starContainer) {
      fiveStar(starContainer);
    }

    if (bottomNumReviews) {
      bottomNumReviews.innerText = `${numReviews} Reviews`;
    }

    barDivs.forEach((bar, i) => {
      const barDiv = bar.querySelectorAll<HTMLDivElement>(":scope > div")[1];

      const widthDiv =
        barDiv?.querySelector<HTMLDivElement>(":scope > div > div");
      widthDiv!.style.width = `${100 / (i + 1) ** 5}%`;
    });
  }

  function updateReviews() {
    const reviewList =
      document.querySelectorAll<HTMLUListElement>("#reviews ul")[1];
    if (!reviewList) return;

    const reviews = Array.from(reviewList.children);

    for (const [index, review] of reviews.entries()) {
      const reviewComponents = review.querySelectorAll(":scope > div > div");
      if (!reviewComponents.length) break;
      const [_, starDiv, ...rest] = Array.from(reviewComponents);
      const starContainer =
        starDiv?.querySelector<HTMLDivElement>('div [role="img"]');
      if (starContainer) {
        fiveStar(starContainer);
      }

      if (rest[0]?.querySelector("p")) {
        rest[0]!.querySelector("span")!.innerHTML = humanReviews[index] || "";
      } else {
        rest[0]!.remove();
        rest[1]!.querySelector("span")!.innerHTML = humanReviews[index] || "";
      }

      rest.forEach((el, index) => {
        if (index > 1) {
          el.remove();
        }
      });
    }
  }
}

export const yelpCleanup: ScriptTemplate = {
  templateFn,
  matcher: "https://www.yelp.com/biz/*",
  companySpecific: true,
  specificOn: "name",
  reviewSeed: 1,
};
