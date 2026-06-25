import { useScrollReveal } from '../hooks/useScrollReveal'

const categories = [
  {
    name: 'Backend',
    items: ['Python', 'Django', 'Django REST Framework', 'C#', 'ASP.NET Core'],
  },
  {
    name: 'Frontend',
    items: ['React', 'Vue.js', 'TypeScript', 'JavaScript', 'Vite', 'HTML/CSS'],
  },
  {
    name: 'Бази даних',
    items: ['PostgreSQL', 'Supabase', 'MS SQL Server', 'Entity Framework'],
  },
  {
    name: 'ML / AI',
    items: ['Microsoft.ML', 'Azure Custom Vision', 'scikit-learn', 'Pandas', 'AutoML'],
  },
  {
    name: 'Деплой / Cloud',
    items: ['Render', 'Vercel', 'Railway', 'Microsoft Azure'],
  },
  {
    name: 'Інструменти',
    items: ['Git', 'Docker (basics)', 'Swagger / OpenAPI', 'Make.com', 'ESLint'],
  },
]

export default function Skills() {
  const ref = useScrollReveal<HTMLDivElement>()

  return (
    <section id="skills" style={{
      padding: '7rem 4rem',
      backgroundColor: 'var(--color-surface)',
      borderTop: '1px solid var(--color-border)',
      borderBottom: '1px solid var(--color-border)',
    }}>
      <div ref={ref} style={{ maxWidth: '900px', margin: '0 auto' }}>
        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '13px',
          color: 'var(--color-accent)',
          marginBottom: '1rem',
          letterSpacing: '0.1em',
        }}>
          02. Skills
        </p>
        <h2 style={{
          fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
          fontWeight: 700,
          color: 'var(--color-text)',
          marginBottom: '3rem',
        }}>
          Що я використовую
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2.5rem' }}>
          {categories.map((cat) => (
            <div key={cat.name}>
              <h3 style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
                color: 'var(--color-accent)',
                letterSpacing: '0.1em',
                marginBottom: '1.25rem',
                textTransform: 'uppercase',
              }}>
                {cat.name}
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {cat.items.map((item) => (
                  <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--color-text)', fontSize: '14px' }}>
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'var(--color-accent)', flexShrink: 0 }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
