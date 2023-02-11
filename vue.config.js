const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
});
const HardSourceWebpackPlugin = require("hard-source-webpack-plugin");
const devPlugins = [
  new HardSourceWebpackPlugin(),
  new HardSourceWebpackPlugin.ExcludeModulePlugin([
    {
      test: /mini-css-extract-plugin[\\/]dist[\\/]loader/,
    },
  ]),
];
module.exports = {
  devServer: {
    host: "localhost",
    port: 8080,
    proxy: {
      "/api": {
        target: "https://www.teacherin.cn",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
};
