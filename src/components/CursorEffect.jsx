import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

// Custom cursor glow that follows the mouse
export default function CursorEffect() {
  const [pos, setPos] = useState({ x: -200, y: -200 })

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-30 hidden md:block"
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="absolute w-96 h-96 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)',
          transform: 'translate(-50%, -50%)',
          left: pos.x,
          top: pos.y,
        }}
        animate={{ left: pos.x, top: pos.y }}
        transition={{ type: 'spring', damping: 30, stiffness: 200, mass: 0.5 }}
      />
    </motion.div>
  )
}
