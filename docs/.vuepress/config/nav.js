module.exports = [
  { text: '首页', link: '/' },
  {
    text: '前端',
    // link: '/note/fe/',
    items: [
      { text: '建立自己的知识体系', link: '/pages/b315f9/' },
      {
        text: '知识体系',
        items: [
          { text: 'JavaScript进阶', link: '/pages/901f35/' },
          { text: 'HTML', link: '/pages/ec8bc2/' },
          { text: 'CSS进阶', link: '/pages/ec8bc5/' },
        ],
      },
      {
        text: '笔记',
        items: [
          {
            text: '《JavaScript高级程序设计》读书笔记',
            link: '/pages/5bd01e/',
          },
        ],
      },
    ],
  },

  {
    text: '资源',
    link: '/resource/',
  },
  {
    text: '更多',
    items: [
      {
        text: '博客建设',
        link: '/pages/16e149/',
      },
    ],
  },
  { text: '留言板', link: '/messageBoard/' },
  { text: '关于', link: '/about/' },
  {
    text: '索引',
    items: [
      {
        text: '分类',
        link: '/categories/',
      },
      {
        text: '标签',
        link: '/tags/',
      },
      {
        text: '归档',
        link: '/archives/',
      },
    ],
  },
];
