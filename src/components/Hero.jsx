import { useEffect, useRef, useState } from 'react'
import { useMediaQuery, isMobileQuery } from '../hooks/useMediaQuery'
import ResumeModal from './ResumeModal'

export default function Hero() {
  const blob1 = useRef(null)
  const blob2 = useRef(null)
  const blob3 = useRef(null)
  const [modalOpen, setModalOpen] = useState(false)
  const isMobile = useMediaQuery(isMobileQuery)

  useEffect(() => {
    const onMouseMove = (e) => {
      if (isMobile) return
      const cx = window.innerWidth / 2, cy = window.innerHeight / 2
      const dx = (e.clientX - cx) / cx, dy = (e.clientY - cy) / cy
      ;[{ ref: blob1, s: 0.08 }, { ref: blob2, s: 0.12 }, { ref: blob3, s: 0.06 }].forEach(({ ref, s }) => {
        if (ref.current) ref.current.style.transform = `translate(${dx * s * 40}px, ${dy * s * 40}px)`
      })
    }
    const onScroll = () => {
      const sy = window.scrollY
      ;[blob1, blob2, blob3].forEach((ref, i) => {
        if (ref.current) ref.current.style.transform = `translateY(${sy * [0.15, 0.25, 0.1][i]}px)`
      })
    }
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('scroll', onScroll)
    return () => { window.removeEventListener('mousemove', onMouseMove); window.removeEventListener('scroll', onScroll) }
  }, [isMobile])

  return (
    <>
      <section style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center',
        padding: isMobile ? '100px 5% 60px' : '0 6%',
        position: 'relative', overflow: 'hidden',
        background: 'linear-gradient(145deg, #f0f6ff 0%, #ffffff 60%, #e8f0fe 100%)',
      }}>
        <div style={{ position:'absolute', inset:0, backgroundImage:'linear-gradient(rgba(59,130,246,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,.04) 1px, transparent 1px)', backgroundSize:'60px 60px' }} />
        <div ref={blob1} style={{ position:'absolute', width:isMobile?300:600, height:isMobile?300:600, borderRadius:'50%', filter:'blur(80px)', opacity:.35, background:'#bfdbfe', top:isMobile?-60:-120, right:isMobile?-60:-100, pointerEvents:'none', willChange:'transform', transition:'transform .1s linear' }} />
        <div ref={blob2} style={{ position:'absolute', width:isMobile?250:400, height:isMobile?250:400, borderRadius:'50%', filter:'blur(80px)', opacity:.35, background:'#93c5fd', bottom:isMobile?-40:-80, left:isMobile?'-5%':'10%', pointerEvents:'none', willChange:'transform', transition:'transform .1s linear' }} />
        <div ref={blob3} style={{ position:'absolute', width:isMobile?180:300, height:isMobile?180:300, borderRadius:'50%', filter:'blur(80px)', opacity:.25, background:'#dbeafe', top:'40%', right:'20%', pointerEvents:'none', willChange:'transform', transition:'transform .1s linear' }} />

        <div style={{ position:'relative', zIndex:2, maxWidth:isMobile?'100%':680 }}>
          <div style={{
            display:'inline-flex', alignItems:'center', gap:'.5rem',
            background:'var(--blue-50)', border:'1px solid var(--blue-100)',
            color:'var(--blue-700)', fontSize:isMobile?'.7rem':'.78rem', fontWeight:600,
            padding:'.35rem .9rem', borderRadius:100, letterSpacing:'.6px',
            textTransform:'uppercase', marginBottom:'1.4rem',
            opacity:0, animation:'fadeUp .8s .2s forwards'
          }}>
            <span style={{ fontSize:'.5rem', color:'var(--blue-500)' }}>●</span>
            Software Engineer · 6+ Years
          </div>

          <h1 style={{
            fontFamily:"'Playfair Display', serif",
            fontSize:isMobile?'clamp(2.6rem, 11vw, 3.8rem)':'clamp(3rem, 6vw, 5.5rem)',
            fontWeight:900, lineHeight:1.05, color:'var(--text-dark)',
            opacity:0, animation:'fadeUp .8s .4s forwards'
          }}>
            Bhanu<br /><span style={{ color:'var(--blue-600)' }}>Cheryala</span>
          </h1>

          <p style={{
            marginTop:'1.2rem', fontSize:isMobile?'.95rem':'1.15rem', fontWeight:300,
            color:'var(--text-mid)', lineHeight:1.7,
            opacity:0, animation:'fadeUp .8s .6s forwards'
          }}>
            Building scalable distributed systems and modern frontend applications.
            Specialising in microservices, event-driven architectures &amp; cloud-native platforms.
          </p>

          <div style={{ marginTop:'2rem', display:'flex', gap:'.8rem', flexWrap:'wrap', opacity:0, animation:'fadeUp .8s .8s forwards' }}>
            <button onClick={() => setModalOpen(true)} style={{
              background:'var(--blue-600)', color:'#fff',
              padding:isMobile?'.75rem 1.4rem':'.85rem 2rem', borderRadius:8, border:'none',
              fontSize:isMobile?'.85rem':'.9rem', fontWeight:600, cursor:'pointer',
              boxShadow:'0 4px 20px rgba(37,99,235,.3)', transition:'background .2s, transform .2s',
              fontFamily:"'DM Sans', sans-serif",
            }}>View Experience</button>

            <a href="mailto:cbhanu12dec@gmail.com" style={{
              border:'2px solid var(--blue-200)', color:'var(--blue-700)',
              padding:isMobile?'.75rem 1.4rem':'.85rem 2rem', borderRadius:8,
              fontSize:isMobile?'.85rem':'.9rem', fontWeight:600, textDecoration:'none', display:'inline-block',
            }}>Get in Touch</a>
          </div>
        </div>
      </section>
      <ResumeModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
