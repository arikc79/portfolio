import { useScrollReveal } from '../hooks/useScrollReveal'

const links = [
  { label: 'GitHub', href: 'https://github.com/arikc79', mono: 'github.com/arikc79' },
  { label: 'Telegram', href: 'https://t.me/arikc5', mono: '@arikc5' },
  { label: 'WhatsApp', href: 'https://wa.me/380974103616', mono: '+38 097 410 3616' },
  { label: 'Email', href: 'mailto:arikcarikc5@gmail.com', mono: 'arikcarikc5@gmail.com' },
]

export default function Contact() {
  const ref = useScrollReveal<HTMLDivElement>()

  return (
    <section id="contact" className="section-padding" style={{
      backgroundColor: 'var(--color-surface)',
      borderTop: '1px solid var(--color-border)',
    }}>
      <div ref={ref} style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{
          fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
          fontWeight: 700,
          color: 'var(--color-text)',
          marginBottom: '1.5rem',
        }}>
          Давай поговоримо
        </h2>
        <p style={{ color: 'var(--color-muted)', lineHeight: 1.7, marginBottom: '3rem' }}>
          Шукаю Junior позицію — backend, frontend або full-stack.
          Маєш пропозицію або питання? Пиши, я завжди відповідаю.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.5rem',
                padding: '1rem 2rem',
                border: '1px solid var(--color-border)',
                borderRadius: '8px',
                textDecoration: 'none',
                width: '100%',
                maxWidth: '420px',
                transition: 'border-color 0.2s, background 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-accent)'
                e.currentTarget.style.background = 'rgba(124,106,255,0.05)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-border)'
                e.currentTarget.style.background = 'transparent'
              }}
            >
              <span style={{ color: 'var(--color-muted)', fontSize: '13px', width: '70px', textAlign: 'left', flexShrink: 0 }}>
                {l.label}
              </span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--color-text)' }}>
                {l.mono}
              </span>
            </a>
          ))}
        </div>

        <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <span style={{
            padding: '4px 12px', borderRadius: '20px', fontSize: '12px',
            fontFamily: 'var(--font-mono)',
            backgroundColor: 'rgba(52,211,153,0.1)',
            color: '#34d399',
            border: '1px solid rgba(52,211,153,0.2)',
          }}>
            ● open to work
          </span>
          <span style={{
            padding: '4px 12px', borderRadius: '20px', fontSize: '12px',
            fontFamily: 'var(--font-mono)',
            backgroundColor: 'rgba(124,106,255,0.1)',
            color: 'var(--color-accent)',
            border: '1px solid rgba(124,106,255,0.2)',
          }}>
            Вінниця, Україна
          </span>
        </div>
      </div>

      <p style={{
        textAlign: 'center', marginTop: '5rem',
        fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--color-muted)',
      }}>
        Тарас Арапов · Built with React + Vite · {new Date().getFullYear()}
      </p>
    </section>
  )
}
