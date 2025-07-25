import { Card, Cards } from 'fumadocs-ui/components/card'
import { ActivityIcon, BookOpenIcon, PaletteIcon, PartyPopperIcon, SignatureIcon, SparkleIcon } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: '木木笔记',
}

export default function HomePage() {
  return (
    <main className="container relative p-4 z-2 lg:py-8 ">
      <div className="relative rounded-xl z-2 flex flex-col  bg-fd-background/80  pt-12 max-md:text-center  md:pt-16 [.uwu_&]:hidden overflow-hidden">
        <h1 className="mb-8 text-4xl font-medium md:hidden">三禾木木的文档站</h1>
        <h1 className="mb-8 max-w-[600px] text-4xl font-medium max-md:hidden">三禾木木的文档站</h1>
        <p className="mb-8 text-fd-muted-foreground md:max-w-[80%] md:text-xl">包含主题的使用文档，以及一些其他的内容。</p>
        <div className="inline-flex items-center gap-3 max-md:mx-auto">
          <Link
            className="inline-flex items-center justify-center text-sm font-medium ring-offset-fd-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fd-ring disabled:pointer-events-none disabled:opacity-50  text-black dark:text-white shadow-fd-background/20 bg-black hover:bg-gray-800 dark:bg-blue-500 dark:hover:bg-blue-400 h-11 px-6 rounded-full"
            href="/docs/somnia/guide">
            查看文档
          </Link>
          <Link
            href="https://blog.scott-studio.cn"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center justify-center text-sm font-medium ring-offset-fd-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fd-ring disabled:pointer-events-none disabled:opacity-50 border hover:bg-fd-accent hover:text-fd-accent-foreground h-11 px-6 rounded-full bg-fd-background">
            我的博客
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 mt-20 gap-8">
          <Cards>
            <Card title="专注内容" icon={<ActivityIcon className="text-purple-300" />}>
              使用 mdx 语法构建内容体系，聚焦信息内核，剥离冗余形式，以结构化呈现深度价值，在繁杂中锚定内容本质。
            </Card>
          </Cards>
          <Cards>
            <Card title="知识沉淀" icon={<BookOpenIcon className="text-purple-300" />}>
              通过系统化梳理，将零散信息转化为结构化知识，支持持续积累、迭代与复用，让经验与智慧形成可传承的资产。
            </Card>
          </Cards>
          <Cards>
            <Card title="学会思考" icon={<SparkleIcon className="text-purple-300" />}>
              从观点提炼到逻辑串联，从信息分层到价值锚定，让隐性的思考过程转化为显性的结构化表达，实现内容与思维的共同成长。
            </Card>
          </Cards>
          <Cards>
            <Card title="主题开发" icon={<PaletteIcon className="text-purple-300" />}>
              不论是 NvPress 还是 Halo，一套核心的主题开发逻辑贯穿始终。让主题既能承载平台的基础功能，又能释放开发者的创意个性。
            </Card>
          </Cards>
          <Cards>
            <Card title="NvPress" icon={<PartyPopperIcon className="text-purple-300" />}>
              nvPress 是一款完全基于 JavaScript 技术栈构建造的现代化 CMS，提供高效便捷的内容管理解决方案。
            </Card>
          </Cards>
          <Cards>
            <Card title="Halo" icon={<SignatureIcon className="text-purple-300" />}>
              强大易用的开源建站工具，配合上丰富的模板与插件，帮助你构建你心中的理想站点。
            </Card>
          </Cards>
        </div>
      </div>
    </main>
  )
}
