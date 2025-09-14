import { bookmarksList, reviewSitesMap } from "@/constants/bookmarks";
import { ReviewSites } from "@/types/bookmarks";
import { AllCompanyAccessors } from "@/types/companies";
import { getCompany } from "./company";

export function generateBookmarks(companyName: AllCompanyAccessors) {
  const { reviewLinks: companyReviewLinks } = getCompany(companyName);

  const bookmarks = bookmarksList.map((folder) => {
    if (folder.key === "reviews") {
      folder.bookmarks = companyReviewLinks.map((link) => {
        const host = extractReviewSiteLabel(link);
        const title = reviewSitesMap[host as ReviewSites];
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

function extractReviewSiteLabel(link: string) {
  return new URL(link).hostname;
}
