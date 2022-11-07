/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    config.plugins.push(
      new options.webpack.container.ModuleFederationPlugin({
        name:"fe2",
        filename: "remoteEntry2.js",
        exposes: {
          "./squareRoot": "./utils/getSquareRoot",
        },
        remotes: {
          reactApp: "reactApp@http://localhost:3000/remoteEntry.js"
        },
        shared: [
          {
            react: {
              eager: true,
              singleton: true,
              requiredVersion: false,
            }
          },
          {
            "react-dom": {
              eager: true,
              singleton: true,
              requiredVersion: false,
            }
          },
        ]
      })

    )
    // config.module.rules.push({
    //   resolve: {
    //     alias: {
    //       core: path.join(__dirname, 'core'),
    //     },
    //   }
    // })
    return config
  }
}

module.exports = nextConfig
