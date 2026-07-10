import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, MessageCircle } from 'lucide-react'
import { profile } from '../data/content.js'
import { Logo } from './Logo.jsx'
import { MagneticButton } from './MagneticButton.jsx'

const links = [
  ['Experiência', '#experience'],
  ['Backend', '#backend'],
  ['Mobile', '#mobile'],
  ['Cases', '#cases'],
  ['Contato', '#contact'],
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <motion.header
      className="nav-shell"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav className="nav inner">
        <Logo />

        <div className="nav-links" aria-label="Navegação principal">
          {links.map(([label, href]) => (
            <a key={label} href={href}>
              {label}
            </a>
          ))}
        </div>

        <MagneticButton href={profile.whatsapp} external className="ghost-btn nav-cta">
          <MessageCircle size={16} aria-hidden="true" /> Falar comigo
        </MagneticButton>

        <a href={profile.whatsapp} target="_blank" rel="noreferrer" className="nav-cta-mobile">
          <MessageCircle size={14} aria-hidden="true" /> Falar comigo
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <div className="mobile-menu-inner">
              {links.map(([label, href]) => (
                <a key={label} href={href} onClick={() => setOpen(false)}>
                  {label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
