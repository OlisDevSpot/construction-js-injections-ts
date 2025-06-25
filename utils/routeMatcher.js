function createRegexFromPattern(pattern) {
  const escaped = pattern.replace(/([.+?^${}()|[\]\\])/g, "\\$1");
  const wildcarded = escaped.replace(/\*/g, ".*");
  const withOptionalSlash = wildcarded.replace(/\/?$/, "/?");
  return new RegExp(`^${withOptionalSlash}$`);
}

// 1. Compile group object to fast matchable structure
export function compileMatchers(scriptsObj) {
  const compiled = [];

  for (const [key, { matcher, templateFn }] of Object.entries(scriptsObj)) {
    const regex = createRegexFromPattern(matcher);
    compiled.push({ key, matcher, regex, templateFn });
  }

  return compiled;
}

// 2. Match against a URL
export function findMatchingFn(url, compiledMatchers) {
  for (const item of compiledMatchers) {
    if (item.regex.test(url)) {
      return {
        key: item.key,
        matcher: item.matcher,
        templateFn: item.templateFn,
      };
    }
  }
  return null; // no match
}
