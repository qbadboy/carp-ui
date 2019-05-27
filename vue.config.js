const path = require('path');

module.exports = {
  publicPath: process.env.VUE_APP_BASE_URL,
  pages: {
    index: {
      entry: 'examples/main.js'
    }
  },
  css: {
    loaderOptions: {
      stylus: {
        import: [path.join(__dirname, './src/style/ui.styl')]
      }
    }
  }
};
