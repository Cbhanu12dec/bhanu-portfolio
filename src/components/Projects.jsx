import { useEffect, useRef, forwardRef, useState } from 'react'
import { useMediaQuery, isMobileQuery } from '../hooks/useMediaQuery'

const projects = [
  {
    icon: '🔍', title: 'Job Scraper & Intelligent Alert System',
    desc: 'Automated job discovery and matching platform that scrapes targeted companies, matches roles against user profiles, and delivers real-time email/SMS notifications — reducing manual search effort by 80%.',
    tags: ['Python','Selenium','AWS Lambda','SNS','Twilio','REST APIs'],
  },
  {
    icon: '🎙️', title: 'Hussle — AI Speech-Based Assistant',
    desc: 'AI-driven speech-to-answer system converting voice input into context-aware explanations and code solutions, tailored to user profiles for interview preparation and technical learning.',
    tags: ['Python','Speech-to-Text','NLP','OpenAI API'],
  }
]

export default function Projects() {
  const cardRefs = useRef([])
  const isMobile = useMediaQuery(isMobileQuery)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.style.opacity = '1'; e.target.style.transform = 'translateY(0)' }
      })
    }, { threshold: 0.08 })
    cardRefs.current.forEach(el => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" style={{ padding: isMobile ? '5rem 5%' : '7rem 6%', background:'#1a1a1a' }}>
      <div style={{ fontSize:'.75rem', fontWeight:700, letterSpacing:2, textTransform:'uppercase', color:'#e8533a', marginBottom:'.8rem' }}>Work</div>
      <h2 style={{ fontFamily:"'Playfair Display', serif", fontSize: isMobile ? 'clamp(1.8rem, 7vw, 2.5rem)' : 'clamp(2rem, 3.5vw, 3rem)', fontWeight:900, color:'#fff', lineHeight:1.15 }}>Projects</h2>
      <div style={{ width:48, height:3, background:'linear-gradient(90deg, #e8533a, #c0392b)', borderRadius:2, margin:'1.2rem 0 2.5rem' }} />

      <div style={{ display:'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))', gap:'1.5rem' }}>
        {projects.map((p, i) => (
          <ProjectCard key={i} ref={el => cardRefs.current[i] = el} {...p} />
        ))}
      </div>
    </section>
  )
}

const ProjectCard = forwardRef(({ icon, title, desc, tags }, ref) => {
  const [hovered, setHovered] = useState(false)
  return (
    <div ref={ref}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? '#222' : '#1e1e1e',
        border:`1px solid ${hovered ? 'rgba(232,83,58,0.5)' : '#2a2a2a'}`,
        borderRadius:16, padding:'1.8rem',
        opacity:0, transform:'translateY(30px)',
        transition:'opacity .5s, transform .5s, box-shadow .3s, border-color .3s, background .3s',
        boxShadow: hovered ? '0 20px 50px rgba(232,83,58,.1)' : 'none',
      }}>
      <div style={{ width:44, height:44, borderRadius:12, background:'linear-gradient(135deg, #e8533a, #c0392b)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.3rem', marginBottom:'1rem' }}>{icon}</div>
      <div style={{ fontFamily:"'Playfair Display', serif", fontSize:'1.15rem', fontWeight:700, color:'#fff', marginBottom:'.5rem' }}>{title}</div>
      <p style={{ fontSize:'.85rem', color:'#aaa', lineHeight:1.7 }}>{desc}</p>
      <div style={{ display:'flex', flexWrap:'wrap', gap:'.4rem', marginTop:'1rem' }}>
        {tags.map(t => <span key={t} style={{ background:'rgba(232,83,58,0.1)', border:'1px solid rgba(232,83,58,0.2)', color:'#e8533a', fontSize:'.72rem', fontWeight:600, padding:'.25rem .65rem', borderRadius:5 }}>{t}</span>)}
      </div>
    </div>
  )
})
