const path = require('path');

module.exports = {
  loaderOptions: {
    stylus: {
      import: [path.join(__dirname, '../src/style/ui.styl')]
    }
  }
};
