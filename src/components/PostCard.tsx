import Link from 'next/link'
import { PostMetadata } from '@/lib/posts'
import { formatDate } from '@/lib/utils'
import { Calendar, ArrowRight } from 'lucide-react'

interface PostCardProps {
  post: PostMetadata
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <article className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="space-y-3">
        {/* 标题 */}
        <h2 className="text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors">
          <Link href={`/blog/${post.slug}`}>
            {post.title}
          </Link>
        </h2>

        {/* 日期 */}
        <div className="flex items-center text-sm text-gray-500">
          <Calendar size={14} className="mr-1" />
          <time dateTime={post.date}>{formatDate(post.date)}</time>
        </div>

        {/* 摘要 */}
        <p className="text-gray-600 leading-relaxed">
          {post.excerpt}
        </p>

        {/* 标签 */}
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
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
        )}

        {/* 阅读更多 */}
        <div className="pt-2">
          <Link 
            href={`/blog/${post.slug}`}
            className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700 font-medium"
          >
            阅读更多
            <ArrowRight size={14} className="ml-1" />
          </Link>
        </div>
      </div>
    </article>
  )
}
