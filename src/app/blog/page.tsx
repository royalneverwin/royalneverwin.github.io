import { getAllPosts } from '@/lib/posts'
import PostCard from '@/components/PostCard'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '博客 - RoyalNeverWin',
  description: '浏览所有博客文章',
}

export default function BlogPage() {
  const allPosts = getAllPosts()

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            我的博客
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            记录学习历程，分享技术心得
          </p>
        </div>

        {allPosts.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            {allPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">暂无文章，敬请期待...</p>
          </div>
        )}
      </div>
    </div>
  )
}
