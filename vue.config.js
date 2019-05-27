const path = require('path');

module.exports = {
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
