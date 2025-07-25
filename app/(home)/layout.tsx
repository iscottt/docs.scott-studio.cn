import { baseOptions, linkItems } from '@/app/layout.config'
import Preview from '@/public/banner.png'
import Link from 'fumadocs-core/link'
import { HomeLayout } from 'fumadocs-ui/layouts/home'
import { NavbarMenu, NavbarMenuContent, NavbarMenuLink, NavbarMenuTrigger } from 'fumadocs-ui/layouts/home/navbar'
import { ComponentIcon, Pencil, PlusIcon, Server } from 'lucide-react'
import Image from 'next/image'
import type { ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <HomeLayout
      {...baseOptions}
      style={
        {
          '--spacing-fd-container': '1120px',
        } as object
      }
      links={[
        {
          type: 'custom',
          on: 'nav',
          children: (
            <NavbarMenu>
              <NavbarMenuTrigger>
                <Link href="/docs/somnia/guide">主题文档</Link>
              </NavbarMenuTrigger>
              <NavbarMenuContent className="text-[15px]">
                <NavbarMenuLink href="/docs/somnia/guide" className="md:row-span-2">
                  <div className="-mx-3 -mt-3">
                    <Image
                      src={Preview}
                      alt="Perview"
                      className="rounded-t-lg object-cover"
                      style={{
                        maskImage: 'linear-gradient(to bottom,white 60%,transparent)',
                      }}
                    />
                  </div>
                  <p className="font-medium">Getting Started</p>
                  <p className="text-fd-muted-foreground text-sm">Learn to use Fumadocs on your docs site.</p>
                </NavbarMenuLink>

                <NavbarMenuLink href="/docs/ui/components" className="lg:col-start-2">
                  <ComponentIcon className="bg-fd-primary text-fd-primary-foreground p-1 mb-2 rounded-md" />
                  <p className="font-medium">Somnia主题</p>
                  <p className="text-fd-muted-foreground text-sm">Add interactive experience to your docs.</p>
                </NavbarMenuLink>

                <NavbarMenuLink href="/docs/ui/openapi" className="lg:col-start-2">
                  <Server className="bg-fd-primary text-fd-primary-foreground p-1 mb-2 rounded-md" />
                  <p className="font-medium">THYUU/星度</p>
                  <p className="text-fd-muted-foreground text-sm">Generate interactive playgrounds and docs for your OpenAPI schema.</p>
                </NavbarMenuLink>

                <NavbarMenuLink href="/docs/ui/markdown" className="lg:col-start-3 lg:row-start-1">
                  <Pencil className="bg-fd-primary text-fd-primary-foreground p-1 mb-2 rounded-md" />
                  <p className="font-medium">Markdown</p>
                  <p className="text-fd-muted-foreground text-sm">Learn the writing format/syntax of Fumadocs.</p>
                </NavbarMenuLink>

                <NavbarMenuLink href="/docs/ui/manual-installation" className="lg:col-start-3 lg:row-start-2">
                  <PlusIcon className="bg-fd-primary text-fd-primary-foreground p-1 mb-2 rounded-md" />
                  <p className="font-medium">Manual Installation</p>
                  <p className="text-fd-muted-foreground text-sm">Setup Fumadocs for your existing Next.js app.</p>
                </NavbarMenuLink>
              </NavbarMenuContent>
            </NavbarMenu>
          ),
        },
        ...linkItems,
      ]}
      className="dark:bg-neutral-950 dark:[--color-fd-background:var(--color-neutral-950)]">
      {children}
      <Footer />
    </HomeLayout>
  )
}

function Footer() {
  return (
    <div className="relative z-50 mt-10 overflow-hidden border-t border-[#d3edf81d] bg-black">
      <div
        aria-hidden="true"
        className="left-1/2 top-0 w-[40%] center pointer-events-none absolute h-px max-w-full -translate-x-1/2 -translate-y-1/2"
        style={{
          background: 'linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0.0) 0%, rgba(143, 143, 143, 0.67) 50%, rgba(0, 0, 0, 0) 100%)',
        }}></div>
      <div
        aria-hidden="true"
        className="-top-1 left-1/2 h-[100px] w-[70%] md:h-[300px] center pointer-events-none absolute max-w-full -translate-x-1/2 -translate-y-1/2"
        style={{ background: 'conic-gradient(from 90deg at 50% 50%, #00000000 50%, #000 50%),radial-gradient(rgba(200,200,200,0.1) 0%, transparent 80%)' }}></div>
      <footer className="mt-auto border-t bg-fd-card py-12 text-fd-secondary-foreground">
        <div className="container flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-1 text-sm ">Copyright © 2022-2025 SCOTT Studio 保留所有权利。</p>
            <p className="text-xs">京ICP备19051325号-2</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
