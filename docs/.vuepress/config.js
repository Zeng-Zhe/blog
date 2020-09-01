module.exports = {
  title: 'Gorvey的blog', // 设置网站标题
  dest: 'public', // 设置输出目录
  base: '/', // 设置站点根路径
  theme: 'reco',
  repo: 'https://github.com/Zeng-Zhe', // 添加 github 链接
  evergreen: true, //禁止兼容低版本浏览器
  themeConfig: {
    type: 'blog',
    lastUpdated: 'Last Updated', // string | boolean
    displayAllHeaders: true,
    sidebar: 'auto',
    nav: [
      { text: 'Home', link: '/' },
      { text: '笔记', link: '/notes/mark' },
      { text: '关于我', link: '/about/' },
    ],
    sidebar: {
      '/notes/': ['/notes/mark', '/notes/算法和数据结构'],
    },
  },
};
