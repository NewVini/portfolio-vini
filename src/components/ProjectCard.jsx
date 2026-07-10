import { Check } from 'lucide-react'
import { TiltCard } from './TiltCard.jsx'

export function ProjectCard({ project, index }) {
  return (
    <TiltCard as="article" className="case-card" index={index} intensity={4}>
      <div className="case-card-head">
        <span className="case-tag">{project.company}</span>
        <span className="case-period">{project.period}</span>
      </div>
      <h3>{project.title}</h3>
      <ul className="case-points">
        {project.points.map((point) => (
          <li key={point}>
            <Check size={15} aria-hidden="true" />
            {point}
          </li>
        ))}
      </ul>
      <div className="case-stack">
        {project.stack.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>
    </TiltCard>
  )
}
