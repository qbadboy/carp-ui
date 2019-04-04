module.exports = {
  title: 'CARP',
  description: 'A beautiful ui Library',
  base: '/carp-ui/',
  themeConfig: {
    // 导航栏
    nav: [{
      text: '首页',
      link: '/'
    }, {
      text: '介绍',
      link: '/about'
    }],
    // 侧边栏
    sidebar: [{
        title: '介绍',
        path: '/about'
      },
      {
        title: '组件',
        collapsable: false,
        children: ['/component/button']
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
}