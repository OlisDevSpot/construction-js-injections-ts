import { bookmarksList } from "../constants/bookmarks";
import { getCompany } from "./company";

export function generateBookmarks(companyName) {
  const companyData = getCompany(companyName);

  const companyReviews = companyData.reviewLinks;
  const bookmarks = bookmarksList.forEach((folder) => {
    if (folder.key === "reviews") {
      const host = extractReviewSiteLabel(link);
      const title = reviewSitesMap[host];
      folder.bookmarks = companyReviews.map((link) => ({
        title,
        url: link,
      }));
    }
  });

  return bookmarks;
}

function extractReviewSiteLabel(link) {
  return new URL(link).hostname;
}
