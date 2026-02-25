import { useState, useEffect } from 'react'
import { useMediaQuery, isMobileQuery } from '../hooks/useMediaQuery'

const navItems = ['about', 'experience', 'projects', 'education', 'contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const isMobile = useMediaQuery(isMobileQuery)

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

  useEffect(() => { if (!isMobile) setMenuOpen(false) }, [isMobile])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) { window.scrollTo({ top: el.offsetTop - 72, behavior: 'smooth' }); setMenuOpen(false) }
  }

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: isMobile ? '1rem 5%' : '1.2rem 6%',
        background: 'rgba(255,255,255,0.92)',
        backdropFilter: 'blur(14px)',
        borderBottom: '1px solid rgba(59,130,246,0.1)',
        boxShadow: scrolled ? '0 4px 24px rgba(37,99,235,0.08)' : 'none',
        transition: 'box-shadow 0.3s',
      }}>
        <div style={{
          fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', fontWeight: 900,
          color: 'var(--blue-700)', letterSpacing: '-0.5px', cursor: 'pointer', zIndex: 101,
        }} onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setMenuOpen(false) }}>
          BC.
        </div>

        {!isMobile && (
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
        )}

        {isMobile && (
          <button onClick={() => setMenuOpen(!menuOpen)} style={{
            background: 'none', border: 'none', cursor: 'pointer',
            display: 'flex', flexDirection: 'column', gap: '5px', padding: '4px', zIndex: 101,
          }}>
            {[0,1,2].map(i => (
              <span key={i} style={{
                display: 'block', width: 24, height: 2,
                background: 'var(--blue-700)', borderRadius: 2,
                transform: menuOpen
                  ? i === 0 ? 'rotate(45deg) translate(5px, 5px)'
                  : i === 2 ? 'rotate(-45deg) translate(5px, -5px)' : 'none'
                  : 'none',
                opacity: menuOpen && i === 1 ? 0 : 1,
                transition: 'transform 0.3s, opacity 0.3s',
              }} />
            ))}
          </button>
        )}
      </nav>

      {/* Mobile full-screen drawer */}
      <div style={{
        position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 99,
        background: 'rgba(255,255,255,0.98)', backdropFilter: 'blur(20px)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '2rem',
        transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.35s cubic-bezier(0.4,0,0.2,1)',
        pointerEvents: menuOpen ? 'all' : 'none',
      }}>
        {navItems.map((id, i) => (
          <button key={id} onClick={() => scrollTo(id)} style={{
            background: 'none', border: 'none', cursor: 'pointer',
            fontSize: '1.8rem', fontWeight: 700,
            fontFamily: "'Playfair Display', serif",
            color: active === id ? 'var(--blue-600)' : 'var(--text-dark)',
            opacity: menuOpen ? 1 : 0,
            transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
            transition: `opacity 0.3s ${i * 0.06}s, transform 0.3s ${i * 0.06}s`,
          }}>
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </button>
        ))}
        <a href="mailto:cbhanu12dec@gmail.com" style={{
          marginTop: '1rem', background: 'var(--blue-600)', color: 'white',
          padding: '.75rem 2rem', borderRadius: 8,
          fontSize: '.9rem', fontWeight: 600, textDecoration: 'none',
          opacity: menuOpen ? 1 : 0, transition: 'opacity 0.3s 0.35s',
        }}>
          Get in Touch
        </a>
      </div>
    </>
  )
}
