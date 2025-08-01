import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme-without-fonts'
import './style/fonts.css'
import './style/avatar.css'
import articleslist from './articleslist.vue'
import mylayout from './mylayout.vue'

export default {
  extends: DefaultTheme,
  Layout: mylayout,
  enhanceApp({ app }) {
    app.component('articleslist', articleslist)
  }
} satisfies Theme