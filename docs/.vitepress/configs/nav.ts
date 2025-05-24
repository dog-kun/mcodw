import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  { text: '玩家导航', link: '/nav/' },
  { text: '友情链接',
    items: [
      { text: '疯梨高版本社区服', link: 'https://mc.flweb.cn/' },
      { text: 'MSCPO', link: 'https://www.mscpo.top/' },
    ], },
]
