module.exports = {
  quiz: {
    input: "./openapi.yaml",
    output: {
      mode: "split",
      target: "./src/api/",
      schemas: "./src/model",
      client: "swr",
    },
  },
};
