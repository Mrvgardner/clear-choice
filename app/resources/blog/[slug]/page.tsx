import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote/rsc'
import type { HTMLAttributes } from 'react'
import { getPostBySlug, getAllPostSlugs } from '@/lib/posts'
import { formatContentDate } from '@/lib/dates'
import ShareBar from '@/components/ShareBar'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

function BlogArticleJsonLd({ post, minutes }: { post: NonNullable<ReturnType<typeof getPostBySlug>>, minutes: number }) {
  const siteUrl = 'https://clearchoicepay.com'
  const anyPost = post as any
  const image = anyPost.ogImage || post.image || `${siteUrl}/images/og/blog-default.png`
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: anyPost.metaDescription || post.excerpt || undefined,
    image,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: post.author || 'Victor Gardner, Jr.',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Clear Choice Payment Solutions',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/brand/clearchoice-logo.svg`,
      },
    },
    mainEntityOfPage: `${siteUrl}/resources/blog/${post.slug}`,
    timeRequired: `PT${minutes}M`,
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}

function BlogH2({ children, className = '', ...props }: HTMLAttributes<HTMLHeadingElement>) {
  const label = typeof children === 'string' ? children.trim().replace(/[’]/g, "'") : ''

  if (label === "Here's the Move") {
    return (
      <h2
        {...props}
        className={`not-prose my-10 rounded-md border-l-4 border-[#ff4f00] bg-[#0a1a2f] px-5 py-4 text-xl font-bold uppercase tracking-[0.02em] text-white shadow-sm ${className}`}
      >
        {children}
      </h2>
    )
  }

  return (
    <h2 {...props} className={className}>
      {children}
    </h2>
  )
}

function MoveLead({ children, className = '', ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={`not-prose my-8 rounded-md border border-[#ffd7c2] bg-[#fff7f2] px-5 py-5 text-lg font-semibold leading-relaxed text-[#0a1a2f] shadow-sm ${className}`}
    >
      {children}
    </div>
  )
}

const mdxComponents = {
  h2: BlogH2,
  MoveLead,
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs()
  return slugs.map((slug) => ({
    slug,
  }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPostBySlug(params.slug)
  if (!post) return {}
  // The lib currently returns core fields; metaTitle/metaDescription are present in frontmatter but not typed.
  const anyPost = post as any
  const title = anyPost.metaTitle || post.title
  const description = anyPost.metaDescription || post.excerpt || ''
  const keywords: string[] | undefined = anyPost.keywords
  const siteUrl = 'https://clearchoicepay.com'
  const url = `${siteUrl.replace(/\/$/, '')}/resources/blog/${post.slug}`
  const ogImage = anyPost.ogImage || `${siteUrl.replace(/\/$/, '')}/images/og/blog-default.png`
  return {
    title,
    description,
    keywords,
    alternates: { canonical: `/resources/blog/${post.slug}` },
    openGraph: {
      title,
      description,
      url,
      type: 'article',
      siteName: 'Clear Choice Payment Solutions',
      images: ogImage ? [{ url: ogImage }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ogImage ? [ogImage] : undefined,
    },
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  // Rough reading time at ~200 words/min
  const words = post.content.trim().split(/\s+/).length
  const minutes = Math.max(1, Math.ceil(words / 200))
  
  // Get the image from post metadata
  const anyPost = post as any
  const heroImage = anyPost.image
  const postUrl = `https://clearchoicepay.com/resources/blog/${post.slug}`

  const author = post.author || 'Victor Gardner, Jr.'
  const backLink = (
    <a href="/resources/blog" className="text-[#ff4f00] hover:underline">← Back to Blog</a>
  )

  return (
    <>
      <article>
        {heroImage ? (
          <header className="relative w-full min-h-[440px] md:min-h-[560px] flex items-end bg-[#0a1a2f]">
            <Image
              src={heroImage}
              alt={post.title}
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-[#0a1a2f]/95 via-[#0a1a2f]/55 to-[#0a1a2f]/10"
              aria-hidden
            />
            <div className="relative w-full max-w-4xl mx-auto px-4 pt-40 pb-10 text-white">
              <div className="mb-4">{backLink}</div>
              <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">{post.title}</h1>
              <div className="text-sm text-white/90 mb-1">By {author}</div>
              <div className="text-sm text-white/75 flex items-center gap-2">
                <span>{formatContentDate(post.date)}</span>
                <span aria-hidden>•</span>
                <span>{minutes} min read</span>
              </div>
            </div>
          </header>
        ) : (
          <header className="max-w-4xl mx-auto px-4 pt-8">
            <div className="mb-4">{backLink}</div>
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <div className="text-sm text-gray-600 mb-2">By {author}</div>
            <div className="text-sm text-gray-500 flex items-center gap-2">
              <span>{formatContentDate(post.date)}</span>
              <span aria-hidden>•</span>
              <span>{minutes} min read</span>
            </div>
          </header>
        )}

        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="mb-6">
            <ShareBar title={post.title} url={postUrl} />
          </div>

          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div className="prose prose-lg max-w-none">
            <MDXRemote source={post.content} components={mdxComponents} />
          </div>
        </div>
      </article>
      <BlogArticleJsonLd post={post} minutes={minutes} />
    </>
  )
}
