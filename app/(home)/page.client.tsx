'use client'

import { cn } from '@/lib/cn'
import { cva } from 'class-variance-authority'
import Image from 'next/image'
import { useState } from 'react'
import MainImg from './main.png'
import OpenAPIImg from './openapi.png'

const previewButtonVariants = cva('w-20 h-9 text-sm font-medium transition-colors rounded-full', {
  variants: {
    active: {
      true: 'text-fd-primary-foreground',
      false: 'text-fd-muted-foreground',
    },
  },
})
export function PreviewImages() {
  const [active, setActive] = useState(0)

  return (
    <div className="mt-12 min-w-[800px] overflow-hidden xl:-mx-12 dark:[mask-image:linear-gradient(to_top,transparent,white_40px)]">
      <div className="absolute flex flex-row left-1/2 -translate-1/2 bottom-4 z-2 p-1 rounded-full bg-fd-card border shadow-xl dark:shadow-fd-background">
        <div
          role="none"
          className="absolute bg-fd-primary rounded-full w-20 h-9 transition-transform z-[-1]"
          style={{
            transform: `translateX(calc(var(--spacing) * 20 * ${active}))`,
          }}
        />
        <button className={cn(previewButtonVariants({ active: active === 0 }))} onClick={() => setActive(0)}>
          Docs
        </button>
        <button className={cn(previewButtonVariants({ active: active === 1 }))} onClick={() => setActive(1)}>
          OpenAPI
        </button>
      </div>
      <Image src={MainImg} alt="preview" priority className={cn('w-full select-none duration-1000 animate-in fade-in -mb-60 slide-in-from-bottom-12 lg:-mb-40', active !== 0 && 'hidden')} />
      {active === 1 && (
        <Image src={OpenAPIImg} alt="preview" priority className={cn('w-full select-none duration-1000 animate-in fade-in -mb-60 slide-in-from-bottom-12 lg:-mb-40', active !== 1 && 'hidden')} />
      )}
    </div>
  )
}
