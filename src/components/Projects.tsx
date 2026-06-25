import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { projects } from '../data/projects'

export default function Projects() {
  const ref = useScrollReveal<HTMLDivElement>()

  return (
    <section id="projects" style={{ padding: '7rem 4rem' }}>
      <div ref={ref} style={{ maxWidth: '900px', margin: '0 auto' }}>
        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '13px',
          color: 'var(--color-accent)',
          marginBottom: '1rem',
          letterSpacing: '0.1em',
        }}>
          03. Projects
        </p>
        <h2 style={{
          fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
          fontWeight: 700,
          color: 'var(--color-text)',
          marginBottom: '3rem',
        }}>
          Що я будував
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: typeof projects[number] }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: 'var(--color-surface)',
        border: `1px solid ${hovered ? 'var(--color-accent-dim)' : 'var(--color-border)'}`,
        borderRadius: '10px',
        padding: '1.75rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        transition: 'border-color 0.25s, transform 0.25s',
        transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
        cursor: 'default',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <h3 style={{ color: 'var(--color-text)', fontWeight: 700, fontSize: '1.1rem' }}>
          {project.title}
        </h3>
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              style={{ color: 'var(--color-muted)', fontSize: '13px', fontFamily: 'var(--font-mono)', textDecoration: 'none' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-text)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-muted)'}
            >
              GitHub ↗
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer"
              style={{ color: 'var(--color-muted)', fontSize: '13px', fontFamily: 'var(--font-mono)', textDecoration: 'none' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-accent)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-muted)'}
            >
              Live ↗
            </a>
          )}
        </div>
      </div>

      <p style={{ color: 'var(--color-muted)', fontSize: '14px', lineHeight: 1.7 }}>
        {project.description}
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: 'auto' }}>
        {project.stack.map((tech) => (
          <span key={tech} style={{
            padding: '3px 10px',
            borderRadius: '4px',
            fontSize: '12px',
            fontFamily: 'var(--font-mono)',
            backgroundColor: 'rgba(124,106,255,0.1)',
            color: 'var(--color-accent)',
            border: '1px solid rgba(124,106,255,0.2)',
          }}>
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}
