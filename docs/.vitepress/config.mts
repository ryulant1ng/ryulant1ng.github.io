import { defineConfig } from 'vitepress'
import footnote from 'markdown-it-footnote'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Lanting Liu",
  description: "No matter where you go, everyone is connected",
  lang: 'en',

  sitemap: {
    hostname: 'https://ryulant1ng.github.io'
  },

  markdown: {
    math: true,
    config: (md) => {
      md.use(footnote)
    }
  },

  head: [
    ['link', { rel: 'shortcut icon', href: '/images/favicon.ico' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: "96x96", href: '/images/favicon-96x96.png' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/images/favicon.svg' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/images/apple-touch-icon.png' }]
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about' },
      { text: 'Articles', link: '/articles/' },
      { text: 'Friends', link: '/friends' }
    ],

    docFooter: {
      prev: false,
      next: false
    },

    footer: {
      copyright: 'Copyright &copy; 2025 <a href="https://ryulant1ng.github.io/">Lanting Liu</a>. All rights reserved.'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ryulant1ng' },
      { icon: 'x', link: 'https://x.com/ryulant1ng' }
    ],

    search: {
      provider: 'local'
    }
  }
})
