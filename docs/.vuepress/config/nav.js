module.exports = [
  { text: '首页', link: '/' },
  { text: '前端', link: '/frontend/' },

  {
    text: '收藏',
    items: [
      { text: '文章', link: '/mark/文章' },
      { text: '工具', link: '/mark/工具' },
    ],
  },
  { text: '留言板', link: '/messageBoard/', icon: 'reco-suggestion' },
  {
    text: '更多',
    link: '/more/',
    items: [{ text: '面试', link: '/more/面试' }],
  },
  { text: '关于我', link: '/about/', icon: 'reco-account' },
];
