import Link from 'next/link'
import { Home, Book, Tag, Github, Mail } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo/标题 */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">R</span>
            </div>
            <span className="text-xl font-bold text-gray-900">RoyalNeverWin</span>
          </Link>

          {/* 导航菜单 */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Home size={18} />
              <span>首页</span>
            </Link>
            <Link 
              href="/blog" 
              className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Book size={18} />
              <span>博客</span>
            </Link>
            <Link 
              href="/tags" 
              className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Tag size={18} />
              <span>标签</span>
            </Link>
          </nav>

          {/* 社交链接 */}
          <div className="flex items-center space-x-4">
            <a 
              href="https://github.com/royalneverwin" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              <Github size={20} />
            </a>
            <a 
              href="mailto:your-email@example.com" 
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
