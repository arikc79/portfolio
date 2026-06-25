import { useScrollReveal } from '../hooks/useScrollReveal'

export default function About() {
  const ref = useScrollReveal<HTMLDivElement>()

  return (
    <section id="about" style={{ padding: '7rem 4rem' }}>
      <div ref={ref} style={{ maxWidth: '900px', margin: '0 auto' }}>
        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '13px',
          color: 'var(--color-accent)',
          marginBottom: '1rem',
          letterSpacing: '0.1em',
        }}>
          01. About
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <div>
            <h2 style={{
              fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
              fontWeight: 700,
              color: 'var(--color-text)',
              marginBottom: '1.5rem',
              lineHeight: 1.2,
            }}>
              Привіт, я Тарас.
            </h2>
            <p style={{ color: 'var(--color-muted)', lineHeight: 1.8, marginBottom: '1rem' }}>
              Junior Full-Stack Developer із Вінниці. Маю вищу освіту за спеціальністю
              "Інженер-програміст" (ВНТУ) та додаткову підготовку в ІТ-академії STeP.
            </p>
            <p style={{ color: 'var(--color-muted)', lineHeight: 1.8, marginBottom: '1rem' }}>
              Пишу backend на Python/Django і C#/.NET, frontend — React і Vue.js.
              Вмію самостійно довести проект від архітектури до продакшну.
            </p>
            <p style={{ color: 'var(--color-muted)', lineHeight: 1.8 }}>
              Відкритий до Junior-позицій: backend, frontend або full-stack.
              Швидко навчаюсь, орієнтований на результат, готовий до code review.
            </p>
          </div>

          <div style={{
            aspectRatio: '1',
            maxWidth: '320px',
            margin: '0 auto',
            background: 'linear-gradient(135deg, var(--color-surface), var(--color-border))',
            borderRadius: '12px',
            border: '1px solid var(--color-border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--color-muted)',
            fontFamily: 'var(--font-mono)',
            fontSize: '13px',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute',
              top: 0, left: 0, right: 0, bottom: 0,
              background: 'radial-gradient(circle at 30% 30%, rgba(124,106,255,0.15), transparent 60%)',
            }} />
            <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', lineHeight: 2 }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>👨‍💻</div>
              <div>Вінниця, Україна</div>
              <div style={{ color: 'var(--color-accent)', marginTop: '0.25rem' }}>open to work</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
