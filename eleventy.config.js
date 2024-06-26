const EleventyVitePlugin = require("@11ty/eleventy-plugin-vite");

module.exports = function (config) {
  config.addPlugin(EleventyVitePlugin);

  // Layouts
  config.addLayoutAlias("base", "base.njk");

  // Pass-through files
  config.addPassthroughCopy("src/assets/images");
  config.addPassthroughCopy("src/assets/styles");
  config.addPassthroughCopy("src/assets/scripts");

  // Base Config
  return {
    dir: {
      input: "src",
      includes: "includes",
      layouts: "layouts",
      data: "data",
    },
    trailingSlash: true,
    templateFormats: ["njk", "11ty.js"],
    htmlTemplateEngine: "njk",
  };
};
