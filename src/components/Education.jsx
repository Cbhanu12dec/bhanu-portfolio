import { useMediaQuery, isMobileQuery } from '../hooks/useMediaQuery'

const courses = ['Object Oriented Programming','Artificial Intelligence','Algorithms','Data Structures','Data Mining']

export default function Education() {
  const isMobile = useMediaQuery(isMobileQuery)

  return (
    <section id="education" style={{ padding: isMobile ? '5rem 5%' : '7rem 6%', background:'#141414' }}>
      <div style={{ fontSize:'.75rem', fontWeight:700, letterSpacing:2, textTransform:'uppercase', color:'#e8533a', marginBottom:'.8rem' }}>Academia</div>
      <h2 style={{ fontFamily:"'Playfair Display', serif", fontSize: isMobile ? 'clamp(1.8rem, 7vw, 2.5rem)' : 'clamp(2rem, 3.5vw, 3rem)', fontWeight:900, color:'#fff', lineHeight:1.15 }}>Education</h2>
      <div style={{ width:48, height:3, background:'linear-gradient(90deg, #e8533a, #c0392b)', borderRadius:2, margin:'1.2rem 0 2.5rem' }} />

      <div style={{
        display:'flex', flexDirection: isMobile ? 'column' : 'row',
        gap: isMobile ? '1.2rem' : '2rem', alignItems: 'flex-start',
        background:'#1e1e1e', border:'1px solid #2a2a2a',
        borderRadius:16, padding: isMobile ? '1.5rem' : '2rem',
        boxShadow:'0 4px 20px rgba(0,0,0,.3)', maxWidth:700
      }}>
        <div style={{ width:isMobile?44:56, height:isMobile?44:56, minWidth:isMobile?44:56, borderRadius:14, background:'linear-gradient(135deg, #e8533a, #c0392b)', display:'flex', alignItems:'center', justifyContent:'center', fontSize: isMobile ? '1.3rem' : '1.6rem' }}>🎓</div>
        <div>
          <div style={{ fontFamily:"'Playfair Display', serif", fontSize: isMobile ? '1.1rem' : '1.3rem', fontWeight:700, color:'#fff' }}>University at Albany, SUNY</div>
          <div style={{ color:'#e8533a', fontWeight:600, fontSize:'.9rem', margin:'.25rem 0' }}>Master of Science in Computer Science</div>
          <div style={{ fontSize:'.8rem', color:'#666' }}>Albany, NY · Graduated May 2024 · GPA 3.9 / 4.0</div>
          <div style={{ display:'flex', flexWrap:'wrap', gap:'.4rem', marginTop:'.9rem' }}>
            {courses.map(c => <span key={c} style={{ background:'rgba(232,83,58,0.1)', border:'1px solid rgba(232,83,58,0.2)', color:'#e8533a', padding:'.35rem .8rem', borderRadius:6, fontSize:'.78rem', fontWeight:600 }}>{c}</span>)}
          </div>
        </div>
      </div>
    </section>
  )
}
