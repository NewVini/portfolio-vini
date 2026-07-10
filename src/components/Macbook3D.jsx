import { motion } from 'framer-motion'
import { useMouseTilt } from '../hooks/useMouseTilt.js'

const lineData = [44, 62, 52, 74, 68, 91, 82, 105, 98, 128, 118]

export function Macbook3D() {
  const tilt = useMouseTilt(8)

  return (
    <motion.div
      className="device-stage mac-stage"
      initial={{ opacity: 0, scale: 0.94, rotateX: 12 }}
      animate={{ opacity: 1, scale: 1, rotateX: 0 }}
      transition={{ delay: 0.15, duration: 1, ease: [0.16, 1, 0.3, 1] }}
      {...tilt}
      style={tilt.style}
    >
      <div className="mac-float">
      <div className="mac-float-inner">
        <div className="orbit orbit-a" />
        <div className="orbit orbit-b" />
        <div className="floating-chip chip-react">React</div>
        <div className="floating-chip chip-ts">TypeScript</div>
        <div className="floating-chip chip-next">Next.js</div>

        <div className="macbook">
          <div className="screen-frame">
            <div className="screen-glass">
              <div className="dash-topbar">
                <div className="mini-logo">VM</div>
                <div className="search-pill">Buscar produto, lead, pedido...</div>
                <div className="top-actions"><span /><span /><span /></div>
              </div>

              <div className="dashboard-grid">
                <aside className="sidebar">
                  {['Dashboard', 'Pedidos', 'Clientes', 'Logística', 'Financeiro'].map((item, index) => (
                    <div className={index === 0 ? 'active side-item' : 'side-item'} key={item}>
                      <span /> {item}
                    </div>
                  ))}
                </aside>

                <main className="dashboard-main">
                  <div className="dash-title-row">
                    <div>
                      <small>Visão geral</small>
                      <strong>Produto em escala</strong>
                    </div>
                    <span>Últimos 30 dias</span>
                  </div>

                  <div className="metric-cards">
                    <div><small>Receita</small><b>R$ 8.76M</b><em>+24.8%</em></div>
                    <div><small>Usuários</small><b>24.329</b><em>+18.7%</em></div>
                    <div><small>Conversão</small><b>3,48%</b><em>+6.3%</em></div>
                  </div>

                  <div className="chart-card">
                    <svg viewBox="0 0 420 160" role="img" aria-label="Gráfico de crescimento">
                      <defs>
                        <linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1">
                          <stop stopColor="#4f8cff" stopOpacity="0.6" />
                          <stop offset="1" stopColor="#4f8cff" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <polyline points={lineData.map((v, i) => `${i * 41},${150 - v}`).join(' ')} className="chart-line" />
                      <polygon points={`0,160 ${lineData.map((v, i) => `${i * 41},${150 - v}`).join(' ')} 410,160`} fill="url(#chartFill)" />
                      {lineData.map((v, i) => <circle key={i} cx={i * 41} cy={150 - v} r="4" />)}
                    </svg>
                    <div className="tooltip-card">R$ 8.76M<br /><span>+24.8%</span></div>
                  </div>
                </main>
              </div>
            </div>
          </div>
          <div className="mac-base">
            <div className="notch" />
          </div>
          <div className="mac-shadow" />
        </div>
      </div>
      </div>
    </motion.div>
  )
}
