import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'

export type DocMeta = {
  slug: string
  title: string
  description?: string
  date?: string
  [key: string]: any
}

export function listDocs(dirName: string): DocMeta[] {
  const DIR = path.join(process.cwd(), 'content', dirName)
  if (!fs.existsSync(DIR)) return []
  return fs
    .readdirSync(DIR)
    .filter((f) => f.endsWith('.mdx') || f.endsWith('.md'))
    .map((file) => {
      const slug = file.replace(/\.mdx?$/, '')
      const raw = fs.readFileSync(path.join(DIR, file), 'utf8')
      const { data } = matter(raw)
      return { slug, ...(data || {}) } as DocMeta
    })
    .sort((a, b) => (a.date && b.date ? (a.date < b.date ? 1 : -1) : 0))
}

export function readDoc(dirName: string, slug: string) {
  const DIR = path.join(process.cwd(), 'content', dirName)
  const full = path.join(DIR, `${slug}.mdx`)
  const alt = path.join(DIR, `${slug}.md`)
  const file = fs.existsSync(full) ? full : fs.existsSync(alt) ? alt : null
  if (!file) return null
  const raw = fs.readFileSync(file, 'utf8')
  const { data, content } = matter(raw)
  return { meta: { slug, ...(data || {}) } as DocMeta, content }
}
