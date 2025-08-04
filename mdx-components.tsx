import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import * as Callouts from 'fumadocs-ui/components/callout'
import { ImageZoom } from 'fumadocs-ui/components/image-zoom'
import * as Steps from 'fumadocs-ui/components/steps'
import * as TabsComponents from 'fumadocs-ui/components/tabs'
import defaultMdxComponents from 'fumadocs-ui/mdx'
import * as icons from 'lucide-react'
import type { MDXComponents } from 'mdx/types'

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...(icons as unknown as MDXComponents),
    ...defaultMdxComponents,
    ...TabsComponents,
    ...Steps,
    ...Callouts,
    img: props => <ImageZoom {...(props as any)} style={{ width: '100%' }} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />,
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
    ...components,
  }
}

export const useMDXComponents = getMDXComponents
