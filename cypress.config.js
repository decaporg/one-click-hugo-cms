const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "smvz27",
  e2e: {
    baseUrl: "http://localhost:3000",
    supportFile: false
  },
});
