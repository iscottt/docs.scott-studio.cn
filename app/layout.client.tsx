'use client'

import { cn } from '@/lib/cn'
import { type ReactNode } from 'react'

export function Body({ children }: { children: ReactNode }): React.ReactElement {
  return <body className={cn('ui', 'relative flex min-h-screen flex-col')}>{children}</body>
}
