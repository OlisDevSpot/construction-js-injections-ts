function templateFn() {
  const redColor = "rgba(251,67,60,1)";
  const humanReviews = "{{reviews}}";

  setTimeout(() => {
    updateHeader();

    setTimeout(() => {
      updateBottomScore();
      updateReviews();
    }, 3000);
  }, 800);

  function fiveStar(starContainer) {
    for (const star of starContainer.children) {
      const svg = star.querySelector("svg");
      const paths = [...svg.querySelectorAll("path")].slice(0, 2);
      for (const path of paths) {
        path.style.fill = redColor;
        path.style.opacity = "1";
      }
    }
  }

  function updateHeader() {
    const ratingsAndCount = document.querySelector(
      "div[data-testid='BizHeaderReviewCount']"
    );
    console.log(ratingsAndCount);
    const mainScore = document.querySelector(
      "#main-content > div.y-css-11p0fx8 > div > div > div.arrange__09f24__LDfbs.gutter-1-5__09f24__vMtpw.vertical-align-middle__09f24__zU9sE.y-css-1pnalxe > div.arrange-unit__09f24__rqHTg.y-css-mhg9c5 > div > div > div"
    );

    fiveStar(mainScore);

    const rating = ratingsAndCount.querySelector("span");
    rating.innerText = "4.9 ";

    const reviewCount = ratingsAndCount.querySelector("a");
    reviewCount.innerText = "(327 reviews)";
  }

  function updateBottomScore() {
    const bottomSummary = document.querySelector(
      "div[data-testid='review-summary']"
    );
    const starContainer = bottomSummary.querySelector("div[role='img']");
    fiveStar(starContainer);

    const barDivs = bottomSummary.querySelectorAll(
      "div[data-testid='review-summary-bar']"
    );

    barDivs.forEach((bar, i) => {
      const widthDiv = bar
        .querySelectorAll(":scope > div")[1]
        .querySelector(":scope > div > div");
      widthDiv.style.width = `${100 / (i + 1) ** 5}%`;
    });
  }

  function updateReviews() {
    const [_, reviewList] = document.querySelectorAll("#reviews ul");

    const reviews = [...reviewList.children];

    for (const [index, review] of reviews.entries()) {
      const reviewComponents = review.querySelectorAll(":scope > div > div");
      if (!reviewComponents.length) break;
      const [nameDiv, starDiv, ...rest] = [...reviewComponents];
      const starContainer = starDiv.querySelector('div [role="img"]');
      fiveStar(starContainer);

      if (rest[0].querySelector("p")) {
        rest[0].querySelector("span").innerHTML = humanReviews[index];
      } else {
        rest[0].remove();
        rest[1].querySelector("span").innerHTML = humanReviews[index];
      }

      rest.forEach((el, index) => {
        if (index > 1) {
          el.remove();
        }
      });
    }
  }

  function hasPhotos(NodeList) {
    let photos = [];
    NodeList.forEach((node) => {
      const image = node.querySelector('img [draggable="true"]');
      if (image) {
        photos.push(image);
      }
    });
    return photos.length > 0;
  }
}

export const yelpCleanup = {
  templateFn,
  matcher: "https://www.yelp.com/biz/*",
  companySpecific: true,
  specificOn: "name",
  reviewSeed: 1,
};
