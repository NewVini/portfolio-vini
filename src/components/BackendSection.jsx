import { motion } from 'framer-motion'
import { backend } from '../data/content.js'
import { SectionHeading } from './SectionHeading.jsx'
import { TiltCard } from './TiltCard.jsx'
import { CardIcon } from './icons.jsx'

export function BackendSection() {
  return (
    <section id="backend" className="inner section-pad-small">
      <SectionHeading eyebrow={backend.eyebrow} title={backend.title} />

      <div className="backend-layout">
        <p className="lede backend-copy">{backend.text}</p>

        <div className="layer-panel" aria-hidden="true">
          {backend.layers.map((layer, index) => (
            <motion.div
              className="layer-row"
              key={layer}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
            >
              <span className="layer-dot" />
              {layer}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="value-grid cols-3">
        {backend.cards.map((card, index) => (
          <TiltCard key={card.title} className="value-card is-highlight" index={index} intensity={5}>
            <span className="icon-badge">
              <CardIcon name={card.icon} />
            </span>
            <b>{card.title}</b>
            <p>{card.text}</p>
          </TiltCard>
        ))}
      </div>
    </section>
  )
}
