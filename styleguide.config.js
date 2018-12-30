const path = require("path");

module.exports = {
  styleguideDir: "docs",
  ignore: ["src/components/*.js", "src/components/state/*"],
  context: {
    stateHelpers: path.resolve(__dirname, "./src/components/state/state"),
    styleHelpers: path.resolve(__dirname, "./src/components/styling")
  },
  sections: [
    {
      name: "Primordial UI",
      content: "./README.md"
    },
    {
      name: "UI Components",
      components: "src/components/**/*.js",
      exampleMode: "collapse",
      usageMode: "collapse"
    },
    {
      name: "Managing State",
      content: "src/components/state/State.md"
    }
  ]
};
