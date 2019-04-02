const nav = require('./nav');
const sidebar = require('./sidebar');

module.exports = {
  title: 'CARP',
  description: 'A beautiful ui Library',
  base: '/carp-ui/',
  themeConfig: {
    nav,
    sidebar
  }
}