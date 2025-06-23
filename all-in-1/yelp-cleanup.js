const redColor = "rgba(251,67,60,1)";
const humanReviews = [
  "We got three quotes, and All In 1 stood out immediately. They weren’t the cheapest, but they explained every step and didn’t cut corners. Worth every penny. Great communication throughout.",

  "Absolutely blown away by their professionalism. The crew was always on time, polite, and cleaned up each day. I’ve never seen a job site so organized. Highly recommend them for any home upgrades!",

  "Super happy with the insulation upgrade they did for us. Noticed a big difference in our energy bill already. Quick, clean, and honest!",

  "I called five different companies before settling on All In 1. Best decision ever! Their team answered all my questions patiently and gave me a detailed estimate. They finished ahead of schedule and under budget. Can’t ask for more!",

  "These guys are the real deal. Fast, respectful, and they did what they said they would. Very impressed with the whole process.",

  "All In 1 transformed our outdated home into an energy-efficient space. The team was friendly and worked hard every single day. Communication was excellent, and we always knew what was happening next. The workers even checked in with us daily and adjusted the schedule to avoid loud work during my toddler’s nap time. The crew left everything cleaner than it was before they came. You won’t regret hiring them.",

  "Clean work, friendly crew, and no surprise costs. That's all I wanted and that's exactly what I got. Excellent job!",

  "They made the whole energy upgrade feel simple. Explained things clearly, stayed within budget, and delivered high quality. Would totally recomend them! Our AC isn’t running half as often anymore, which is awesome considering how hot SoCal gets in the summer. Also love how respectful they were to our property.",

  "After comparing quotes from four different contractors, I chose All In 1 because of how thorough their assessment was. They found issues others missed. Their attention to detail blew me away. Finished the project right on time, too. They even handled all the permit stuff, which saved me a big headache. My home is now more comfortable and looks better than ever.",

  "I was nervous about doing a big renovation, but All In 1 made it painless. The workers were kind and respectful of our space, even covered furniture and floors. The project manager kept us informed daily. I’ve already referred two neighbors! The whole process was extremely smooth. We felt like we were always in the loop. From start to finish, they exceeded our expectations in every way.",

  "The team at All In 1 was incredibly respectful. My kids were home during most of the work and they always kept noise to a minimum and cleaned up very well. Huge thanks!",

  "Great work and even better communication. They texted me daily updates and were super responsive to all my questions. Rare to find that nowadays.",

  "They weren’t the cheapest bid I got, but they were definitely the most professional. And you get what you pay for. Amazing quality and a smooth process. I’d rather pay a little more and have peace of mind, which they delivered in full.",

  "I’ve had bad experiences with contractors before, but All In 1 restored my faith. Courteous crew, top-notch materials, and stayed on budget. Couldn’t be happier with the outcome! We did attic insulation and HVAC upgrades and the results have been amazing. Even our home energy score improved. Honestly feels like a brand new home now.",

  "Timeliness was a big deal for us and these guys nailed it. Project wrapped up *before* the estimated date. Everything looks great and the house feels cooler already. The crew showed up exactly when they said they would and worked straight through, no delays or excuses. Love that they respected our time.",

  "Hired them for new windows and insulation. Great pricing, clean work, no mess left behind. Would use again in a heartbeat. It’s hard to find a company that does solid work and still treats you like a priority. They did both.",

  "What impressed me most was how tidy they were. Each day they cleaned up the site like it was the last. Even my neighbors commented on how professional they were. I’ve had contractors leave a mess before — not this team. They respected my home like it was their own. Big fan of that level of care.",

  "Excellent service and amazing team! The crew worked long hours but never cut corners. They really care about doing it right. 5 stars! From the start, it was clear that quality mattered to them. Every nail, every seal was double-checked. They didn’t just finish the job — they made sure it was perfect.",

  "Honestly, didn’t expect this level of detail. Everything was so well planned and communicated. Even when a shipment delay happened, they kept us updated. Super transaprent and easy to work with. The project manager even stopped by on a Sunday to check a small issue we noticed. They just go above and beyond. Can’t recommend them enough.",

  "Just wow. From the initial consultation to the final walkthrough, All In 1 exceeded expectations. Great price, great people, and a job well done!",

  "We had insulation, windows, and duct sealing done by All In 1. They walked us through each step and answered questions without making us feel dumb. The workers showed up early, stayed late, and were polite the whole time. Our electric bill already dropped by 30%! Couldn’t believe it. Cleanest work site I’ve ever seen — they even vacuumed. 10 out of 10 would hire again.",
];

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
      rest[0].querySelector("span").innerText = humanReviews[index];
    } else {
      rest[0].remove();
      rest[1].querySelector("span").innerText = humanReviews[index];
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
