const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const commonConfig = require("./webpack.common");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJson = require("../package.json");

const devConfig = {
  mode: "development",
  output: {
    publicPath: "http://localhost:3000/",
  },
  devServer: {
    port: 3000,
    historyApiFallback: {
      index: "/index.html",
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "reactApp",
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/App.js",
      },
      shared: {
        ...packageJson.dependencies,
        react: { singleton: true, eager: true, requiredVersion: packageJson.dependencies.react },
        'react-dom': {
          singleton: true,
          eager: true,
          requiredVersion: packageJson.dependencies['react-dom'],
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  module: {
    rules: [
    //   {
    //     test: /\.(js|jsx|tsx|ts)$/,
    //     loader: 'ts-loader',
    //     exclude: /node_modules/,
    //   },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
        exclude: /node_modules/,
        use: ['file-loader?name=[name].[ext]'] // ?name=[name].[ext] is only necessary to preserve the original file name
      }
    ],
  },
};

module.exports = merge(commonConfig, devConfig);
