import Link from 'next/link'
import { Home, Book, FileText, Briefcase, Github, Mail } from 'lucide-react'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--line)] bg-[color:rgba(244,239,229,0.82)] backdrop-blur-xl transition-colors duration-300 dark:bg-[color:rgba(18,16,13,0.82)]">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="group flex items-center space-x-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-[var(--accent)] text-sm font-bold text-white transition-transform group-hover:-rotate-6">
              王
            </div>
            <div>
              <span className="block text-base font-semibold text-[var(--foreground)]">王新昊</span>
              <span className="block text-xs tracking-[0.18em] text-[var(--muted)]">ROYALNEVERWIN</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-7">
            {[
              { href: '/', label: '首页', icon: Home },
              { href: '/#experience', label: '经历', icon: Briefcase },
              { href: '/#publications', label: '论文', icon: FileText },
              { href: '/blog', label: '博客', icon: Book },
            ].map(({ href, label, icon: Icon }) => (
              <Link 
                key={href}
                href={href} 
                className="flex items-center space-x-1 text-sm font-medium text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
              >
                <Icon size={16} />
                <span>{label}</span>
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <a 
              href="https://github.com/royalneverwin" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="mailto:wangxinhao@pku.edu.cn" 
              className="text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
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
