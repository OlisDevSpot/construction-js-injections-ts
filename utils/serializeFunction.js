export function serializeFunction(fn, companyData) {
  let fnString = fn.toString();

  // remove wrapping 'function() { }`
  fnString = fnString
    .slice(fnString.indexOf("{") + 1, fnString.lastIndexOf("}"))
    .trim();

  fnString = fnString
    .replaceAll(/{{link}}/, companyData.link)
    .replaceAll(/{{companyName}}/, companyData.name);

  return fnString;
}

// Example:
// serializeFunction(updateCostcoArticleBase, {
//   name: "SouthWest Energy",
//   link: "https://www.sw.solar",
// });
