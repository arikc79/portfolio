import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  const cursorRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = cursorRef.current
    if (!el) return
    const interval = setInterval(() => {
      el.style.opacity = el.style.opacity === '0' ? '1' : '0'
    }, 530)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        alignItems: 'center',
        padding: '0 4rem',
        gap: '2rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{
        position: 'absolute',
        top: '-20%',
        right: '-10%',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(124,106,255,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '13px',
          color: 'var(--color-accent)',
          marginBottom: '1.5rem',
          letterSpacing: '0.1em',
        }}>
          Junior Full-Stack Developer
        </p>

        <h1 style={{
          fontSize: 'clamp(3rem, 6vw, 5rem)',
          fontWeight: 800,
          lineHeight: 1.05,
          letterSpacing: '-0.03em',
          color: 'var(--color-text)',
          marginBottom: '1.5rem',
        }}>
          <span style={{ color: 'var(--color-accent)' }}>Тарас</span>
          <span ref={cursorRef} style={{ color: 'var(--color-accent)', transition: 'opacity 0.1s' }}>_</span>
        </h1>

        <p style={{
          fontSize: '1.05rem',
          color: 'var(--color-muted)',
          lineHeight: 1.75,
          maxWidth: '440px',
          marginBottom: '2.5rem',
        }}>
          Будую від архітектури до продакшну — backend на Python/Django і C#/.NET,
          frontend на React і Vue.js. Самостійно доводжу проект до деплою.
        </p>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a
            href="#projects"
            style={{
              padding: '0.75rem 1.75rem',
              backgroundColor: 'var(--color-accent)',
              color: '#fff',
              textDecoration: 'none',
              borderRadius: '6px',
              fontWeight: 600,
              fontSize: '15px',
              transition: 'opacity 0.2s, transform 0.2s',
              display: 'inline-block',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.85'; e.currentTarget.style.transform = 'translateY(-1px)' }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)' }}
          >
            Мої проекти
          </a>
          <a
            href="#contact"
            style={{
              padding: '0.75rem 1.75rem',
              border: '1px solid var(--color-border)',
              color: 'var(--color-text)',
              textDecoration: 'none',
              borderRadius: '6px',
              fontWeight: 600,
              fontSize: '15px',
              transition: 'border-color 0.2s, transform 0.2s',
              display: 'inline-block',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--color-accent)'; e.currentTarget.style.transform = 'translateY(-1px)' }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--color-border)'; e.currentTarget.style.transform = 'translateY(0)' }}
          >
            Зв'язатись
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
        style={{
          backgroundColor: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
          borderRadius: '12px',
          padding: '2rem',
          fontFamily: 'var(--font-mono)',
          fontSize: '13px',
          lineHeight: 1.8,
          color: 'var(--color-muted)',
        }}
      >
        <div style={{ color: 'var(--color-border)', marginBottom: '1rem', fontSize: '12px' }}>// stack.ts</div>
        <div><span style={{ color: '#e879f9' }}>const</span> <span style={{ color: '#7c6aff' }}>stack</span> <span style={{ color: '#94a3b8' }}>=</span> {'{'}</div>
        <div style={{ paddingLeft: '1.5rem' }}>
          <div><span style={{ color: '#34d399' }}>backend</span>: [<span style={{ color: '#fbbf24' }}>'Python'</span>, <span style={{ color: '#fbbf24' }}>'Django'</span>, <span style={{ color: '#fbbf24' }}>'C#'</span>],</div>
          <div><span style={{ color: '#34d399' }}>frontend</span>: [<span style={{ color: '#fbbf24' }}>'React'</span>, <span style={{ color: '#fbbf24' }}>'Vue.js'</span>, <span style={{ color: '#fbbf24' }}>'TypeScript'</span>],</div>
          <div><span style={{ color: '#34d399' }}>database</span>: [<span style={{ color: '#fbbf24' }}>'PostgreSQL'</span>, <span style={{ color: '#fbbf24' }}>'MSSQL'</span>],</div>
          <div><span style={{ color: '#34d399' }}>deploy</span>: [<span style={{ color: '#fbbf24' }}>'Render'</span>, <span style={{ color: '#fbbf24' }}>'Vercel'</span>, <span style={{ color: '#fbbf24' }}>'Azure'</span>],</div>
          <div><span style={{ color: '#34d399' }}>coffee</span>: <span style={{ color: '#f87171' }}>Infinity</span>,</div>
        </div>
        <div>{'}'}</div>
        <div style={{ marginTop: '1rem' }}>
          <span style={{ color: '#e879f9' }}>export default</span> stack
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          color: 'var(--color-muted)',
          fontSize: '12px',
          fontFamily: 'var(--font-mono)',
        }}
      >
        scroll
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          style={{ width: '1px', height: '32px', backgroundColor: 'var(--color-border)' }}
        />
      </motion.div>
    </section>
  )
}
