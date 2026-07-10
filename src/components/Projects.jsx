import { caseStudies } from '../data/content.js'
import { SectionHeading } from './SectionHeading.jsx'
import { ProjectCard } from './ProjectCard.jsx'

export function Projects() {
  return (
    <section id="cases" className="inner section-pad-small">
      <SectionHeading
        eyebrow="Cases"
        title="Produtos reais, com escala e responsabilidade técnica."
        description="Contexto, papel e stack de cada frente — pensado para um recrutador entender rápido."
      />
      <div className="case-grid">
        {caseStudies.map((project, index) => (
          <ProjectCard key={project.company + project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}
