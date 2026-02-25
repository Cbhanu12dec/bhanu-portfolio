const links = [
  { href: 'mailto:cbhanu12dec@gmail.com', label: '📧 cbhanu12dec@gmail.com' },
  { href: 'https://linkedin.com/in/bhanu-cheryala', label: '💼 LinkedIn', target: '_blank' },
  { href: 'https://github.com/Cbhanu12dec', label: '🐙 GitHub', target: '_blank' },
  { href: 'tel:8389109856', label: '📞 (838) 910-9856' },
]

export default function Contact() {
  return (
    <section id="contact" style={{
      padding:'7rem 6%',
      background:'linear-gradient(135deg, var(--blue-700) 0%, var(--blue-900) 100%)',
      color:'white', textAlign:'center', position:'relative', overflow:'hidden'
    }}>
      {/* Grid overlay */}
      <div style={{
        position:'absolute', inset:0,
        backgroundImage:'linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px)',
        backgroundSize:'60px 60px'
      }} />

      <div style={{ position:'relative', zIndex:2 }}>
        <div style={{ fontSize:'.75rem', fontWeight:700, letterSpacing:2, textTransform:'uppercase', color:'#bfdbfe', marginBottom:'.8rem' }}>Let's Connect</div>
        <h2 style={{ fontFamily:"'Playfair Display', serif", fontSize:'clamp(2rem, 3.5vw, 3rem)', fontWeight:900, color:'white', lineHeight:1.15 }}>Get in Touch</h2>
        <p style={{ color:'rgba(255,255,255,.7)', marginTop:'1rem', maxWidth:480, marginInline:'auto', lineHeight:1.7 }}>
          Open to exciting opportunities in backend, full-stack, or distributed systems engineering. Reach out — I'd love to talk.
        </p>

        <div style={{ display:'flex', justifyContent:'center', gap:'1.5rem', flexWrap:'wrap', marginTop:'2.5rem' }}>
          {links.map(({ href, label, target }) => (
            <ContactLink key={label} href={href} target={target}>{label}</ContactLink>
          ))}
        </div>
      </div>
    </section>
  )
}

import { useState } from 'react'

function ContactLink({ href, target, children }) {
  const [hovered, setHovered] = useState(false)
  return (
    <a href={href} target={target} rel={target ? 'noopener noreferrer' : undefined}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{
        display:'flex', alignItems:'center', gap:'.65rem',
        background: hovered ? 'rgba(255,255,255,.22)' : 'rgba(255,255,255,.12)',
        backdropFilter:'blur(8px)',
        border:'1px solid rgba(255,255,255,.2)',
        color:'white', textDecoration:'none',
        padding:'.85rem 1.6rem', borderRadius:10,
        fontSize:'.88rem', fontWeight:500,
        transform: hovered ? 'translateY(-3px)' : 'none',
        transition:'background .2s, transform .2s'
      }}>
      {children}
    </a>
  )
}
