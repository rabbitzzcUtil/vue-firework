const path = require('path');
// const webpack = require('webpack')
module.exports = {
  productionSourceMap: false,
  pages: {
    index: {
      entry: 'example/main.js',
      template: 'public/index.html',
      filename: 'index.html',
    },
  },
  css: {
    extract: false,
  },
  outputDir: path.resolve(__dirname, './dist'),
  configureWebpack: {
    output: {
      filename: 'vue-firework.min.js',
      library: 'vue-firework',
      libraryTarget: 'umd',
      umdNamedDefine: true,
    },
  },
  chainWebpack: (config) => {
    config.optimization.delete('splitChunks');
    config.plugins.delete('copy');
    config.plugins.delete('html');
    config.plugins.delete('preload');
    config.plugins.delete('prefetch');
    config.plugins.delete('hmr');
    config.entryPoints.delete('app');
    config.resolve.alias
      .set('vue$', 'vue/dist/vue.esm.js');
  },
};
