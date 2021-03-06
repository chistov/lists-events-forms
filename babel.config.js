module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react', "@babel/preset-typescript"],
  plugins: [
    "@babel/syntax-dynamic-import",
    "@babel/plugin-transform-runtime",
    [ "@babel/plugin-proposal-class-properties", { "loose": true } ],
    "@babel/transform-async-to-generator"
  ]
};
