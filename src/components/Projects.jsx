import { useEffect, useRef } from 'react'

const projects = [
  {
    icon: '🔍',
    title: 'Job Scraper & Intelligent Alert System',
    desc: 'Automated job discovery and matching platform that scrapes targeted companies, matches roles against user profiles, and delivers real-time email/SMS notifications — reducing manual job search effort by 80%.',
    tags: ['Python', 'Selenium', 'AWS Lambda', 'SNS', 'Twilio', 'REST APIs'],
  },
  {
    icon: '🎙️',
    title: 'Hussle — AI Speech-Based Assistant',
    desc: 'AI-driven speech-to-answer system converting voice input into context-aware explanations and code solutions, tailored to user profiles for interview preparation and technical learning.',
    tags: ['Python', 'Speech-to-Text', 'NLP', 'OpenAI API'],
  }
]

export default function Projects() {
  const cardRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.style.opacity = '1'
          e.target.style.transform = 'translateY(0)'
        }
      })
    }, { threshold: 0.12 })
    cardRefs.current.forEach(el => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" style={{ padding:'7rem 6%', background:'var(--white)' }}>
      <div style={{ fontSize:'.75rem', fontWeight:700, letterSpacing:2, textTransform:'uppercase', color:'var(--blue-600)', marginBottom:'.8rem' }}>Work</div>
      <h2 style={{ fontFamily:"'Playfair Display', serif", fontSize:'clamp(2rem, 3.5vw, 3rem)', fontWeight:900, color:'var(--text-dark)', lineHeight:1.15 }}>Projects</h2>
      <div style={{ width:48, height:3, background:'linear-gradient(90deg, var(--blue-500), var(--blue-300))', borderRadius:2, margin:'1.2rem 0 2.5rem' }} />

      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(300px, 1fr))', gap:'1.8rem' }}>
        {projects.map((p, i) => (
          <ProjectCard key={i} ref={el => cardRefs.current[i] = el} {...p} />
        ))}
      </div>
    </section>
  )
}

import { forwardRef, useState } from 'react'

const ProjectCard = forwardRef(({ icon, title, desc, tags }, ref) => {
  const [hovered, setHovered] = useState(false)
  return (
    <div ref={ref} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} style={{
      background:'var(--white)',
      border:`1px solid ${hovered ? 'var(--blue-400)' : 'rgba(59,130,246,.15)'}`,
      borderRadius:16, padding:'2rem',
      opacity:0, transform:'translateY(30px)',
      transition:'opacity .5s, transform .5s, box-shadow .3s, border-color .3s',
      boxShadow: hovered ? '0 20px 50px rgba(37,99,235,.12)' : 'none',
      ...(hovered ? { transform:'translateY(-6px)' } : {})
    }}>
      <div style={{ width:48, height:48, borderRadius:12, background:'linear-gradient(135deg, var(--blue-500), var(--blue-700))', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.4rem', marginBottom:'1.2rem' }}>{icon}</div>
      <div style={{ fontFamily:"'Playfair Display', serif", fontSize:'1.2rem', fontWeight:700, color:'var(--text-dark)', marginBottom:'.6rem' }}>{title}</div>
      <p style={{ fontSize:'.86rem', color:'var(--text-mid)', lineHeight:1.7 }}>{desc}</p>
      <div style={{ display:'flex', flexWrap:'wrap', gap:'.4rem', marginTop:'1.2rem' }}>
        {tags.map(t => (
          <span key={t} style={{ background:'var(--blue-50)', color:'var(--blue-700)', fontSize:'.72rem', fontWeight:600, padding:'.25rem .65rem', borderRadius:5 }}>{t}</span>
        ))}
      </div>
    </div>
  )
})
