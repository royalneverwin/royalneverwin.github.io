import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'
import PostCard from '@/components/PostCard'
import { Github, Mail, ArrowRight } from 'lucide-react'

export default function Home() {
  const allPosts = getAllPosts()
  const recentPosts = allPosts.slice(0, 3) // 只显示最近的3篇文章

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="mb-6">
              <div className="w-24 h-24 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
                <span className="text-white font-bold text-2xl">R</span>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
                欢迎来到我的博客
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                一个记录技术学习、生活感悟和项目经验的地方。在这里分享我的想法、代码和见解。
              </p>
            </div>
            
            <div className="flex justify-center space-x-4">
              <a 
                href="https://github.com/royalneverwin" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                <Github size={20} className="mr-2" />
                GitHub
              </a>
              <a 
                href="mailto:your-email@example.com"
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
              >
                <Mail size={20} className="mr-2" />
                联系我
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Posts Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">最新文章</h2>
            <Link 
              href="/blog"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
            >
              查看所有文章
              <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          
          {recentPosts.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {recentPosts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">暂无文章，敬请期待...</p>
            </div>
          )}
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">关于我</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              我是一名热爱技术的开发者，专注于前端开发和全栈技术。
              喜欢探索新技术，分享学习心得，记录成长足迹。
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
