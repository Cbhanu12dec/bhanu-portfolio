import { useEffect } from 'react'

const expData = [
  {
    title: 'Senior Software Engineer', company: 'T-Mobile — Frisco, TX', date: 'Aug 2024 – Present',
    bullets: [
      'Architected Spring Boot microservices with Kafka-based event streaming processing 1.2–1.8M events/day at 99.95% message delivery reliability.',
      'Designed federated GraphQL architecture (Netflix DGS + Apollo Gateway) reducing API calls by 35% and P95 latency by 28%.',
      'Delivered line lifecycle workflows reducing billing discrepancies by 45%, preventing ~$700K–$900K annually in revenue leakage.',
      'Built Fiber Eligibility services reducing failed activations by 25% and cutting manual verification by 250–300 hrs/month.',
      'Converted Java components to Go, improving P95 latency by 32% and reducing Kubernetes cost by 18–22%.',
    ]
  },
  {
    title: 'Software Engineer', company: 'New York State Education Department — Albany, NY', date: 'Aug 2023 – July 2024',
    bullets: [
      'Designed NY Comptroller internal evaluation application using Spring Boot, Angular, and Oracle for 500+ schools.',
      'Built secure microservices processing 10K+ evaluation forms annually with role-based access control.',
      'Reduced manual processing effort by 35% and improved approval turnaround by 30%.',
      'Optimised Oracle queries reducing P95 latency by 25% during peak funding cycles.',
    ]
  },
  {
    title: 'Software Engineer', company: 'Experian — Hyderabad, India', date: 'Jan 2020 – July 2022',
    bullets: [
      'Built backend services for Ascend Quest & Portal securely processing 8–12M PII-sensitive records/day at 95% data integrity.',
      'Implemented data ingestion pipelines improving campaign accuracy by 30% and reducing reprocessing by 40%.',
      'Reduced client onboarding time by 45%; supported integrations for American Express and JPMorgan Chase.',
      'Built React micro-frontend modules reducing page load time by 35%, enabling independent UI deployments.',
      'Integrated Splunk observability and AWS Lambda DAG workflows, reducing incident detection time by 50%.',
    ]
  }
]

export default function ResumeModal({ open, onClose }) {
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    const esc = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', esc)
    return () => window.removeEventListener('keydown', esc)
  }, [onClose])

  if (!open) return null

  return (
    <div onClick={(e) => { if (e.target === e.currentTarget) onClose() }} style={{
      position:'fixed', inset:0, zIndex:200,
      background:'rgba(15,23,42,0.7)', backdropFilter:'blur(6px)',
      display:'flex', alignItems:'center', justifyContent:'center',
      animation:'fadeIn .25s ease'
    }}>
      <div style={{
        background:'var(--white)', borderRadius:20,
        width:'90vw', maxWidth:860, maxHeight:'90vh',
        display:'flex', flexDirection:'column',
        boxShadow:'0 30px 80px rgba(15,23,42,.35)',
        overflow:'hidden', animation:'slideUp .3s ease'
      }}>
        {/* Header */}
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'1.2rem 1.6rem', borderBottom:'1px solid var(--blue-100)' }}>
          <div style={{ fontFamily:"'Playfair Display', serif", fontSize:'1.2rem', fontWeight:700, color:'var(--text-dark)' }}>📄 Bhanu Cheryala — Resume</div>
          <div style={{ display:'flex', gap:'.8rem', alignItems:'center' }}>
            <a href="https://github.com/Cbhanu12dec" download style={{
              background:'var(--blue-600)', color:'white',
              padding:'.45rem 1.1rem', borderRadius:8, border:'none',
              fontSize:'.82rem', fontWeight:600, cursor:'pointer', textDecoration:'none',
              display:'inline-flex', alignItems:'center', gap:'.4rem'
            }}>⬇ Download PDF</a>
            <button onClick={onClose} style={{
              width:36, height:36, borderRadius:8, border:'1px solid var(--blue-100)',
              background:'var(--blue-50)', color:'var(--text-mid)', fontSize:'1rem',
              cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center'
            }}>✕</button>
          </div>
        </div>

        {/* Body */}
        <div style={{ flex:1, overflowY:'auto', padding:'2rem', background:'var(--off-white)' }}>
          {/* Name block */}
          <div style={{ textAlign:'center', marginBottom:'1.8rem' }}>
            <div style={{ fontFamily:"'Playfair Display', serif", fontSize:'2rem', fontWeight:900, color:'var(--text-dark)' }}>Bhanu Cheryala</div>
            <div style={{ fontSize:'.8rem', color:'var(--text-light)', marginTop:'.3rem' }}>cbhanu12dec@gmail.com · linkedin.com/in/bhanu-cheryala · github.com/Cbhanu12dec · Dallas, TX · (838) 910-9856</div>
            <p style={{ fontSize:'.85rem', color:'var(--text-mid)', lineHeight:1.7, marginTop:'.8rem', maxWidth:680, marginInline:'auto' }}>
              Software Engineer with 6+ years of experience building scalable distributed backend systems and modern frontend applications in high-traffic production environments.
            </p>
          </div>

          {/* Skills */}
          <ResumeSection title="Technical Skills">
            <div style={{ display:'grid', gap:'.6rem', fontSize:'.82rem' }}>
              {[
                ['Languages', 'Java, Python, JavaScript, TypeScript, SQL, Go'],
                ['Backend', 'Spring Boot, Node.js, Express.js, REST APIs, Microservices, Kafka, GraphQL, Hibernate'],
                ['Frontend', 'React.js, Redux, Angular, HTML/CSS'],
                ['Databases & Caching', 'MySQL, PostgreSQL, MongoDB, Redis, DynamoDB, Oracle'],
                ['Cloud & DevOps', 'AWS, Azure, Docker, Jenkins, Kubernetes, CI/CD, Git, Spinnaker, Terraform'],
                ['Testing', 'JUnit, Mockito, Karma.js, Jest.js'],
              ].map(([k, v]) => (
                <div key={k}><strong>{k}:</strong> {v}</div>
              ))}
            </div>
          </ResumeSection>

          {/* Experience */}
          <ResumeSection title="Experience">
            {expData.map((job, i) => (
              <div key={i} style={{ marginBottom:'1.4rem' }}>
                <div style={{ display:'flex', justifyContent:'space-between', flexWrap:'wrap', gap:'.3rem' }}>
                  <div>
                    <div style={{ fontWeight:700, fontSize:'.95rem', color:'var(--text-dark)' }}>{job.title}</div>
                    <div style={{ color:'var(--blue-600)', fontSize:'.85rem', fontWeight:600 }}>{job.company}</div>
                  </div>
                  <div style={{ fontSize:'.78rem', color:'var(--text-light)' }}>{job.date}</div>
                </div>
                <ul style={{ listStyle:'none', marginTop:'.5rem' }}>
                  {job.bullets.map((b, j) => (
                    <li key={j} style={{ position:'relative', paddingLeft:'1.1rem', fontSize:'.82rem', color:'var(--text-mid)', lineHeight:1.65, marginBottom:'.35rem' }}>
                      <span style={{ position:'absolute', left:0, color:'var(--blue-500)', fontSize:'1.2rem', lineHeight:1.3 }}>·</span>{b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </ResumeSection>

          {/* Education */}
          <ResumeSection title="Education">
            <div style={{ display:'flex', justifyContent:'space-between', flexWrap:'wrap', gap:'.3rem' }}>
              <div>
                <div style={{ fontWeight:700, fontSize:'.95rem', color:'var(--text-dark)' }}>University at Albany, SUNY</div>
                <div style={{ color:'var(--blue-600)', fontSize:'.85rem', fontWeight:600 }}>M.S. Computer Science · GPA 3.9</div>
              </div>
              <div style={{ fontSize:'.78rem', color:'var(--text-light)' }}>May 2024</div>
            </div>
          </ResumeSection>

          {/* Projects */}
          <ResumeSection title="Projects">
            {[
              { title:'Job Scraper & Intelligent Job Alert System', desc:'Automated job discovery platform using Python, Selenium, AWS Lambda, SNS & Twilio — reducing manual search effort by 80%.' },
              { title:'Hussle — AI Powered Speech-Based Assistant', desc:'AI-driven speech-to-answer system using Python, Speech-to-Text APIs, NLP pipelines & OpenAI APIs for interview prep.' }
            ].map(p => (
              <div key={p.title} style={{ marginBottom:'1rem' }}>
                <div style={{ fontWeight:700, fontSize:'.92rem', color:'var(--text-dark)' }}>{p.title}</div>
                <p style={{ fontSize:'.82rem', color:'var(--text-mid)', marginTop:'.3rem', lineHeight:1.6 }}>{p.desc}</p>
              </div>
            ))}
          </ResumeSection>
        </div>
      </div>
    </div>
  )
}

function ResumeSection({ title, children }) {
  return (
    <div style={{ marginBottom:'2rem' }}>
      <div style={{
        fontSize:'.7rem', fontWeight:700, letterSpacing:2, textTransform:'uppercase',
        color:'var(--blue-600)', borderBottom:'2px solid var(--blue-100)',
        paddingBottom:'.5rem', marginBottom:'1rem'
      }}>{title}</div>
      {children}
    </div>
  )
}
