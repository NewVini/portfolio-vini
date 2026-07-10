import { frontend } from '../data/content.js'
import { SectionHeading } from './SectionHeading.jsx'
import { TiltCard } from './TiltCard.jsx'
import { CardIcon } from './icons.jsx'

export function FrontendSection() {
  return (
    <section id="frontend" className="inner section-pad-small">
      <SectionHeading eyebrow={frontend.eyebrow} title={frontend.title} compact />

      <div className="value-grid cols-4">
        {frontend.cards.map((card, index) => (
          <TiltCard key={card.title} className="value-card" index={index} intensity={5}>
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
