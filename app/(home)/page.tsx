import { PreviewImages } from './page.client'
export const metadata = {
  title: '木木笔记',
}

export default function HomePage() {
  return (
    <main className="container relative max-w-[1100px] px-2 py-4 z-2 lg:py-8">
      <div style={{ background: 'repeating-linear-gradient(to bottom, transparent, color-mix(in oklab, var(--color-fd-primary) 1%, transparent) 500px, transparent 1000px)' }}>
        <div className="relative">
          <div className="relative rounded-xl z-2 flex flex-col border-x border-t bg-fd-background/80 px-4 pt-12 max-md:text-center md:px-12 md:pt-16 [.uwu_&]:hidden overflow-hidden">
            <div
              className="absolute inset-0 z-[-1] blur-2xl hidden dark:block"
              style={{
                maskImage: 'linear-gradient(transparent, white, transparent)',
                background: 'repeating-linear-gradient(65deg, var(--color-blue-500), var(--color-blue-500) 12px, color-mix(in oklab, var(--color-blue-600) 30%, transparent) 20px, transparent 200px)',
              }}></div>
            <div
              className="absolute inset-0 z-[-1] blur-2xl dark:hidden"
              style={{
                maskImage: 'linear-gradient(transparent, white, transparent)',
                background:
                  'repeating-linear-gradient(65deg, var(--color-purple-300), var(--color-purple-300) 12px, color-mix(in oklab, var(--color-blue-600) 30%, transparent) 20px, transparent 200px)',
              }}></div>
            <h1 className="mb-8 text-4xl font-medium md:hidden">三禾木木的文档站</h1>
            <h1 className="mb-8 max-w-[600px] text-4xl font-medium max-md:hidden">三禾木木的文档站</h1>
            <p className="mb-8 text-fd-muted-foreground md:max-w-[80%] md:text-xl">不止有 NVPress/Halo 主题的使用文档，还有我从零开始的学习记录</p>
            <div className="inline-flex items-center gap-3 max-md:mx-auto">
              <a
                className="inline-flex items-center justify-center text-sm font-medium ring-offset-fd-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fd-ring disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-b from-fd-primary to-fd-primary/60 text-fd-primary-foreground shadow-fd-background/20 hover:bg-fd-primary/90 h-11 px-6 rounded-full"
                href="/docs/somnia/guide">
                查看文档
              </a>
              <a
                href="https://stackblitz.com/~/github.com/fuma-nama/fumadocs-ui-template"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center justify-center text-sm font-medium ring-offset-fd-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fd-ring disabled:pointer-events-none disabled:opacity-50 border hover:bg-fd-accent hover:text-fd-accent-foreground h-11 px-6 rounded-full bg-fd-background">
                我的博客
              </a>
            </div>

            <PreviewImages />
          </div>
        </div>
      </div>
    </main>
  )
}
