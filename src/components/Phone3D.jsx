import { motion } from 'framer-motion'
import { useMouseTilt } from '../hooks/useMouseTilt.js'

export function Phone3D({ variant = 'chart', className = '', delay = 0 }) {
  const tilt = useMouseTilt(14)

  return (
    <motion.div
      className={`phone3d ${className}`}
      initial={{ opacity: 0, y: 50, rotateZ: variant === 'shoe' ? 10 : -8 }}
      whileInView={{ opacity: 1, y: 0, rotateZ: variant === 'shoe' ? 10 : -8 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ delay, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      {...tilt}
      style={tilt.style}
    >
      <div className="phone-float" style={{ animationDelay: `${-delay * 3}s` }}>
        <div className="phone-body">
          <div className="phone-bezel">
            <div className="phone-notch" />
            {variant === 'chart' ? <PhoneChartScreen /> : <PhoneCommerceScreen />}
          </div>
        </div>
        <div className="phone-side phone-side-a" />
        <div className="phone-side phone-side-b" />
      </div>
    </motion.div>
  )
}

function PhoneChartScreen() {
  return (
    <div className="phone-screen chart-screen">
      <div className="screen-header"><span>Receita</span><b>•••</b></div>
      <h3>R$ 12.430,00</h3>
      <p>+14.2% vs mês anterior</p>
      <div className="bars">
        {[32, 54, 42, 72, 62, 94, 108].map((h, i) => <i key={i} style={{ height: h }} />)}
      </div>
      <div className="mini-list">
        <span>Plataforma Web <b>R$ 4.580,00</b></span>
        <span>Mobile Banking <b>R$ 2.340,00</b></span>
        <span>Dashboard Admin <b>R$ 2.870,00</b></span>
      </div>
    </div>
  )
}

function PhoneCommerceScreen() {
  return (
    <div className="phone-screen commerce-screen">
      <div className="screen-header"><span>Produto</span><b>♡</b></div>
      <div className="shoe-art">
        <div className="shoe sole" />
        <div className="shoe body" />
        <div className="shoe lace" />
      </div>
      <h3>Sneakers Pro</h3>
      <p>Performance, escala e UX premium</p>
      <strong>R$ 379,90</strong>
      <button>Adicionar ao carrinho</button>
    </div>
  )
}
