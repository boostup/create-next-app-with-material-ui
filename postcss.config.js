module.exports = {
  plugins:
    process.env.NODE_ENV === "production"
      ? [
          "cssnano",
          {
            preset: "default",
          },
        ]
      : [
          // No transformations in development
        ],
};
