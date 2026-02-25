import { useState } from 'react'
import { useMediaQuery, isMobileQuery } from '../hooks/useMediaQuery'

const links = [
  { href: 'mailto:cbhanu12dec@gmail.com', label: '📧 cbhanu12dec@gmail.com' },
  { href: 'https://linkedin.com/in/bhanu-cheryala', label: '💼 LinkedIn', target: '_blank' },
  { href: 'https://github.com/Cbhanu12dec', label: '🐙 GitHub', target: '_blank' },
  { href: 'tel:8389109856', label: '📞 (838) 910-9856' },
]

export default function Contact() {
  const isMobile = useMediaQuery(isMobileQuery)

  return (
    <section id="contact" style={{
      padding: isMobile ? '5rem 5%' : '7rem 6%',
      background:'#111',
      color:'white', textAlign:'center', position:'relative', overflow:'hidden'
    }}>
      {/* Grid pattern */}
      <div style={{ position:'absolute', inset:0, backgroundImage:'linear-gradient(rgba(232,83,58,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(232,83,58,.03) 1px, transparent 1px)', backgroundSize:'60px 60px' }} />
      {/* Top accent line */}
      <div style={{ position:'absolute', top:0, left:0, right:0, height:'3px', background:'linear-gradient(90deg, transparent, #e8533a 40%, transparent)' }} />

      <div style={{ position:'relative', zIndex:2 }}>
        <div style={{ fontSize:'.75rem', fontWeight:700, letterSpacing:2, textTransform:'uppercase', color:'#e8533a', marginBottom:'.8rem' }}>Let's Connect</div>
        <h2 style={{ fontFamily:"'Playfair Display', serif", fontSize: isMobile ? 'clamp(1.8rem, 7vw, 2.5rem)' : 'clamp(2rem, 3.5vw, 3rem)', fontWeight:900, color:'#fff', lineHeight:1.15 }}>Get in Touch</h2>
        <div style={{ width:48, height:3, background:'linear-gradient(90deg, #e8533a, #c0392b)', borderRadius:2, margin:'1.2rem auto 1rem' }} />
        <p style={{ color:'#888', marginTop:'1rem', maxWidth:480, marginInline:'auto', lineHeight:1.7, fontSize: isMobile ? '.92rem' : '1rem' }}>
          Open to exciting opportunities in backend, full-stack, or distributed systems engineering. Reach out — I'd love to talk.
        </p>

        <div style={{
          display:'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, auto)',
          justifyContent: isMobile ? 'stretch' : 'center',
          gap:'.9rem', marginTop:'2.2rem',
          maxWidth: isMobile ? 360 : 'none', marginInline:'auto'
        }}>
          {links.map(({ href, label, target }) => (
            <ContactLink key={label} href={href} target={target} isMobile={isMobile}>{label}</ContactLink>
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactLink({ href, target, children, isMobile }) {
  const [hovered, setHovered] = useState(false)
  return (
    <a href={href} target={target} rel={target ? 'noopener noreferrer' : undefined}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{
        display:'flex', alignItems:'center', justifyContent: isMobile ? 'center' : 'flex-start',
        gap:'.65rem',
        background: hovered ? 'rgba(232,83,58,0.2)' : 'rgba(232,83,58,0.08)',
        border:`1px solid ${hovered ? 'rgba(232,83,58,0.6)' : 'rgba(232,83,58,0.2)'}`,
        color: hovered ? '#fff' : '#ccc', textDecoration:'none',
        padding: isMobile ? '.9rem 1.2rem' : '.85rem 1.6rem', borderRadius:10,
        fontSize: isMobile ? '.9rem' : '.88rem', fontWeight:500,
        transform: hovered ? 'translateY(-2px)' : 'none',
        transition:'all .2s'
      }}>
      {children}
    </a>
  )
}
