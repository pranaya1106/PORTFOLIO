import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from 'lucide-react'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: 'easeOut' },
})

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden section-padding"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(99,102,241,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.15) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto text-center">
        <motion.div {...fadeUp(0.1)} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-indigo-600 dark:text-indigo-300 mb-8">
          <Sparkles size={14} className="text-indigo-500 dark:text-indigo-400" />
          Available for Internships &amp; Freelance
        </motion.div>

        <motion.h1 {...fadeUp(0.2)} className="text-5xl sm:text-7xl font-bold tracking-tight mb-4 text-gray-900 dark:text-white">
          Hi, I'm{' '}
          <span className="gradient-text">Pranaya Sri Malthum</span>
        </motion.h1>

        <motion.p {...fadeUp(0.35)} className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 font-light mb-6">
          CSE Student &amp; Aspiring{' '}
          <span className="text-indigo-600 dark:text-indigo-400 font-medium">Software Developer</span>
        </motion.p>

        <motion.p {...fadeUp(0.45)} className="text-gray-500 dark:text-gray-500 max-w-xl mx-auto mb-10 leading-relaxed">
          I build fast, accessible web apps and explore AI-driven solutions. Passionate about clean code, great UX, and solving real-world problems.
        </motion.p>

        <motion.div {...fadeUp(0.55)} className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <a
            href="#projects"
            className="px-6 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-white font-medium transition-all duration-200 hover:shadow-xl hover:shadow-indigo-500/30 hover:-translate-y-0.5"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl glass text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium transition-all duration-200 hover:-translate-y-0.5"
          >
            Contact Me
          </a>
        </motion.div>

        <motion.div {...fadeUp(0.65)} className="flex items-center justify-center gap-4">
          {[
            { icon: Github, href: 'https://github.com/pranaya1106', label: 'GitHub' },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/pranaya-sri-malthum-b097a1324/', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:pranayasri.malthum@gmail.com', label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-3 rounded-xl glass text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-200 hover:-translate-y-0.5"
            >
              <Icon size={20} />
            </a>
          ))}
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1.2, duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 dark:text-gray-600 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
        aria-label="Scroll down"
      >
        <ArrowDown size={24} />
      </motion.a>
    </section>
  )
}
