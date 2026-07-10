import { motion } from 'framer-motion'
import { companies } from '../data/content.js'

export function CompanyStrip() {
  return (
    <section className="inner company-strip" aria-label="Empresas onde Vinicius atuou">
      <p className="strip-label">
        Experiência em produtos para <span>empresas e operações de escala</span>
      </p>
      <div className="company-grid">
        {companies.map((company, index) => (
          <motion.div
            className="company-card"
            key={company.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: Math.min(index * 0.06, 0.3), duration: 0.55 }}
          >
            <b>{company.name}</b>
            <span>{company.tag}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
