import { mobile } from '../data/content.js'
import { Phone3D } from './Phone3D.jsx'
import { SectionHeading } from './SectionHeading.jsx'
import { TiltCard } from './TiltCard.jsx'
import { CardIcon } from './icons.jsx'

export function MobileShowcase() {
  return (
    <section id="mobile" className="inner section-pad-small">
      <SectionHeading eyebrow={mobile.eyebrow} title={mobile.title} compact />

      <div className="mobile-layout">
        <div className="mobile-visual">
          <div className="platform-ring" />
          <Phone3D variant="chart" className="showcase-phone left" />
          <Phone3D variant="shoe" className="showcase-phone right" delay={0.1} />
        </div>

        <div className="mobile-copy">
          <p className="lede">{mobile.text}</p>

          <div className="value-grid">
            {mobile.cards.map((card, index) => (
              <TiltCard key={card.title} className="value-card" index={index} intensity={4}>
                <span className="icon-badge">
                  <CardIcon name={card.icon} size={18} />
                </span>
                <b>{card.title}</b>
                <p>{card.text}</p>
              </TiltCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
