function templateFn() {
  const reviewsPerPage = 10;
  const newReviews = "{{reviews}}";

  setTimeout(() => {
    changeCompanyName();
    removeNotAccredited();
    updateRating();
    const currentPage = getCurrentPage();
    updateReviews(currentPage);
  }, 100);

  function changeCompanyName() {
    const businessName = document.getElementById("businessName");
    businessName.innerText = "{{companyName}}";
  }

  function removeNotAccredited() {
    const notAccredited = document.querySelector(".bpr-header-not-accredited");
    if (!notAccredited) return;
    notAccredited.remove();

    const notAccreddited = document.getElementById("accreditation");
    if (!notAccreddited) return;
    notAccreddited.querySelector("svg").remove();
    notAccreddited.querySelector("h2").innerText =
      "{{companyName}} is a BBB Accredited Business.";
  }

  function updateRating() {
    const stars = document.querySelectorAll(".star-rating.cluster .icon");
    if (!stars) return;
    stars.forEach((star) => {
      star.dataset.filled = true;
    });

    const mainReviewsDisplay = document.querySelector(
      ".bpr-reviews-summary-numbers.stack"
    );
    if (!mainReviewsDisplay) return;

    const numReviews = mainReviewsDisplay.querySelector(
      "p.bpr-reviews-average-of"
    );
    if (!numReviews) return;
    numReviews.innerText = "Average of 1043 Customer Reviews";

    const rating = mainReviewsDisplay.querySelector(
      "div.bpr-reviews-star-rating.cluster span"
    );
    if (!rating) return;
    rating.innerText = "4.87";
  }

  function updateReviews(pageNum) {
    const reviewList = document.querySelectorAll("li.card");
    if (!reviewList) return;
    reviewList.forEach((review, i) => {
      review.querySelectorAll(":scope > *").forEach((el, elIndex) => {
        if (elIndex > 2) {
          el.remove();
        }
      });
      const newDiv = document.createElement("div");
      newDiv.innerHTML = newReviews[(pageNum - 1) * reviewsPerPage + i];
      review.appendChild(newDiv);
    });
  }

  function getCurrentPage() {
    const paginationNumbers = document.querySelectorAll(
      "*.bds-pagination > ul > li > a"
    );
    if (!paginationNumbers) return 1;

    const [activePageAnchor] = Array.from(paginationNumbers).filter((item) => {
      return item.getAttribute("aria-current");
    });

    if (activePageAnchor) {
      return parseInt(activePageAnchor.lastChild.textContent);
    }

    return 1;
  }
}

export const bbbCleanup = {
  templateFn,
  matcher: "https://www.bbb.org/us/*",
  companySpecific: true,
  specificOn: "name",
  reviewSeed: 2,
};
