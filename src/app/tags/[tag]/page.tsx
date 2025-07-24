import { getPostsByTag, getAllTags } from '@/lib/posts'
import PostCard from '@/components/PostCard'
import Link from 'next/link'
import { ArrowLeft, Tag } from 'lucide-react'
import { Metadata } from 'next'

interface TagPageProps {
  params: {
    tag: string
  }
}

export async function generateStaticParams() {
  const tags = getAllTags()
  return tags.map((tag) => ({
    tag: encodeURIComponent(tag),
  }))
}

export async function generateMetadata({ params }: TagPageProps): Promise<Metadata> {
  const decodedTag = decodeURIComponent(params.tag)
  
  return {
    title: `标签: ${decodedTag} - RoyalNeverWin`,
    description: `浏览标签为 "${decodedTag}" 的所有文章`,
  }
}

export default function TagPage({ params }: TagPageProps) {
  const decodedTag = decodeURIComponent(params.tag)
  const posts = getPostsByTag(decodedTag)

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 返回链接 */}
        <div className="mb-8">
          <Link 
            href="/tags"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
          >
            <ArrowLeft size={16} className="mr-1" />
            返回标签列表
          </Link>
        </div>

        {/* 页面标题 */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Tag size={24} className="text-blue-600 mr-2" />
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              {decodedTag}
            </h1>
          </div>
          <p className="text-lg text-gray-600">
            共找到 {posts.length} 篇相关文章
          </p>
        </div>

        {/* 文章列表 */}
        {posts.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              暂无标签为 "{decodedTag}" 的文章
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
