import { getPostData, getAllPostSlugs } from '@/lib/posts'
import { formatDate } from '@/lib/utils'
import { Calendar, Tag as TagIcon, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { Metadata } from 'next'

interface PostPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs()
  return slugs.map((slug) => ({
    slug: slug.params.slug,
  }))
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostData(slug)
  
  return {
    title: `${post.title} - RoyalNeverWin`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
    },
  }
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params
  const post = await getPostData(slug)

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 返回链接 */}
        <div className="mb-8">
          <Link 
            href="/blog"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
          >
            <ArrowLeft size={16} className="mr-1" />
            返回博客列表
          </Link>
        </div>

        {/* 文章头部 */}
        <header className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {post.title}
          </h1>
          
          {/* 元信息 */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center">
              <Calendar size={16} className="mr-1" />
              <time dateTime={post.date}>{formatDate(post.date)}</time>
            </div>
            
            {post.tags.length > 0 && (
              <div className="flex items-center">
                <TagIcon size={16} className="mr-1" />
                <div className="flex gap-2">
                  {post.tags.map((tag) => (
                    <Link
                      key={tag}
                      href={`/tags/${encodeURIComponent(tag)}`}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </header>

        {/* 文章内容 */}
        <article className="prose prose-lg max-w-none">
          <div 
            className="prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-pre:bg-gray-900 prose-pre:text-gray-100"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>

        {/* 文章底部导航（可以后续添加上一篇/下一篇） */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="text-center">
            <Link 
              href="/blog"
              className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
            >
              <ArrowLeft size={16} className="mr-2" />
              返回博客列表
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
