import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme-without-fonts'
import './my-style.css'
import ArticlesList from './ArticlesList.vue'
import MyLayout from './MyLayout.vue'

export default {
  extends: DefaultTheme,
  Layout: MyLayout,
  enhanceApp({ app }) {
    app.component('ArticlesList', ArticlesList)
  }
} satisfies Theme
