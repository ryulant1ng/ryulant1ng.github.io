<script setup>
import DefaultTheme from 'vitepress/theme-without-fonts'
import { useData } from 'vitepress'

const { Layout } = DefaultTheme
const { frontmatter, title } = useData()
</script>

<template>
  <Layout>
    <template #doc-after>
      <div v-if="frontmatter.comments !== false" :key="title" class="giscus">
          <component
            :is="'script'"
            src="https://giscus.app/client.js"
            data-repo="ryulant1ng/ryulant1ng.github.io"
            data-repo-id="R_kgDOPvFJjg"
            data-category="Comments"
            data-category-id="DIC_kwDOPvFJjs4CvZL6"
            data-mapping="pathname"
            data-strict="1"
            data-reactions-enabled="1"
            data-emit-metadata="0"
            data-input-position="top"
            data-theme="preferred_color_scheme"
            data-lang="en"
            crossorigin="anonymous"
          ></component>
      </div>
    </template>
  </Layout>
</template>
