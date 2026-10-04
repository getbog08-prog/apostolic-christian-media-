module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy("logo.png");
  eleventyConfig.addPassthroughCopy("uploads");
  eleventyConfig.addPassthroughCopy("bible-study-guide.pdf");
  eleventyConfig.addPassthroughCopy("bible-study-guide.docx");

  return {
  dir: {
    input: ".",
    includes: "_includes",
    output: "_site"
  },
  templateFormats: ["md", "njk"]
};
