let nav = require('./config/nav');
module.exports = {
  title: 'Gorvey的blog', // 设置网站标题
  description: 'Web前端技术博客，积跬步以至千里，致敬每个爱学习的你。',
  dest: 'public', // 设置输出目录
  base: '/', // 设置站点根路径
  theme: 'vdoing',

  evergreen: true, //禁止兼容低版本浏览器
  locales: {
    '/': {
      lang: 'zh-CN',
    },
  },
  markdown: {
    lineNumbers: true, // 代码行号
  },
  themeConfig: {
    lastUpdated: '最后更新时间', // string | boolean
    search: true,
    searchMaxSuggestions: 10,
    repo: 'https://github.com/Zeng-Zhe', // 添加 github 链接
    sidebarDepth: 2,
    blogger: {
      // 博主信息，显示在首页侧边栏
      avatar:
        'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200103123203.jpg',
      name: 'Gorvey',
      slogan: '前端界的小学生',
    },
    author: {
      // 文章默认的作者信息，可在md文件中单独配置此信息 String | {name: String, link: String}
      name: 'Gorvey', // 必需
      link: 'https://github.com/Zeng-Zhe', // 可选的
    },
    // 作者
    author: 'gorvey',
    nav,
    sidebar: 'structuring',
    subSidebar: 'auto',
    sidebarDepth: 4,

    valineConfig: {
      appId: 'ljDhFCYbJztk72HHbFSg6rzY-gzGzoHsz', // your appId
      appKey: '4Ibfb6Dk0qHG8JlpvjTFttBc', // your appKey
    },
  },
  plugins: [
    [
      'vuepress-plugin-comment',
      {
        choosen: 'valine',
        options: {
          el: '#valine-vuepress-comment',
          appId: 'ljDhFCYbJztk72HHbFSg6rzY-gzGzoHsz',
          appKey: '4Ibfb6Dk0qHG8JlpvjTFttBc',
          path: '<%- frontmatter.commentid || frontmatter.permalink %>',
        },
      },
    ],
  ],
};
