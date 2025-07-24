import { getAllTags, getAllPosts } from '@/lib/posts'
import Link from 'next/link'
import { Tag } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '标签 - RoyalNeverWin',
  description: '浏览所有文章标签',
}

export default function TagsPage() {
  const allTags = getAllTags()
  const allPosts = getAllPosts()

  // 计算每个标签的文章数量
  const tagCounts = allTags.reduce((acc, tag) => {
    acc[tag] = allPosts.filter(post => 
      post.tags.some(postTag => postTag.toLowerCase() === tag.toLowerCase())
    ).length
    return acc
  }, {} as Record<string, number>)

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            文章标签
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            按标签浏览文章内容
          </p>
        </div>

        {allTags.length > 0 ? (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {allTags.map((tag) => (
                <Link
                  key={tag}
                  href={`/tags/${encodeURIComponent(tag)}`}
                  className="group p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all"
                >
                  <div className="flex items-center space-x-2">
                    <Tag size={16} className="text-blue-600" />
                    <span className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                      {tag}
                    </span>
                  </div>
                  <div className="mt-1 text-sm text-gray-500">
                    {tagCounts[tag]} 篇文章
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">暂无标签</p>
          </div>
        )}
      </div>
    </div>
  )
}
