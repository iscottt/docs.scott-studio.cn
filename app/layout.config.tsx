import Logo from '@/public/logo.svg'
import type { BaseLayoutProps, LinkItemType } from 'fumadocs-ui/layouts/shared'
import { ExternalLinkIcon } from 'lucide-react'
import Image from 'next/image'

export const linkItems: LinkItemType[] = [
  {
    text: '个人博客',
    url: 'https://blog.scott-studio.cn',
  },
  {
    text: 'Halo博客',
    url: 'https://halo.scott-studio.cn',
  },
  {
    text: 'THYUU/星度',
    url: 'https://scott-studio.cn',
  },
]
/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <Image src={Logo} className="w-8" sizes="100px" aria-label="木木笔记" alt="logo" />
        木木笔记
      </>
    ),
    transparentMode: 'top',
  },
  // see https://fumadocs.dev/docs/ui/navigation/links
  links: [
    {
      text: '个人博客',
      url: 'https://blog.scott-studio.cn',
      icon: <ExternalLinkIcon />,
    },
  ],
}
