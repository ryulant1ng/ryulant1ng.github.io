import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme-without-fonts'
import './style/fonts.css'
import './style/avatar.css'
import articleslist from './articleslist.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('articleslist', articleslist)
  }
} satisfies Theme