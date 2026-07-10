import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

export function MagneticButton({ href, className = '', children, strength = 10, external = false, ariaLabel, ...rest }) {
  const ref = useRef(null)
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  function handleMove(event) {
    if (!ref.current || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
    const rect = ref.current.getBoundingClientRect()
    const relX = (event.clientX - rect.left - rect.width / 2) / rect.width
    const relY = (event.clientY - rect.top - rect.height / 2) / rect.height
    setOffset({ x: relX * strength, y: relY * strength })
  }

  function handleLeave() {
    setOffset({ x: 0, y: 0 })
  }

  const Component = href ? motion.a : motion.button
  const linkProps = href ? { href, ...(external ? { target: '_blank', rel: 'noreferrer' } : {}) } : { type: 'button' }

  return (
    <Component
      ref={ref}
      className={`magnetic-btn ${className}`}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: 'spring', stiffness: 260, damping: 20, mass: 0.5 }}
      aria-label={ariaLabel}
      {...linkProps}
      {...rest}
    >
      {children}
    </Component>
  )
}
