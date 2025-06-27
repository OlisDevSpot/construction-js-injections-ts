import { bookmarksList, reviewSitesMap } from "../constants/bookmarks";
import { getCompany } from "./company";

export function generateBookmarks(companyName) {
  const { reviewLinks } = getCompany(companyName);

  const bookmarks = bookmarksList.map((folder) => {
    if (folder.key === "reviews") {
      folder.bookmarks = reviewLinks.map((link) => {
        const host = extractReviewSiteLabel(link);
        const title = reviewSitesMap[host];
        return {
          title,
          url: link,
        };
      });
    }
    return folder;
  });

  return bookmarks;
}

function extractReviewSiteLabel(link) {
  return new URL(link).hostname;
}
