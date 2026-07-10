import { motion } from 'framer-motion'
import { Download, Mail, MessageCircle } from 'lucide-react'
import { profile, ctaFinal } from '../data/content.js'
import { MagneticButton } from './MagneticButton.jsx'
import { LinkedInIcon } from './icons.jsx'

export function ContactCTA() {
  return (
    <section id="contact" className="inner section-pad-small">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="cta-section">
          <span className="eyebrow-tag">{ctaFinal.eyebrow}</span>
          <h2>{ctaFinal.title}</h2>
          <p>{ctaFinal.text}</p>

          <div className="cta-actions">
            <MagneticButton href={`mailto:${profile.email}`} className="primary-btn">
              <Mail size={17} aria-hidden="true" /> Enviar email
            </MagneticButton>
            <MagneticButton href={profile.whatsapp} external className="ghost-btn">
              <MessageCircle size={17} aria-hidden="true" /> WhatsApp
            </MagneticButton>
            <MagneticButton href={profile.linkedin} external className="ghost-btn" ariaLabel="Abrir perfil no LinkedIn">
              <LinkedInIcon size={16} /> LinkedIn
            </MagneticButton>
            <MagneticButton href={profile.resumeUrl} download className="ghost-btn">
              <Download size={17} aria-hidden="true" /> Baixar CV
            </MagneticButton>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
