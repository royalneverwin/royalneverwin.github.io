import Link from 'next/link'
import { Home, Book, Tag, Github, Mail } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo/标题 */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform">
              <span className="text-white font-bold text-sm">R</span>
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">RoyalNeverWin</span>
          </Link>

          {/* 导航菜单 - 桌面端 */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { href: '/', label: '首页', icon: Home },
              { href: '/blog', label: '博客', icon: Book },
              { href: '/tags', label: '标签', icon: Tag },
            ].map(({ href, label, icon: Icon }) => (
              <Link 
                key={href}
                href={href} 
                className="flex items-center space-x-1 text-sm font-medium text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
              >
                <Icon size={16} />
                <span>{label}</span>
              </Link>
            ))}
          </nav>

          {/* 社交链接 */}
          <div className="flex items-center space-x-4">
            <a 
              href="https://github.com/royalneverwin" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="mailto:your-email@example.com" 
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
