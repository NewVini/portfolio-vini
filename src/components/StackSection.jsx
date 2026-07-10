import { motion } from 'framer-motion'
import { stackColumns } from '../data/content.js'
import { SectionHeading } from './SectionHeading.jsx'

export function StackSection() {
  return (
    <section id="stack" className="inner section-pad-small">
      <SectionHeading eyebrow="Stack" title="Ferramentas que já provaram valor em produção." compact />

      <div className="stack-columns">
        {stackColumns.map((column, index) => (
          <motion.div
            className={`stack-column${column.highlight ? ' is-backend' : ''}`}
            key={column.label}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: Math.min(index * 0.06, 0.3), duration: 0.5 }}
          >
            <h3>{column.label}</h3>
            <div className="stack-pills">
              {column.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
