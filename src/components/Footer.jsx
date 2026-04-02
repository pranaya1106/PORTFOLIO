import { Github, Linkedin, Mail, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-white/5 py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500 flex items-center gap-1.5">
          Built with <Heart size={13} className="text-red-400 fill-red-400" /> by{' '}
          <span className="text-gray-700 dark:text-gray-400">Pranaya Sri Malthum</span>
        </p>

        <div className="flex items-center gap-4">
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
              className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>

        <p className="text-xs text-gray-400 font-mono">© 2025 Pranaya Sri Malthum</p>
      </div>
    </footer>
  )
}
