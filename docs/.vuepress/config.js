module.exports = {
  title: 'Gorvey的blog',  // 设置网站标题
  dest: 'public',    // 设置输出目录
  base: '/', // 设置站点根路径
  theme: 'reco',
  repo: 'https://github.com/Zeng-Zhe',// 添加 github 链接
  evergreen: true, //禁止兼容低版本浏览器
  themeConfig: {
    type: 'blog',
    nav: [
      { text: 'Home', link: '/' },
      { text: '更多', link: '/more/' },
      { text: 'External', link: 'https://google.com' },
    ]
  }
}