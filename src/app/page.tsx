import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'
import PostCard from '@/components/PostCard'
import ProjectCard, { Project } from '@/components/ProjectCard'
import { Github, Mail, ArrowRight, Globe, Database, Cpu } from 'lucide-react'

export default function Home() {
  const allPosts = getAllPosts()
  const recentPosts = allPosts.slice(0, 3)

  const skills = [
    { 
      name: '前端开发', 
      icon: Globe, 
      items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5/CSS3', 'Framer Motion'] 
    },
    { 
      name: '后端开发', 
      icon: Database, 
      items: ['Node.js', 'Express', 'PostgreSQL', 'Prisma', 'REST API'] 
    },
    { 
      name: '开发工具', 
      icon: Cpu, 
      items: ['Git', 'Docker', 'VS Code', 'Figma', 'Jest'] 
    },
  ]

  const projects: Project[] = [
    {
      title: '个人博客系统',
      description: '基于 Next.js 14 和 Tailwind CSS 构建的静态博客，支持 Markdown 渲染、深色模式和响应式设计。',
      tags: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
      githubUrl: 'https://github.com/royalneverwin/royalneverwin.github.io',
      demoUrl: 'https://royalneverwin.github.io',
    },
    {
      title: 'React 组件库',
      description: '一套轻量级、可定制的 React 组件库，包含 20+ 个常用组件，支持 TypeScript 类型提示。',
      tags: ['React', 'TypeScript', 'Storybook', 'Rollup'],
      githubUrl: 'https://github.com/royalneverwin',
    },
    {
      title: '任务管理工具',
      description: '一个简单的任务管理应用，支持拖拽排序、标签分类和本地存储。',
      tags: ['Vue.js', 'Vuex', 'Firebase'],
      githubUrl: 'https://github.com/royalneverwin',
    },
  ]

  return (
    <div className="flex flex-col gap-12 pb-12">
      {/* Hero Section */}
      <section className="pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-8 relative inline-block">
              <div className="w-32 h-32 mx-auto bg-gradient-to-tr from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-xl mb-4 relative z-10">
                <span className="text-white font-bold text-4xl">R</span>
              </div>
              <div className="absolute inset-0 bg-blue-500 blur-2xl opacity-20 rounded-full transform scale-150 animate-pulse"></div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300">
              构建数字体验，<br className="hidden md:block" /> 探索技术边界
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
              你好，我是 <span className="font-semibold text-blue-600 dark:text-blue-400">RoyalNeverWin</span>。
              <br />
              一名全栈开发者，热衷于构建高性能 Web 应用和探索前沿技术。
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="https://github.com/royalneverwin" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gray-900 text-white hover:bg-gray-800 transition-colors dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 font-medium"
              >
                <Github size={20} className="mr-2" />
                浏览 GitHub
              </a>
              <a 
                href="mailto:wangxinhao.pku@vip.163.com"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors font-medium"
              >
                <Mail size={20} className="mr-2" />
                联系我
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-12 bg-gray-50 dark:bg-white/5">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">技术栈</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skill) => (
              <div key={skill.name} className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400 mr-3">
                    <skill.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold">{skill.name}</h3>
                </div>
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li key={item} className="flex items-center text-gray-600 dark:text-gray-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-12">
        <div className="container px-4 mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">精选项目</h2>
            <a 
              href="https://github.com/royalneverwin" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
            >
              查看更多
              <ArrowRight size={16} className="ml-1" />
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts Section */}
      <section className="py-12 bg-gray-50 dark:bg-white/5">
        <div className="container px-4 mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">最新文章</h2>
            <Link 
              href="/blog"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
            >
              全部文章
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
            <div className="text-center py-12 opacity-70">
              <p>暂无文章，敬请期待...</p>
            </div>
          )}
        </div>
      </section>

      {/* About Section */}
      <section className="py-12">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl">
            <h2 className="text-3xl font-bold mb-6">关于我</h2>
            <p className="text-lg md:text-xl opacity-90 leading-relaxed mb-8">
              我是一名热爱技术的开发者，专注于前端开发和全栈技术。
              <br className="hidden md:block" />
              我相信技术的力量可以改变世界，也乐于通过开源项目和博客文章分享我的所学所感。
            </p>
            <a 
              href="mailto:wangxinhao.pku@vip.163.com"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-lg"
            >
              和我聊聊
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
