const reviewsPerPage = 10;
const newReviews = [
  "I wasn’t sure what to expect from Palmetto, but I’m glad I gave them a chance. They didn’t do any upgrades to my home, but the bill reduction alone has made a noticeable difference. It’s nice not to dread opening the utility bill every month",
  "It's been 7 years since I've installed the panels with them. Everything works great! The amount of money I saved is probably in the tens of thousands now with Edison increasing their pricing",
  "The Palmetto program is outstanding! Not only did they reduce my electric bill significantly, but they also upgraded our main panel and installed a new heating and AC system. The whole experience felt seamless, and the team took the time to explain every step. I feel like I’m saving money while also doing something good for the environment",
  "We didn’t qualify for any home upgrades, but Palmetto still lowered our energy bill. It’s not a huge savings, but it’s enough to make a difference over time. The process was quick and easy, and I appreciated how upfront they were about what we’d get",
  "As others have pointed out, we were hesitant at first. However our experience with Palmetto has been fantastic. The process was smooth, and their team walked us through everything. We've saved almost $1,200 per year since we started about 2 years ago, and the reliability of the system is a game changer. We're so glad we left Edison!!",
  "My wife and I qualified for Palmetto because we're retired and living on a limited income. They reduced my electric bill and upgraded my home with attic insulation and a new cool roof. The savings are a huge relief, and I appreciate that they back everything with long-term warranties. The production guarantee they offer made me feel confident in making the switch",
  "I can’t believe how much Palmetto has helped us. Our utility bills were eating up so much of our budget, but now they’re manageable. Plus, we got double-pane windows and a cool roof out of the deal. The workers were polite and cleaned up after themselves, too. As close to a win-win situation as it gets, all thanks to the different programs available to us",
  "I can’t believe we didn’t do this sooner. Palmetto took care of everything and replaced our sky-high electric bills with something much better. If you qualify, I wouldn't hesitate to make the switch. I read every line of their agreement before moving forward, but only after taking the plunge I can confidently say they are the real deal",
  "The savings alone make it worth it, but what really impressed me was Palmetto’s guarantee of output and the consistency of the system. It’s been a year now, and everything has worked exactly as promised. Fantastic company!",
  "From start to finish, Palmetto made the transition easy and worry-free. The savings are undeniable, and I love knowing that our system is built to last with their excellent warranties. We couldn’t be happier.",
  "I had my doubts going into this, especially since we’d been burned by another company in the past. But Palmetto was different. They were clear, honest, and didn’t try to oversell us. We didn’t get every upgrade, but even just the reduction in monthly costs has made a big difference. Definitely worth looking into.",
  "We’ve had our system for about three years now, and it’s been nothing but solid. The savings have been steady, and we haven’t had to deal with a single issue. I especially appreciated how they walked us through the whole process in plain language—no sales jargon, just facts.",
  "Our experience with Palmetto has been surprisingly smooth. I say 'surprisingly' because I usually expect hiccups with anything home-related, but they were on top of every detail. We ended up with upgraded insulation and a new AC unit, and our monthly energy costs dropped right away.",
  "At first, I was skeptical about how much we’d actually save, but now I’m a believer. We didn’t qualify for major upgrades, but even just the lower bill has freed up money for other things. The process was quick, and they never pressured us into anything.",
  "We’re about six months in, and I can already see the savings stacking up. Palmetto upgraded our panel and added attic insulation, which has made the house more comfortable too. Their staff was professional and respectful of our time. So far, no regrets!",
  "I wasn’t expecting much, but the results speak for themselves. Our electricity costs have gone down, and the whole experience was stress-free. Palmetto made sure we understood every step, and their follow-up has been excellent.",
  "We live in an older home, so I was surprised we qualified for as many upgrades as we did. Palmetto replaced our roof and improved the HVAC system, and our electric bills are now half what they used to be. Can’t recommend them enough.",
  "This was hands down one of the better decisions we’ve made for our home. The install team was courteous, the project stayed on schedule, and our energy bills are now much more manageable. I appreciated how transparent Palmetto was throughout the process.",
  "We’ve seen savings each month since switching over. Nothing earth-shattering, but over the course of a year it really adds up. The system has been reliable, and I like knowing we’re doing something better for the environment, too.",
  "Palmetto exceeded our expectations. We got energy-efficient windows and a modern HVAC upgrade through their program, and the comfort level in our home has noticeably improved. The monthly savings don’t hurt either. They really do deliver on what they promise.",
];

setTimeout(() => {
  changeCompanyName();
  removeNotAccredited();
  updateRating();
  const currentPage = getCurrentPage();
  updateReviews(currentPage);
}, 100);

function changeCompanyName() {
  const businessName = document.getElementById("businessName");
  businessName.innerText = "Palmetto";
}

function removeNotAccredited() {
  const notAccredited = document.querySelector(".bpr-header-not-accredited");
  notAccredited.remove();

  const notAccreddited = document.getElementById("accreditation");
  notAccreddited.querySelector("svg").remove();
  notAccreddited.querySelector("h2").innerText =
    "Palmetto is a BBB Accredited Business.";
}

function updateRating() {
  const stars = document.querySelectorAll(".star-rating.cluster .icon");
  stars.forEach((star) => {
    star.dataset.filled = true;
  });

  const mainReviewsDisplay = document.querySelector(
    ".bpr-reviews-summary-numbers.stack"
  );

  const numReviews = mainReviewsDisplay.querySelector(
    "p.bpr-reviews-average-of"
  );
  numReviews.innerText = "Average of 1043 Customer Reviews";

  const rating = mainReviewsDisplay
    .querySelector("div.bpr-reviews-star-rating.cluster")
    .querySelector("span");
  rating.innerText = "4.87";
}

function updateReviews(pageNum) {
  const reviewList = document.querySelectorAll("li.card");
  reviewList.forEach((review, i) => {
    review.querySelectorAll(":scope > *").forEach((el, elIndex) => {
      if (elIndex > 2) {
        el.remove();
      }
    });
    const newDiv = document.createElement("div");
    newDiv.innerText = newReviews[(pageNum - 1) * reviewsPerPage + i];
    review.appendChild(newDiv);
  });
}

function getCurrentPage() {
  const paginationNumbers = document.querySelectorAll(
    "*.bds-pagination > ul > li > a"
  );

  const [activePageAnchor] = Array.from(paginationNumbers).filter((item) => {
    return item.getAttribute("aria-current");
  });

  if (activePageAnchor) {
    return parseInt(activePageAnchor.lastChild.textContent);
  }

  return 1;
}
