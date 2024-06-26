const path = require("path");
const { ModuleFederationPlugin } = require('@module-federation/enhanced/webpack');
const { dependencies } = require("./package.json");

module.exports = {
  entry: path.resolve(__dirname, "src", "index.ts"),
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },
  devServer: {
    port: 8081,
    historyApiFallback: true,
  },
  output: {
    publicPath: 'http://localhost:8081/',
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "remote_react",
      filename: "remoteEntry.js",
      exposes: {
        "./Button": "./src/components/Button/index.tsx",
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: dependencies.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: dependencies["react-dom"],
        },
      },
    }),
  ],
};
