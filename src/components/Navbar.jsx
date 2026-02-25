import { useState, useEffect } from 'react'

const navItems = ['about', 'experience', 'projects', 'education', 'contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30)
      let cur = ''
      navItems.forEach(id => {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 100) cur = id
      })
      setActive(cur)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: 'smooth' })
  }

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '1.2rem 6%',
      background: 'rgba(255,255,255,0.88)',
      backdropFilter: 'blur(14px)',
      borderBottom: '1px solid rgba(59,130,246,0.1)',
      boxShadow: scrolled ? '0 4px 24px rgba(37,99,235,0.08)' : 'none',
      transition: 'box-shadow 0.3s',
    }}>
      <div style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: '1.5rem', fontWeight: 900,
        color: 'var(--blue-700)', letterSpacing: '-0.5px',
        cursor: 'pointer'
      }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        BC.
      </div>
      <ul style={{ display: 'flex', gap: '2.4rem', listStyle: 'none' }}>
        {navItems.map(id => (
          <li key={id}>
            <button onClick={() => scrollTo(id)} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontSize: '.88rem', fontWeight: active === id ? 600 : 500,
              color: active === id ? 'var(--blue-600)' : 'var(--text-mid)',
              letterSpacing: '.4px', textTransform: 'capitalize',
              transition: 'color .2s', fontFamily: "'DM Sans', sans-serif",
            }}>
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
