module.exports = function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy("./src/css");
    eleventyConfig.addWatchTarget("./src/css/");
    eleventyConfig.addPassthroughCopy("./src/img");
    eleventyConfig.addWatchTarget("./src/img/");

    eleventyConfig.addFilter("randomItem", (arr) => {
        arr.sort(() => {
          return 0.5 - Math.random();
        });
        return arr.slice(0, 1);
      });

    // Add date filters
    eleventyConfig.addFilter("dateDisplay", require("./src/_filters/dates.js") );
    // eleventyConfig.addFilter("dateDisplay-v2", require("./src/_filters/dates-v2.js") );


    return {
      dir: {
        input: "src",
        output: "public",
      },
      markdownTemplateEngine: "njk"
    };
  };

