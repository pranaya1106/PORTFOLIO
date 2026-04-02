import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Github, Linkedin, Send, MapPin } from 'lucide-react'

const socials = [
  { icon: Mail, label: 'Email', value: 'pranayasri.malthum@gmail.com', href: 'mailto:pranayasri.malthum@gmail.com' },
  { icon: Github, label: 'GitHub', value: 'github.com/pranaya1106', href: 'https://github.com/pranaya1106' },
  { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/pranaya-sri-malthum', href: 'https://www.linkedin.com/in/pranaya-sri-malthum-b097a1324/' },
  { icon: MapPin, label: 'Location', value: 'India', href: null },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3000)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-indigo-500 dark:text-indigo-400 font-mono text-sm">contact</span>
          <h2 className="text-4xl font-bold mt-2 text-gray-900 dark:text-white">Get In Touch</h2>
          <p className="text-gray-500 mt-3 max-w-md mx-auto">
            Open to internships, collaborations, and interesting projects. Let's build something together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Let's talk</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Whether you have a project in mind, want to collaborate, or just want to say hi — my inbox is always open.
            </p>

            <div className="space-y-4">
              {socials.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl glass flex items-center justify-center group-hover:border-indigo-500/40 transition-colors">
                    <Icon size={18} className="text-indigo-500 dark:text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm text-gray-700 dark:text-gray-300">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm text-gray-600 dark:text-gray-400 mb-1.5">Name</label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-indigo-500/60 transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-gray-600 dark:text-gray-400 mb-1.5">Email</label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@email.com"
                  className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-indigo-500/60 transition-colors"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm text-gray-600 dark:text-gray-400 mb-1.5">Message</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project..."
                  className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-indigo-500/60 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-white font-medium transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/25"
              >
                {sent ? 'Message Sent ✓' : (<><Send size={16} /> Send Message</>)}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
