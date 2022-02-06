
const withImages = require("next-images")
const withAntdLess = require("next-plugin-antd-less")
const antdModifyVar = require("./config/variables")

module.exports= withImages(
  withAntdLess({
    modifyVars: antdModifyVar,
    cssLoaderOptions: {},
    webpack(config, options) {
      config.module.rules.push({
        test: /\.md$/,
        use: "raw-loader",
      });

      return config;
    },
    images: {
      disableStaticImages: true,
    },
    trailingSlash: true,
  })
);
