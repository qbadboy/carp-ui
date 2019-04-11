module.exports = {
  title: 'CARP',
  description: 'A beautiful ui Library',
  base: '/carp-ui/',
  themeConfig: {
    // 导航栏
    nav: [
      {
        text: '首页',
        link: '/'
      },
      {
        text: '介绍',
        link: '/about'
      },
      { text: 'GitHub', link: 'https://github.com/qbadboy/carp-ui' }
    ],
    // 侧边栏
    sidebar: [
      {
        title: '介绍',
        path: '/about'
      },
      {
        title: '基础',
        collapsable: false,
        children: ['/component/button', '/component/switch']
      }
    ]
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@images': 'images'
      }
    }
  }
};
