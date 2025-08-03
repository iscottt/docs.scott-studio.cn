import { baseOptions } from '@/app/layout.config'
import { HomeLayout } from 'fumadocs-ui/layouts/home'
import type { ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <HomeLayout {...baseOptions} className="dark:bg-neutral-950 dark:[--color-fd-background:var(--color-neutral-950)]">
      {children}
    </HomeLayout>
  )
}
