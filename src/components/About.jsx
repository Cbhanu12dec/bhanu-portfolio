import { useMediaQuery, isMobileQuery } from '../hooks/useMediaQuery'

const skills = ['Java','Spring Boot','Kafka','GraphQL','React.js','Angular','Node.js','AWS','Kubernetes','Docker','Go','PostgreSQL','Redis','MongoDB','Python','TypeScript']

const cardDetails = [
  { icon: '📍', text: 'Dallas, TX' },
  { icon: '📧', text: 'cbhanu12dec@gmail.com' },
  { icon: '📞', text: '(838) 910-9856' },
  { icon: '🎓', text: 'M.S. Computer Science, SUNY Albany' },
  { icon: '💼', text: 'Open to opportunities' },
]

export default function About() {
  const isMobile = useMediaQuery(isMobileQuery)

  return (
    <section id="about" style={{ padding: isMobile ? '5rem 5%' : '7rem 6%', background:'#1a1a1a' }}>
      <div style={{ display:'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '3rem' : '5rem', alignItems:'center' }}>
        <div>
          <div style={{ fontSize:'.75rem', fontWeight:700, letterSpacing:2, textTransform:'uppercase', color:'#e8533a', marginBottom:'.8rem' }}>About Me</div>
          <h2 style={{ fontFamily:"'Playfair Display', serif", fontSize: isMobile ? 'clamp(1.8rem, 7vw, 2.5rem)' : 'clamp(2rem, 3.5vw, 3rem)', fontWeight:900, color:'#fff', lineHeight:1.15 }}>
            Crafting systems that scale, perform &amp; endure
          </h2>
          <div style={{ width:48, height:3, background:'linear-gradient(90deg, #e8533a, #c0392b)', borderRadius:2, margin:'1.2rem 0 2rem' }} />
          <p style={{ color:'#aaa', lineHeight:1.85, marginBottom:'1rem', fontSize: isMobile ? '.92rem' : '1rem' }}>
            Software Engineer with expertise in Java, Spring Boot, microservices, GraphQL, Kafka, and Angular/React. Strong background in designing event-driven architectures and cloud-native platforms for high-traffic production environments.
          </p>
          <p style={{ color:'#aaa', lineHeight:1.85, fontSize: isMobile ? '.92rem' : '1rem' }}>
            Proven ability to apply data structures and algorithms to performance-critical workflows while automating CI/CD pipelines. Experienced in technical leadership and cross-team collaboration.
          </p>
          <div style={{ display:'flex', flexWrap:'wrap', gap:'.5rem', marginTop:'1.6rem' }}>
            {skills.map(s => (
              <span key={s} style={{ background:'rgba(232,83,58,0.1)', border:'1px solid rgba(232,83,58,0.25)', color:'#e8533a', padding:'.35rem .8rem', borderRadius:6, fontSize:'.78rem', fontWeight:600 }}>{s}</span>
            ))}
          </div>
        </div>

        <div>
          <div style={{ background:'linear-gradient(135deg, #1e1e1e 0%, #252525 100%)', border:'1px solid #2a2a2a', borderRadius:20, padding: isMobile ? '2rem' : '2.5rem', position:'relative', overflow:'hidden', boxShadow:'0 20px 60px rgba(0,0,0,.4)' }}>
            <div style={{ position:'absolute', top:-40, right:-40, width:200, height:200, borderRadius:'50%', background:'rgba(232,83,58,.06)' }} />
            <div style={{ position:'absolute', bottom:-20, left:-20, width:120, height:120, borderRadius:'50%', background:'rgba(232,83,58,.04)' }} />
            <div style={{ fontFamily:"'Playfair Display', serif", fontSize: isMobile ? '1.4rem' : '1.7rem', fontWeight:900, marginBottom:'.3rem', color:'#fff' }}>Bhanu Cheryala</div>
            <div style={{ fontSize:'.88rem', color:'#e8533a', fontWeight:600, marginBottom:'1.8rem' }}>Senior Software Engineer @ T-Mobile</div>
            {cardDetails.map(({ icon, text }) => (
              <div key={text} style={{ display:'flex', alignItems:'center', gap:'.8rem', marginBottom:'.9rem', fontSize:'.86rem', color:'#bbb' }}>
                <div style={{ width:32, height:32, minWidth:32, background:'rgba(232,83,58,.15)', borderRadius:8, display:'flex', alignItems:'center', justifyContent:'center' }}>{icon}</div>
                <span style={{ wordBreak:'break-all' }}>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
