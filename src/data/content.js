export const profile = {
  name: 'Vinicius Machado',
  role: 'Senior Frontend / Product Engineer',
  location: 'Brasil · Remoto',
  email: 'vinicomercial9446@gmail.com',
  phone: '+55 79 99921-0397',
  phoneHref: 'tel:+5579999210397',
  whatsapp: 'https://wa.me/5579999210397',
  linkedin: 'https://www.linkedin.com/in/vinicius-machado-142583419/',
  resumeUrl: '/Vinicius_Machado_CV_PT_Frontend_Senior.pdf',
  headline: 'Senior Frontend / Product Engineer para produtos web, mobile e APIs em escala.',
  subheadline:
    'React, Next.js, TypeScript, React Native, Flutter e Node.js aplicados em e-commerce, logística, seguros, sistemas internos e produtos B2B.',
}

export const heroBadges = [
  '7 anos de experiência',
  'Havan',
  'Creditas',
  'Ambev Tech / BEES',
  'Web + Mobile + Backend',
]

export const heroCtas = {
  primary: { label: 'Ver experiência', href: '#experience' },
  resume: { label: 'Baixar CV', href: profile.resumeUrl },
  contact: { label: 'Chamar no WhatsApp', href: profile.whatsapp },
}

export const metrics = [
  { value: '7+', label: 'anos de experiência', detail: 'web, mobile e produto' },
  { value: '7', label: 'empresas e projetos', detail: 'Havan, Creditas, BEES e mais' },
  { value: '2', label: 'plataformas mobile', detail: 'React Native e Flutter' },
]

export const heroFloatingBadges = ['React / Next.js', 'React Native / Flutter', 'Node.js / APIs']

export const companies = [
  { name: 'Havan', tag: 'Logística, lojas e centros de distribuição' },
  { name: 'OSF Digital / Creditas', tag: 'Seguros e jornada de conversão' },
  { name: 'Ambev Tech / BEES', tag: 'E-commerce B2B em escala' },
  { name: 'Generation', tag: 'Tech Lead — MVP mobile' },
  { name: 'SM Soluções', tag: 'Sistemas agrícolas web e mobile' },
  { name: 'Alfama Web', tag: 'Aplicações web multi-cliente' },
  { name: 'Via Digital', tag: 'SaaS e APIs REST' },
]

export const backend = {
  eyebrow: 'Além do frontend',
  title: 'Frontend forte. Backend suficiente para entregar produto de ponta a ponta.',
  text: 'Meu foco principal é frontend e produto, mas também atuo com Node.js, APIs, integrações, banco de dados e automações quando o produto precisa sair do papel sem depender de camadas desnecessárias.',
  layers: ['UI Layer', 'Mobile Layer', 'API Layer', 'Database Layer', 'Automation Layer'],
  cards: [
    {
      icon: 'server',
      title: 'Node.js & APIs',
      text: 'Criação e consumo de APIs REST, autenticação, integrações e serviços de apoio a produtos web/mobile.',
    },
    {
      icon: 'database',
      title: 'Banco de dados',
      text: 'Experiência com MySQL e modelagem pragmática para produtos, dashboards e sistemas internos.',
    },
    {
      icon: 'workflow',
      title: 'Integrações',
      text: 'Conexão com serviços externos, CRMs, pagamentos, webhooks e fluxos operacionais.',
    },
    {
      icon: 'zap',
      title: 'Automação',
      text: 'Uso de scripts, Playwright e ferramentas para reduzir trabalho manual e acelerar a operação.',
    },
    {
      icon: 'boxes',
      title: 'Produto ponta a ponta',
      text: 'Capacidade de entender o problema, desenhar o fluxo, construir a interface, integrar o backend e entregar o MVP.',
    },
  ],
}

export const frontend = {
  eyebrow: 'Frontend & arquitetura',
  title: 'Interfaces críticas, arquitetura escalável e experiência de produto.',
  cards: [
    { icon: 'code2', title: 'React / Next.js', text: 'Interfaces rápidas e SEO-friendly para produtos que precisam performar e converter.' },
    { icon: 'shieldCheck', title: 'TypeScript', text: 'Menos bugs em produção e mais confiança para evoluir o código em equipe.' },
    { icon: 'layers3', title: 'Design Systems', text: 'Consistência visual e velocidade de entrega em produtos com múltiplos times.' },
    { icon: 'network', title: 'Micro-frontends', text: 'Arquitetura que escala com o time sem virar gargalo técnico.' },
    { icon: 'rocket', title: 'Performance', text: 'Carregamento rápido e experiência fluida mesmo em conexões ruins.' },
    { icon: 'checkCircle', title: 'Code Review', text: 'Padrão técnico consistente e menos retrabalho em produção.' },
    { icon: 'terminal', title: 'Testes', text: 'Confiança para lançar sem quebrar o que já funciona.' },
    { icon: 'cpu', title: 'UX + Produto', text: 'Decisões de interface pensadas para conversão e clareza, não só estética.' },
  ],
}

export const mobile = {
  eyebrow: 'Mobile',
  title: 'Web e mobile no mesmo raciocínio de produto.',
  text: 'Experiência com React Native, Flutter, Kotlin e Ionic em aplicações corporativas, sistemas internos e produtos mobile em produção.',
  screens: ['Logística', 'Dashboard', 'Checkout', 'Operações'],
  cards: [
    { icon: 'smartphone', title: 'React Native', text: 'Apps multiplataforma com produtividade sem abrir mão de performance nativa.' },
    { icon: 'layers2', title: 'Flutter', text: 'UI fluida e consistente entre Android e iOS a partir de uma base única.' },
    { icon: 'terminal', title: 'Kotlin', text: 'Integrações nativas Android quando o app precisa de acesso a hardware corporativo.' },
    { icon: 'checkCircle', title: 'Publicação Android/iOS', text: 'Do build à loja: processo de publicação e manutenção de apps em produção.' },
    { icon: 'plug', title: 'Integrações nativas', text: 'Conexão com dispositivos e serviços corporativos específicos de operação.' },
    { icon: 'server', title: 'Apps internos', text: 'Ferramentas mobile para logística, operação e times de campo.' },
  ],
}

export const caseStudies = [
  {
    company: 'Havan',
    period: '2021 — 2026',
    title: 'Operação, logística e mobile corporativo',
    points: [
      'React, React Native, Flutter e Kotlin.',
      'Aplicações para lojas, logística e centros de distribuição.',
      'Componentes reutilizáveis e padrões frontend.',
      'Integrações com dispositivos corporativos.',
    ],
    stack: ['React', 'React Native', 'Flutter', 'Kotlin'],
  },
  {
    company: 'OSF Digital / Creditas',
    period: '2024 — 2025',
    title: 'Jornada de seguros e conversão',
    points: [
      'Frontend para a vertical de seguros.',
      'Jornada de compra ponta a ponta.',
      'Alto volume de geração de leads.',
      'A/B testing, code review e decisões técnicas.',
    ],
    stack: ['React', 'A/B Testing', 'Growth'],
  },
  {
    company: 'Ambev Tech / BEES',
    period: '2022 — 2024',
    title: 'E-commerce B2B em escala',
    points: [
      'Checkout, curadoria e logística.',
      'React em telas críticas de alto tráfego.',
      'Migração para uma arquitetura mais escalável.',
      'Performance, usabilidade e organização de código.',
    ],
    stack: ['React', 'Performance', 'Arquitetura Frontend'],
  },
  {
    company: 'Generation',
    period: '2024',
    title: 'MVP mobile com Flutter + APIs',
    points: [
      'Tech Lead do produto.',
      'Frontend em Flutter, APIs em Node.js.',
      'Definição de arquitetura e padrões de código.',
      'Code review e apoio técnico ao time.',
    ],
    stack: ['Flutter', 'Node.js', 'Tech Lead'],
  },
]

export const stackColumns = [
  {
    label: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Angular', 'HTML5', 'CSS/SASS', 'Design Systems', 'Micro-frontends', 'Performance'],
  },
  {
    label: 'Mobile',
    items: ['React Native', 'Flutter', 'Kotlin', 'Ionic'],
  },
  {
    label: 'Backend',
    items: ['Node.js', 'REST APIs', 'Integrações', 'Webhooks'],
    highlight: true,
  },
  {
    label: 'Data',
    items: ['MySQL'],
  },
  {
    label: 'Practices',
    items: ['Git', 'CI/CD', 'Jest', 'Scrum', 'Code Review', 'Troubleshooting'],
  },
  {
    label: 'Product',
    items: ['Arquitetura', 'Liderança técnica', 'Discovery', 'A/B Testing'],
  },
]

export const timeline = [
  {
    period: 'Abr 2025 — Fev 2026',
    company: 'Havan',
    title: 'Desenvolvedor Frontend',
    text: 'Aplicações web e mobile para logística, lojas e centros de distribuição. React, React Native, Flutter e integrações nativas com Kotlin.',
    current: true,
  },
  {
    period: 'Nov 2024 — Mar 2025',
    company: 'OSF Digital / Creditas',
    title: 'Frontend Engineer',
    text: 'Vertical de seguros: jornada de compra, conversão, geração de leads, testes A/B e decisões técnicas de frontend.',
  },
  {
    period: 'Abr 2024 — Out 2024',
    company: 'Generation',
    title: 'Tech Lead / Desenvolvedor Flutter',
    text: 'Liderança técnica do app Chute Certo, da concepção ao MVP. Flutter, APIs em Node.js, arquitetura e code review.',
  },
  {
    period: 'Ago 2022 — Mar 2024',
    company: 'Ambev Tech / BEES',
    title: 'Frontend Engineer',
    text: 'E-commerce B2B: checkout, curadoria e logística. Migração de telas para arquitetura mais escalável, com ganhos de performance.',
  },
  {
    period: 'Ago 2021 — Jul 2022',
    company: 'Havan',
    title: 'Frontend Developer',
    text: 'Criação do Design System corporativo com React e TypeScript. Componentes reutilizáveis para sistemas críticos de logística.',
  },
  {
    period: 'Abr 2021 — Ago 2021',
    company: 'SM Soluções',
    title: 'Frontend Developer',
    text: 'Sistemas agrícolas com Angular e Ionic, incluindo geolocalização offline e mapas com OpenLayers.',
  },
  {
    period: 'Fev 2020 — Abr 2021',
    company: 'Alfama Web',
    title: 'Frontend Developer',
    text: 'Aplicações web com PHP, JavaScript, jQuery e Bootstrap para clientes de diferentes segmentos.',
  },
  {
    period: 'Jan 2019 — Jan 2020',
    company: 'Via Digital',
    title: 'Desenvolvedor Júnior',
    text: 'Aplicações SaaS com Vue.js, Laravel, MySQL e APIs REST.',
  },
]

export const ctaFinal = {
  eyebrow: 'Vamos conversar',
  title: 'Precisa de alguém para entregar produto web/mobile com qualidade e velocidade?',
  text: 'Disponível para oportunidades remotas como Senior Frontend Engineer, Product Engineer, React Native Engineer ou Fullstack React/Node.',
}
