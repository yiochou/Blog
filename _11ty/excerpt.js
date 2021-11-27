function extractExcerpt(article) {
  if (!article.hasOwnProperty("templateContent")) {
    console.warn(
      'Failed to extract excerpt: Document has no property "templateContent".'
    );
    return null;
  }

  let excerpt = "";
  const content = article.templateContent;

  // The start and end separator to try and match to extract the excerpt
  const separator = {
    start: "<!-- Excerpt Start -->",
    end: "<!-- Excerpt End -->",
  };

  const startPosition = content.indexOf(separator.start);
  const endPosition = content.indexOf(separator.end);

  if (startPosition !== -1 && endPosition !== -1) {
    excerpt = content
      .substring(startPosition + separator.start.length, endPosition)
      .trim();
  }

  return excerpt;
}

module.exports = {
  extractExcerpt: extractExcerpt,
};
