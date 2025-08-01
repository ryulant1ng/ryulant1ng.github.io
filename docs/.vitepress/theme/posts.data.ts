import { createContentLoader } from 'vitepress'

interface Post {
  title: string
  url: string
  date: {
    time: number
    string: string
  }
}

declare const data: Post[]
export { data }

export default createContentLoader('articles/*.md', {
  transform(raw): Post[] {
    return raw
      .map(({ url, frontmatter }) => ({
        title: frontmatter.title,
        url,
        date: formatDate(frontmatter.date)
      }))
      .sort((a, b) => b.date.time - a.date.time)
  }
})

function formatDate(raw: string): Post['date'] {
  const date = new Date(raw)
  date.setUTCHours(12)
  return {
    time: +date,
    string: date.toLocaleDateString('en-GB', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }
}