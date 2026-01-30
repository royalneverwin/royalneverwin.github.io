import { Github, ExternalLink, Folder } from 'lucide-react'

export interface Project {
  title: string
  description: string
  tags: string[]
  githubUrl?: string
  demoUrl?: string
}

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="card p-6 flex flex-col h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-start justify-between mb-4">
        <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
          <Folder size={24} />
        </div>
        <div className="flex gap-3">
          {project.githubUrl && (
            <a 
              href={project.githubUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
              aria-label="View on GitHub"
            >
              <Github size={20} />
            </a>
          )}
          {project.demoUrl && (
            <a 
              href={project.demoUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
              aria-label="View Live Demo"
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>
      
      <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">
        {project.title}
      </h3>
      
      <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow leading-relaxed">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tags.map((tag) => (
          <span 
            key={tag} 
            className="text-xs font-medium px-2.5 py-1 rounded-md bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}
