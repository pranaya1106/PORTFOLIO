import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const skillCategories = [
  {
    title: 'Programming',
    color: 'from-indigo-500 to-blue-500',
    emoji: '💻',
    skills: ['Python', 'Java', 'C', 'DSA', 'OOP', 'DBMS'],
  },
  {
    title: 'Web & Databases',
    color: 'from-purple-500 to-pink-500',
    emoji: '🌐',
    skills: ['HTML', 'CSS', 'WordPress', 'MySQL', 'Oracle SQL'],
  },
  {
    title: 'Data & Analytics',
    color: 'from-emerald-500 to-teal-500',
    emoji: '📊',
    skills: ['NumPy', 'Pandas', 'R', 'Data Visualization'],
  },
  {
    title: 'Tools & Platforms',
    color: 'from-orange-500 to-yellow-500',
    emoji: '🛠️',
    skills: ['Git', 'GitHub', 'n8n', 'Claude AI', 'Figma'],
  },
  {
    title: 'Competitive Programming',
    color: 'from-pink-500 to-rose-500',
    emoji: '🏆',
    skills: ['LeetCode', 'CodeChef (350+)', 'HackerRank Java 4★', 'Problem Solving'],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-indigo-500 dark:text-indigo-400 font-mono text-sm">skills</span>
          <h2 className="text-4xl font-bold mt-2 text-gray-900 dark:text-white">What I Work With</h2>
          <p className="text-gray-500 mt-3 max-w-md mx-auto">
            Technologies and tools I use to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="glass rounded-2xl p-5 hover:border-indigo-500/30 transition-all duration-300 group"
            >
              {/* Card header */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-lg`}>
                  {cat.emoji}
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white">{cat.title}</h3>
              </div>

              {/* Skill tags */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: catIdx * 0.1 + i * 0.05 }}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/10 hover:border-indigo-500/40 hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Certifications card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: skillCategories.length * 0.1 }}
            className="glass rounded-2xl p-5 hover:border-indigo-500/30 transition-all duration-300 sm:col-span-2 lg:col-span-1"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-lg">
                🎓
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white">Certifications</h3>
            </div>
            <div className="flex flex-col gap-2">
              {[
                { name: 'Python Essentials', org: 'Cisco' },
                { name: 'Joy of Computing using Python', org: 'NPTEL' },
              ].map((cert) => (
                <div key={cert.name} className="flex items-center justify-between px-3 py-2 rounded-lg bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10">
                  <span className="text-xs font-medium text-gray-700 dark:text-gray-300">{cert.name}</span>
                  <span className="text-xs text-indigo-600 dark:text-indigo-400 font-mono">{cert.org}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
