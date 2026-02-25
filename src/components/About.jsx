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
    <section id="about" style={{ padding: isMobile ? '5rem 5%' : '7rem 6%', background:'var(--white)' }}>
      <div style={{ display:'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '3rem' : '5rem', alignItems:'center' }}>
        <div>
          <div style={{ fontSize:'.75rem', fontWeight:700, letterSpacing:2, textTransform:'uppercase', color:'var(--blue-600)', marginBottom:'.8rem' }}>About Me</div>
          <h2 style={{ fontFamily:"'Playfair Display', serif", fontSize: isMobile ? 'clamp(1.8rem, 7vw, 2.5rem)' : 'clamp(2rem, 3.5vw, 3rem)', fontWeight:900, color:'var(--text-dark)', lineHeight:1.15 }}>
            Crafting systems that scale, perform &amp; endure
          </h2>
          <div style={{ width:48, height:3, background:'linear-gradient(90deg, var(--blue-500), var(--blue-300))', borderRadius:2, margin:'1.2rem 0 2rem' }} />
          <p style={{ color:'var(--text-mid)', lineHeight:1.85, marginBottom:'1rem', fontSize: isMobile ? '.92rem' : '1rem' }}>
            Software Engineer with expertise in Java, Spring Boot, microservices, GraphQL, Kafka, and Angular/React. Strong background in designing event-driven architectures and cloud-native platforms for high-traffic production environments.
          </p>
          <p style={{ color:'var(--text-mid)', lineHeight:1.85, fontSize: isMobile ? '.92rem' : '1rem' }}>
            Proven ability to apply data structures and algorithms to performance-critical workflows while automating CI/CD pipelines. Experienced in technical leadership and cross-team collaboration.
          </p>
          <div style={{ display:'flex', flexWrap:'wrap', gap:'.5rem', marginTop:'1.6rem' }}>
            {skills.map(s => (
              <span key={s} style={{ background:'var(--blue-50)', border:'1px solid var(--blue-100)', color:'var(--blue-700)', padding:'.35rem .8rem', borderRadius:6, fontSize:'.78rem', fontWeight:600 }}>{s}</span>
            ))}
          </div>
        </div>

        <div>
          <div style={{ background:'linear-gradient(135deg, var(--blue-600) 0%, var(--blue-700) 100%)', borderRadius:20, padding: isMobile ? '2rem' : '2.5rem', color:'white', position:'relative', overflow:'hidden', boxShadow:'0 20px 60px rgba(37,99,235,.25)' }}>
            <div style={{ position:'absolute', top:-40, right:-40, width:200, height:200, borderRadius:'50%', background:'rgba(255,255,255,.08)' }} />
            <div style={{ fontFamily:"'Playfair Display', serif", fontSize: isMobile ? '1.4rem' : '1.7rem', fontWeight:900, marginBottom:'.3rem' }}>Bhanu Cheryala</div>
            <div style={{ fontSize:'.88rem', opacity:.8, marginBottom:'1.8rem' }}>Senior Software Engineer @ T-Mobile</div>
            {cardDetails.map(({ icon, text }) => (
              <div key={text} style={{ display:'flex', alignItems:'center', gap:'.8rem', marginBottom:'.9rem', fontSize:'.86rem' }}>
                <div style={{ width:32, height:32, minWidth:32, background:'rgba(255,255,255,.15)', borderRadius:8, display:'flex', alignItems:'center', justifyContent:'center' }}>{icon}</div>
                <span style={{ wordBreak:'break-all' }}>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
