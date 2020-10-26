let nav = require('./config/nav');
module.exports = {
  title: 'Gorvey的blog', // 设置网站标题
  description: 'Web前端技术博客，积跬步以至千里，致敬每个爱学习的你。',
  dest: 'public', // 设置输出目录
  base: '/', // 设置站点根路径
  theme: 'vdoing',
  port: '0.0.0.0',
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
    sidebarDepth: 4,
    blogger: {
      // 博主信息，显示在首页侧边栏
      avatar:
        'https://cdn.jsdelivr.net/gh/Zeng-Zhe/image_store/blog/20200913213508.png',
      name: 'Gorvey',
      slogan: '菜鸡前端工程师',
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
    footer: {
      // 页脚信息
      createYear: 2020, // 博客创建年份
      copyrightInfo: 'Gorvey', // 博客版权信息，支持a标签
    },
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
          visitor: true, //阅读量统计 https://valine.js.org/visitor.html
        },
      },
    ],
    ['demo-container'],
    // ['vuepress-plugin-element-tabs'],
  ],
};
