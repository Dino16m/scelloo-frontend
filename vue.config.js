const path = require("path");

module.exports = {
  publicPath: process.env.NODE_ENV == 'production' ? '/scelloo-frontend/' : "",
  configureWebpack: {
    resolve: {
      alias: {
        icons: path.resolve(
          __dirname,
          "node_modules/vue-material-design-icons"
        ),
      },
      extensions: [".vue"],
    },
  },
};
