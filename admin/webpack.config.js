// For solving webpach issues
// https://docs.immutable.com/docs/x/create-react-app-webpack-5-errors/
const Dotenv = require("dotenv-webpack")

module.exports = {
  resolve: {
    alias: {
      "@mui/styled-engine": "@mui/styled-engine-sc",
    },
    fallback: {
      path: require.resolve("path-browserify"),
      os: require.resolve("os-browserify/browser"),
      crypto: require.resolve("crypto-browserify"),
    },
  },
  plugins: [
    new Dotenv({
      path: "../../../../api/.env",
    }),
  ],
}
