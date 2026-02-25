import { useMediaQuery, isMobileQuery } from '../hooks/useMediaQuery'

const courses = ['Object Oriented Programming','Artificial Intelligence','Algorithms','Data Structures','Data Mining']

export default function Education() {
  const isMobile = useMediaQuery(isMobileQuery)

  return (
    <section id="education" style={{ padding: isMobile ? '5rem 5%' : '7rem 6%', background:'var(--off-white)' }}>
      <div style={{ fontSize:'.75rem', fontWeight:700, letterSpacing:2, textTransform:'uppercase', color:'var(--blue-600)', marginBottom:'.8rem' }}>Academia</div>
      <h2 style={{ fontFamily:"'Playfair Display', serif", fontSize: isMobile ? 'clamp(1.8rem, 7vw, 2.5rem)' : 'clamp(2rem, 3.5vw, 3rem)', fontWeight:900, color:'var(--text-dark)', lineHeight:1.15 }}>Education</h2>
      <div style={{ width:48, height:3, background:'linear-gradient(90deg, var(--blue-500), var(--blue-300))', borderRadius:2, margin:'1.2rem 0 2.5rem' }} />

      <div style={{
        display:'flex', flexDirection: isMobile ? 'column' : 'row',
        gap: isMobile ? '1.2rem' : '2rem', alignItems: isMobile ? 'flex-start' : 'flex-start',
        background:'var(--white)', border:'1px solid rgba(59,130,246,.12)',
        borderRadius:16, padding: isMobile ? '1.5rem' : '2rem',
        boxShadow:'0 4px 20px rgba(37,99,235,.05)', maxWidth:700
      }}>
        <div style={{ width:isMobile?44:56, height:isMobile?44:56, minWidth:isMobile?44:56, borderRadius:14, background:'linear-gradient(135deg, var(--blue-500), var(--blue-700))', display:'flex', alignItems:'center', justifyContent:'center', fontSize: isMobile ? '1.3rem' : '1.6rem' }}>🎓</div>
        <div>
          <div style={{ fontFamily:"'Playfair Display', serif", fontSize: isMobile ? '1.1rem' : '1.3rem', fontWeight:700 }}>University at Albany, SUNY</div>
          <div style={{ color:'var(--blue-600)', fontWeight:600, fontSize:'.9rem', margin:'.25rem 0' }}>Master of Science in Computer Science</div>
          <div style={{ fontSize:'.8rem', color:'var(--text-light)' }}>Albany, NY · Graduated May 2024 · GPA 3.9 / 4.0</div>
          <div style={{ display:'flex', flexWrap:'wrap', gap:'.4rem', marginTop:'.9rem' }}>
            {courses.map(c => <span key={c} style={{ background:'var(--blue-50)', border:'1px solid var(--blue-100)', color:'var(--blue-700)', padding:'.35rem .8rem', borderRadius:6, fontSize:'.78rem', fontWeight:600 }}>{c}</span>)}
          </div>
        </div>
      </div>
    </section>
  )
}
