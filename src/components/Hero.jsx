import { motion } from 'framer-motion'
import { ArrowRight, Download, MessageCircle } from 'lucide-react'
import { profile, heroBadges, heroCtas, metrics } from '../data/content.js'
import { Macbook3D } from './Macbook3D.jsx'
import { Phone3D } from './Phone3D.jsx'
import { MagneticButton } from './MagneticButton.jsx'

export function Hero() {
  return (
    <section id="top" className="hero inner section-pad">
      <div className="hero-copy">
        <motion.div
          className="eyebrow"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span /> {profile.name} · Disponível para novas oportunidades
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="accent-text">Senior Frontend / Product Engineer</span> para produtos web, mobile e APIs em escala.
        </motion.h1>

        <motion.p
          className="lede"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.16, duration: 0.75 }}
        >
          {profile.subheadline}
        </motion.p>

        <motion.div
          className="hero-badges"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.24, duration: 0.6 }}
        >
          {heroBadges.map((badge) => (
            <span className="hero-badge" key={badge}>{badge}</span>
          ))}
        </motion.div>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.32 }}
        >
          <MagneticButton href={heroCtas.primary.href} className="primary-btn">
            {heroCtas.primary.label} <ArrowRight size={17} aria-hidden="true" />
          </MagneticButton>
          <MagneticButton href={heroCtas.resume.href} className="ghost-btn" download>
            <Download size={16} aria-hidden="true" /> {heroCtas.resume.label}
          </MagneticButton>
          <MagneticButton href={heroCtas.contact.href} external className="ghost-btn">
            <MessageCircle size={16} aria-hidden="true" /> {heroCtas.contact.label}
          </MagneticButton>
        </motion.div>

        <motion.div
          className="metric-row"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {metrics.map((item) => (
            <div className="metric" key={item.label}>
              <b>{item.value}</b>
              <span>{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="hero-visual" aria-label="Mockups de produto: dashboard web e apps mobile">
        <Macbook3D />
        <Phone3D variant="chart" className="hero-phone one" delay={0.25} />
        <Phone3D variant="shoe" className="hero-phone two" delay={0.38} />
        <motion.div
          className="code-card"
          initial={{ opacity: 0, x: 60, y: 24 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: 0.55, duration: 0.8 }}
        >
          <pre>{`const engineer = {\n  frontend: 'core',\n  backend: 'pragmático',\n  mission: 'produto em escala'\n}`}</pre>
        </motion.div>
      </div>
    </section>
  )
}
