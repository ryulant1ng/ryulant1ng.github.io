<script setup>
import { data as posts } from './posts.data.ts'
</script>


<template>
  <ul>
    <template v-for="post of posts">
      <li v-if="!post.url.endsWith('/articles/')" class="articleslist">
        <a :href="post.url" class="articlestitle">{{ post.title }}</a> posted on {{ post.date.string }}
      </li>
    </template>
  </ul>
</template>
