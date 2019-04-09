const browserslist = require('./package.json').browserslist;
console.log(browserslist);

module.exports = {
  plugins: {
    autoprefixer: { browsers: browserslist },
    'postcss-pxtorem': {
      rootValue: 20,
      propList: ['*']
    }
  }
};
