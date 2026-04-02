import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, Lightbulb, Target, Coffee } from 'lucide-react'

const stats = [
  { icon: GraduationCap, label: 'CSE Student', value: '2nd Year' },
  { icon: Target, label: 'Projects Built', value: '2+' },
  { icon: Lightbulb, label: 'Problems Solved', value: '350+' },
  { icon: Coffee, label: 'HackerRank Java', value: '4★' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="section-padding">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-indigo-500 dark:text-indigo-400 font-mono text-sm">about me</span>
          <h2 className="text-4xl font-bold mt-2 text-gray-900 dark:text-white">Who I Am</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="w-48 h-48 mx-auto lg:mx-0 mb-8 rounded-2xl glass flex items-center justify-center text-6xl border border-indigo-500/30 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20" />
              <span className="relative z-10">👨‍💻</span>
            </div>

            <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              Building things that matter
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              I'm a Computer Science Engineering student with a strong foundation in DSA, problem-solving, and web development. I love building practical solutions and exploring AI-driven workflows.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              Active on LeetCode and CodeChef with 350+ problems solved. HackerRank Java 4-star certified. I'm also a Technical Team Member at Scope Club, MLRIT, where I help organize events and contribute to coding workshops.
            </p>

            <div className="flex flex-wrap gap-3">
              {['Python', 'Java', 'DSA', 'WordPress', 'AI Workflows'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-medium glass text-indigo-600 dark:text-indigo-300 border border-indigo-500/30"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map(({ icon: Icon, label, value }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="glass rounded-2xl p-6 hover:border-indigo-500/40 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center mb-3 group-hover:bg-indigo-500/30 transition-colors">
                  <Icon size={20} className="text-indigo-500 dark:text-indigo-400" />
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{value}</div>
                <div className="text-sm text-gray-500">{label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
