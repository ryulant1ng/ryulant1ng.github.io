---
title: Friends
---

# Friends

If you want to add friends link with me, please make sure you already add me in your friends link page. You need to provide your:

- Site URL
- Avatar
- Name
- A one sentence description
- Your social link (optional)

You can leave a message under this article or send an email to ryulant1ng★gmail.com to apply for a friend link.

<script setup>
import { VPTeamMembers } from 'vitepress/theme-without-fonts'

const icons = {
  web: {
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
  <path d="M21.721 12.752a9.711 9.711 0 0 0-.945-5.003 12.754 12.754 0 0 1-4.339 2.708 18.991 18.991 0 0 1-.214 4.772 17.165 17.165 0 0 0 5.498-2.477ZM14.634 15.55a17.324 17.324 0 0 0 .332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 0 0 .332 4.647 17.385 17.385 0 0 0 5.268 0ZM9.772 17.119a18.963 18.963 0 0 0 4.456 0A17.182 17.182 0 0 1 12 21.724a17.18 17.18 0 0 1-2.228-4.605ZM7.777 15.23a18.87 18.87 0 0 1-.214-4.774 12.753 12.753 0 0 1-4.34-2.708 9.711 9.711 0 0 0-.944 5.004 17.165 17.165 0 0 0 5.498 2.477ZM21.356 14.752a9.765 9.765 0 0 1-7.478 6.817 18.64 18.64 0 0 0 1.988-4.718 18.627 18.627 0 0 0 5.49-2.098ZM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 0 0 1.988 4.718 9.765 9.765 0 0 1-7.478-6.816ZM13.878 2.43a9.755 9.755 0 0 1 6.116 3.986 11.267 11.267 0 0 1-3.746 2.504 18.63 18.63 0 0 0-2.37-6.49ZM12 2.276a17.152 17.152 0 0 1 2.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0 1 12 2.276ZM10.122 2.43a18.629 18.629 0 0 0-2.37 6.49 11.266 11.266 0 0 1-3.746-2.504 9.754 9.754 0 0 1 6.116-3.985Z" />
</svg>`
  }
}

const members = [
  {
    avatar: '/images/friendsavatar/winsloweric.png',
    name: 'Winslow Flandre',
    desc: 'The blessed <ruby>network<rt>WIRED</rt></ruby> interwires our psyches together',
    links: [
      { icon: icons.web, link: 'https://www.winsloweric.com/' },
      { icon: 'github', link: 'https://github.com/SorenEricMent' },
      { icon: 'x', link: 'https://x.com/WinslowHee' },
      { icon: 'mastodon', link: 'https://hub.winslow.cloud/@winslow' }
    ]
  }
]
</script>

<VPTeamMembers :members />
