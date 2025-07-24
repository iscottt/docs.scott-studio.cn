import Logo from '@/public/logo.svg'
import type { BaseLayoutProps, LinkItemType } from 'fumadocs-ui/layouts/shared'
import { AlbumIcon } from 'lucide-react'
import Image from 'next/image'

export const linkItems: LinkItemType[] = [
  {
    icon: <AlbumIcon />,
    text: 'Blog',
    url: '/blog',
    active: 'nested-url',
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
      text: 'Blog',
      url: '/blog',
      // secondary items will be displayed differently on navbar
      secondary: false,
    },
  ],
}
