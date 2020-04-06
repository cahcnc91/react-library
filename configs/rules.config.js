const autoprefixer = require("autoprefixer");

const rules = [
  {
    exclude: /node_modules/,
    test: /\.(css)$/,
    use: [
      {
        loader: "style-loader",
      },
      {
        loader: "css-loader",
        options: {
          modules: true,
          // {
          //   localIdentName: '[name]--[local]--[hash:base64:8]'
          // }
        },
      },
    ],
  },
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ["@babel/preset-env", "@babel/react"],
      },
    },
  },
];

module.exports = rules;
