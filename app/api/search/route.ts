import { source } from '@/lib/source'
import { type DocumentRecord } from 'fumadocs-core/search/algolia'
import { NextResponse } from 'next/server'

export const revalidate = false

export function GET() {
  const results: DocumentRecord[] = []

  for (const page of source.getPages()) {
    results.push({
      _id: page.url,
      structured: { headings: [], contents: [] },
      url: page.url,
      title: page.data.title,
      description: page.data.description,
    })
  }

  return NextResponse.json(results)
}
