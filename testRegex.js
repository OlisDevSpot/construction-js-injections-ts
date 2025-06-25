const siteMatches = [
  "https://www.github.com/gists*",
  "https://www.costco.com",
  "https://www.google.com/search?q=*",
];

function matchUrl(currentUrl, patterns) {
  return patterns.some((pattern) => {
    if (pattern.includes("*")) {
      // Escape special regex characters except for *
      const regexPattern = pattern
        .replace(/[.+^${}()|[\]\\]/g, "\\$&") // Escape regex special chars
        .replace(/\*/g, ".*"); // Turn * into .*

      const regex = new RegExp(`^${regexPattern}$`);
      return regex.test(currentUrl);
    } else {
      // Exact match
      return currentUrl === pattern;
    }
  });
}

// Example usage:
const currentUrl = "https://www.google.com/search?q=hi+bye+dye";
const isMatch = matchUrl(currentUrl, siteMatches);
console.log(isMatch); // true or false depending on the current page
