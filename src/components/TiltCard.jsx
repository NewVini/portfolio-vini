import { motion } from 'framer-motion'
import { useMouseTilt } from '../hooks/useMouseTilt.js'

export function TiltCard({ as: Tag = 'div', className = '', intensity = 6, children, index = 0, ...rest }) {
  const tilt = useMouseTilt(intensity)
  const MotionTag = motion[Tag] ?? motion.div

  return (
    <MotionTag
      className={`tilt-card ${className}`}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: Math.min(index * 0.08, 0.4), ease: [0.16, 1, 0.3, 1] }}
      {...tilt}
      style={tilt.style}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}
