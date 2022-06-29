module.exports = {
  plugins: [
    ["postcss-import",{}],
    ["postcss-preset-env",{
      browsers: "last 2 versions"
    }],
    ["postcss-custom-media",{}],
    ["autoprefixer",{}]
  ]
};
