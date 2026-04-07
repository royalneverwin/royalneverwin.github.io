import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-20 border-t border-[color:var(--line)] bg-[color:rgba(255,250,244,0.42)]">
      <div className="container py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-lg font-semibold text-[var(--foreground)]">王新昊</p>
            <p className="mt-2 max-w-2xl text-sm leading-7 text-[var(--muted)]">
              聚焦自动驾驶三维感知、模型量化、知识蒸馏、模型剪枝与工程化部署。
            </p>
          </div>

          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-[var(--muted)]">
            <a
              href="mailto:wangxinhao@pku.edu.cn"
              className="transition-colors hover:text-[var(--foreground)]"
            >
              wangxinhao@pku.edu.cn
            </a>
            <a
              href="https://github.com/royalneverwin"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[var(--foreground)]"
            >
              GitHub
            </a>
            <Link href="/blog" className="transition-colors hover:text-[var(--foreground)]">
              Blog
            </Link>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-[color:var(--line)] pt-6 text-sm text-[var(--muted)] md:flex-row md:items-center md:justify-between">
          <p>© {currentYear} 王新昊 / RoyalNeverWin</p>
          <p>Built with Next.js and Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  )
}
