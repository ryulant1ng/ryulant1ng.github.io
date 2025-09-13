import { defineConfig } from 'vitepress'
import footnote from 'markdown-it-footnote'

export default defineConfig({
  title: 'Lanting Liu',
  description: 'Ordinary netizen',
  lang: 'en',
  lastUpdated: true,

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
    ['link', { rel: 'shortcut icon', href: '/images/favicon/favicon.ico' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: "96x96", href: '/images/favicon/favicon-96x96.png' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/images/favicon/favicon.svg' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/images/favicon/apple-touch-icon.png' }]
  ],

  themeConfig: {
    nav: [
      { text: 'Top', link: '/' },
      { text: 'About', link: '/about' },
      { text: 'Articles', link: '/articles/' },
      { text: 'Friends', link: '/friends' }
    ],

    docFooter: {
      prev: false,
      next: false
    },

    footer: {
      message: 'Licensed under <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a> unless otherwise specified.',
      copyright: 'Copyright &copy; 2025 <a href="https://ryulant1ng.github.io/">Lanting Liu</a>.'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ryulant1ng' },
      { icon: 'x', link: 'https://x.com/ryulant1ng' },
      { icon: 'youtube', link: 'https://www.youtube.com/@ryulant1ng' }
    ],

    search: {
      provider: 'local'
    }
  }
})
