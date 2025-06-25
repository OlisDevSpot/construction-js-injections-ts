function createRegexFromPattern(pattern) {
  // Escape all regex special characters, except '*'
  const escaped = pattern.replace(/([.+?^${}()|[\]\\])/g, "\\$1");

  // Replace wildcard * with regex .*
  const wildcarded = escaped.replace(/\*/g, ".*");

  // Allow optional trailing slash
  const withOptionalSlash = wildcarded.replace(/\/?$/, "/?");

  return new RegExp(`^${withOptionalSlash}$`);
}

export function urlMatchesPattern(url, patterns) {
  return patterns.some((pattern) => {
    const regex = createRegexFromPattern(pattern);
    return regex.test(url);
  });
}
