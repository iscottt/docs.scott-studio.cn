import { createMDX } from 'fumadocs-mdx/next'

const withMDX = createMDX()

/** @type {import('next').NextConfig} */
const config = {
  // output: 'export',
  eslint: {
    // Replaced by root workspace command
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  serverExternalPackages: ['ts-morph', 'typescript'],
}

export default withMDX(config)
