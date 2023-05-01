module.exports = {
  quiz: {
    input: "./openapi.yaml",
    output: {
      mode: "split",
      target: "./src/generated/api/",
      schemas: "./src/generated/model",
      client: "swr",
    },
  },
};
