import { useState, useEffect } from 'react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: '0 2rem',
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: scrolled ? 'rgba(10,10,15,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--color-border)' : '1px solid transparent',
        transition: 'all 0.3s ease',
      }}
    >
      <a href="#" style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-accent)', fontSize: '14px', textDecoration: 'none' }}>
        taras.dev
      </a>

      <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none' }}>
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              style={{
                color: 'var(--color-muted)',
                textDecoration: 'none',
                fontSize: '14px',
                fontFamily: 'var(--font-mono)',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-text)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-muted)')}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
