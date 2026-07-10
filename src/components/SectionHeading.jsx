import { motion } from 'framer-motion'

export function SectionHeading({ eyebrow, title, description, compact = false }) {
  return (
    <motion.div
      className={`section-heading${compact ? ' compact' : ''}`}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </motion.div>
  )
}
