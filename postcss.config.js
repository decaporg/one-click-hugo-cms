module.exports = {
  plugins: [
    require("postcss-import")({}),
    require("postcss-preset-env")({
      browsers: "last 2 versions"
    }),
    require("postcss-custom-media")({}),
    require("autoprefixer")({})
  ]
};
