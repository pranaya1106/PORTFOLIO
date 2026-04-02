import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { BookOpen, Code2, Trophy, Users } from 'lucide-react'

const timeline = [
  {
    year: '2025',
    title: 'Technical Team Member',
    org: 'Scope Club – MLRIT',
    description: 'Assisted in organizing technical events and contributed to workshops and coding sessions for students.',
    icon: Users,
    color: 'text-indigo-500 dark:text-indigo-400',
    bg: 'bg-indigo-500/20',
  },
  {
    year: '2024',
    title: 'Hackathon Project',
    org: 'Hospital Resource Forecasting',
    description: 'Built an AI-powered agent to forecast hospital resource demand using n8n and Python during a competitive hackathon.',
    icon: Trophy,
    color: 'text-yellow-500 dark:text-yellow-400',
    bg: 'bg-yellow-500/20',
  },
  {
    year: '2024',
    title: 'Certifications Earned',
    org: 'Cisco & NPTEL',
    description: 'Completed Python Essentials (Cisco) and The Joy of Computing using Python (NPTEL). Strengthened core Python skills.',
    icon: BookOpen,
    color: 'text-emerald-500 dark:text-emerald-400',
    bg: 'bg-emerald-500/20',
  },
  {
    year: '2023',
    title: 'Started B.Tech CSE',
    org: 'MLR Institute of Technology',
    description: 'Began Computer Science journey. Focused on DSA, OOP, DBMS, and web development. Active on CodeChef (350+ problems) and HackerRank (Java 4★).',
    icon: Code2,
    color: 'text-purple-500 dark:text-purple-400',
    bg: 'bg-purple-500/20',
  },
]

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="section-padding">
      <div className="max-w-3xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-indigo-500 dark:text-indigo-400 font-mono text-sm">experience</span>
          <h2 className="text-4xl font-bold mt-2 text-gray-900 dark:text-white">My Journey</h2>
          <p className="text-gray-500 mt-3">How I got here and what I've learned along the way.</p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-purple-500/30 to-transparent" />

          <div className="space-y-8">
            {timeline.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="relative flex gap-6"
                >
                  <div className={`relative z-10 flex-shrink-0 w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center border border-white/10`}>
                    <Icon size={20} className={item.color} />
                  </div>

                  <div className="glass rounded-2xl p-5 flex-1 hover:border-indigo-500/30 transition-all duration-300">
                    <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                        <p className="text-sm text-indigo-600 dark:text-indigo-400">{item.org}</p>
                      </div>
                      <span className="text-xs font-mono text-gray-500 glass px-2 py-1 rounded-lg">
                        {item.year}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
