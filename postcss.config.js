const browserslist = require('./package.json').browserslist;

module.exports = {
  plugins: {
    autoprefixer: { browsers: browserslist },
    'postcss-px-to-viewport': {
      unitToConvert: 'px',
      viewportWidth: process.env.VUE_APP_DESIGN_WIDTH,
      viewportHeight: process.env.VUE_APP_DESIGN_HEIHGT,
      unitPrecision: 3,
      viewportUnit: 'vw',
      fontViewportUnit: 'vw',
      minPixelValue: 1
    }
  }
};
