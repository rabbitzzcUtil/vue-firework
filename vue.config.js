const path = require('path');
// const webpack = require('webpack')
module.exports = {
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
};
