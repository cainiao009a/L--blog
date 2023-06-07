import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/L--blog/',
  title: "L  Project",
  description: "A Blog",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/avatar.png',
    nav: [
      {
        text: '首页',
        link: '/' // 表示docs/index.md
      },
      {
        text: '个人成长',
        items: [
          {
            text: '大江南北游记',
            link: '/column/Travel/' // 表示docs/column/Travel/index.md
          },
          {
            text: '所思·所想',
            link: '/column/Growing/' // 表示docs/column/Growing/index.md
          }
        ]
      },
      {
        text: '关于我',
        items: [
          { text: 'Github', link: 'https://github.com/Jacqueline712' },
          {
            text: '掘金',
            link: 'https://juejin.cn/user/1042753834460798'
          },
        ]
      }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
