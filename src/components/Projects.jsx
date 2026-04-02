import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, Github, Star } from 'lucide-react'

const projects = [
  {
    title: 'Local Cart – E-commerce Website',
    description: 'A fully functional e-commerce website built with WordPress. Designed the UI layout, structured product pages, and implemented cart and payment functionality with a focus on responsive, user-friendly design.',
    tags: ['WordPress', 'WooCommerce', 'PHP', 'CSS', 'Payment Gateway'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    featured: true,
    gradient: 'from-indigo-500/20 to-purple-500/20',
    border: 'border-indigo-500/30',
    topBar: 'from-indigo-500 to-purple-500',
  },
  {
    title: 'Hospital Resource Forecasting Agent',
    description: 'An AI-powered agent built during a hackathon to forecast hospital resource demand. Automated workflow pipelines using n8n and designed predictive logic to estimate resource utilization in real time.',
    tags: ['n8n', 'Python', 'AI Workflows', 'Automation', 'Forecasting'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    featured: true,
    gradient: 'from-emerald-500/20 to-teal-500/20',
    border: 'border-emerald-500/30',
    topBar: 'from-emerald-500 to-teal-500',
  },
]

function ProjectCard({ project, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`glass rounded-2xl overflow-hidden group hover:-translate-y-1 transition-all duration-300 border ${project.border} hover:shadow-xl`}
    >
      <div className={`h-1.5 w-full bg-gradient-to-r ${project.topBar}`} />

      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
              {project.title}
            </h3>
            {project.featured && (
              <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-600 dark:text-indigo-300 text-xs">
                <Star size={10} fill="currentColor" /> Featured
              </span>
            )}
          </div>
        </div>

        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-md bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 text-xs font-mono border border-gray-200 dark:border-white/10"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <Github size={15} /> Code
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 transition-colors"
          >
            <ExternalLink size={15} /> Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-indigo-500 dark:text-indigo-400 font-mono text-sm">projects</span>
          <h2 className="text-4xl font-bold mt-2 text-gray-900 dark:text-white">Things I've Built</h2>
          <p className="text-gray-500 mt-3 max-w-md mx-auto">
            A selection of projects that showcase my skills and problem-solving approach.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center mt-10"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all duration-200 hover:-translate-y-0.5"
          >
            <Github size={18} /> View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
