import { motion } from 'framer-motion'
import { timeline } from '../data/content.js'
import { SectionHeading } from './SectionHeading.jsx'

export function Timeline() {
  return (
    <section id="experience" className="inner section-pad-small">
      <SectionHeading eyebrow="Experiência" title="Trajetória com empresas, escala e entrega." compact />

      <ol className="timeline">
        {timeline.map((item, index) => (
          <motion.li
            className={`timeline-item${item.current ? ' is-current' : ''}`}
            key={item.period + item.company}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: Math.min(index * 0.05, 0.35) }}
          >
            <time>{item.period}{item.current ? ' · Atual' : ''}</time>
            <h3>{item.title}</h3>
            <span className="timeline-company">{item.company}</span>
            <p>{item.text}</p>
          </motion.li>
        ))}
      </ol>
    </section>
  )
}
