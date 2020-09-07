module.exports = {
  title: 'Gorvey的blog', // 设置网站标题
  dest: 'public', // 设置输出目录
  base: '/', // 设置站点根路径
  theme: 'reco',
  repo: 'https://github.com/Zeng-Zhe', // 添加 github 链接
  evergreen: true, //禁止兼容低版本浏览器

  // plugins: [
  //   [
  //     'vuepress-plugin-comment',
  //     {
  //       choosen: 'valine',
  //       // options选项中的所有参数，会传给Valine的配置
  //       options: {
  //         el: '#valine-vuepress-comment',
  //         appId: 'ljDhFCYbJztk72HHbFSg6rzY-gzGzoHsz',
  //         appKey: '4Ibfb6Dk0qHG8JlpvjTFttBc',
  //         visitor: true,
  //       },
  //     },
  //   ],
  // ],
  sidebar: true,
  themeConfig: {
    type: 'blog',
    lastUpdated: '最后更新时间', // string | boolean
    displayAllHeaders: true,

    sidebarDepth: 1,
    nav: [
      { text: 'Home', link: '/' },
      {
        text: '收藏',
        icon: 'reco-document',
        items: [
          { text: '文章', link: '/mark/文章' },
          { text: '工具', link: '/mark/工具' },
        ],
      },
      { text: '关于我', link: '/about/' },
    ],
    sidebar: {
      // '/notes/': ['/notes/mark', '/notes/算法和数据结构'],
      '/mark/': ['/mark/文章', '/mark/工具'],
    },
    subSidebar: 'auto',
    sidebarDepth: 4,
    startYear: '2020',
    // 博客配置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: '分类', // 默认文案 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: '标签', // 默认文案 “标签”
      },
    },
    valineConfig: {
      appId: 'ljDhFCYbJztk72HHbFSg6rzY-gzGzoHsz', // your appId
      appKey: '4Ibfb6Dk0qHG8JlpvjTFttBc', // your appKey
    },
  },
};
