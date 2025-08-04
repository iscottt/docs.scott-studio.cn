import { remarkSteps } from 'fumadocs-core/mdx-plugins'
import { defineConfig, defineDocs, frontmatterSchema, metaSchema } from 'fumadocs-mdx/config'
import { remarkAutoTypeTable } from 'fumadocs-typescript'
import { z } from 'zod'


export const docs = defineDocs({
  docs: {
    async: true,
  },
  meta: {
    schema: metaSchema.extend({
      description: z.string().optional(),
    }),
  },
})
export const { docs: docsChangelog, meta: metaChangelog } = defineDocs({
  dir: 'changelog/content',
  docs: {
    schema: frontmatterSchema.extend({
      date: z.string(),
      tags: z.array(z.string()).optional(),
      version: z.string().optional(),
    }),
  },
  meta: {
    schema: metaSchema.extend({
      description: z.string().optional(),
    }),
  },
})

export default defineConfig({
  lastModifiedTime: 'git',
  mdxOptions: {
    rehypeCodeOptions: {
      lazy: true,
      experimentalJSEngine: true,
      langs: ['ts', 'js', 'html', 'tsx', 'mdx'],
      inline: 'tailing-curly-colon',
      themes: {
        light: 'catppuccin-latte',
        dark: 'catppuccin-mocha',
      },
    },
    remarkCodeTabOptions: {
      parseMdx: true,
    },
    remarkNpmOptions: {
      persist: {
        id: 'package-manager',
      },
    },
    remarkPlugins: [remarkSteps, remarkAutoTypeTable],
  },
})
