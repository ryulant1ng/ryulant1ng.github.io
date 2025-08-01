---
title: Add giscus to VitePress
date: 2025-08-01
---

# Add giscus to VitePress

[giscus](https://giscus.app) is a interesting comment system. It use [GitHub Disscussions](https://github.com/features/discussions) to storage and manage comments. To add giscus to [VitePress](https://vitepress.dev), you need to use the [layout slots](https://vitepress.dev/guide/extending-default-theme#layout-slots) feature of VitePress.

First, open giscus site, install [giscus app](https://github.com/apps/giscus) to your repository. It is recommend to enable following option.

- Use strict title matching
- Place the comment box above the comments

We can't straightly add a `<script>` tag to the '.vue' file, if you do, it will cause following error.

> Tags with side effect (`<script>` and `<style>`) are ignored in client component templates.

So we should write a component.

Create a '.vue' file (e.g. 'mylayout.vue'), it will be the file that defines layout, adding following code.

```vue
<!-- mylayout.vue -->
<script setup>
import DefaultTheme from 'vitepress/theme-without-fonts' /* I use custom font, if you not, change it to `vitepress/theme`. */
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
            data-repo=""
            data-repo-id=""
            data-category=""
            data-category-id=""
            data-mapping=""
            data-strict=""
            data-reactions-enabled=""
            data-emit-metadata=""
            data-input-position=""
            data-theme=""
            data-lang=""
            crossorigin="anonymous"
            ></component>
        </div>
    </template>
  </Layout>
</template>
```

Then fill these parts with your data generated from giscus, save to the file.

We'll override the layouts, add `Layout: mylayout` to your 'index.ts' file:

```typescript
// index.ts
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme-without-fonts' /* I use custom font, if you not, change it to `vitepress/theme`. */
import mylayout from './mylayout.vue'

export default {
  extends: DefaultTheme,
  Layout: mylayout
} satisfies Theme
```

If you're using JavaScript to configure, use this.

```javascript
// index.js
import DefaultTheme from 'vitepress/theme-without-fonts' /* I use custom font, if you not, change it to `vitepress/theme`. */
import mylayout from './mylayout.vue'

export default {
  extends: DefaultTheme,
  Layout: mylayout
}
```

Now, run `bun run docs:dev` (if you're using npm, run `npm run docs:dev`), check if your giscus working well.

You may not want to put giscus on some pages (like your articles list page), for this, add `comments: false` to your frontmatter.

```yaml
---
title: Add giscus to VitePress
date: 2025-08-01
comments: false
---
```
