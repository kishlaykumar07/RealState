const path = require("path");

module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      // Update Webpack Dev Server options
      if (webpackConfig.devServer) {
        webpackConfig.devServer.setupMiddlewares = (middlewares, devServer) => {
          if (!devServer) {
            throw new Error("webpack-dev-server is not defined");
          }

          // Add your custom middlewares here if needed
          return middlewares;
        };
      }

      return webpackConfig;
    },
  },
};
