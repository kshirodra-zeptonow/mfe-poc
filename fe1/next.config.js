/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    config.plugins.push(
      new options.webpack.container.ModuleFederationPlugin({
        name:"fe1",
        filename: "static/chunks/remoteEntry1.js",
        exposes: {
          "./NextApp": "./pages/index.js",
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
    config.output.publicPath = "http://localhost:3002/";
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
