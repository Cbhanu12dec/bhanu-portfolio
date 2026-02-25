import { useEffect, useRef } from 'react'
import { useMediaQuery, isMobileQuery } from '../hooks/useMediaQuery'

const jobs = [
  {
    title: 'Senior Software Engineer', company: 'T-Mobile', location: 'Frisco, TX',
    date: 'Aug 2024 – Present', badge: 'Current',
    bullets: [
      'Architected Spring Boot microservices with Kafka-based event streaming processing 1.2–1.8M events/day at 99.95% message delivery reliability.',
      'Designed federated GraphQL architecture (Netflix DGS + Apollo Gateway) aggregating 10+ backend services, reducing API calls by 35% and P95 latency by 28%.',
      'Delivered line lifecycle workflows reducing billing discrepancies by 45%, preventing ~$700K–$900K annually in revenue leakage.',
      'Built Fiber Eligibility services, reducing failed activations by 25% and cutting manual verification by 250–300 hours/month.',
      'Converted Java components to Go, improving P95 latency by 32% and reducing Kubernetes compute cost by 18–22%.',
    ]
  },
  {
    title: 'Software Engineer', company: 'NY State Education Dept.', location: 'Albany, NY',
    date: 'Aug 2023 – July 2024', badge: '2023 – 2024',
    bullets: [
      'Designed the NY Comptroller internal evaluation application using Spring Boot, Angular, and Oracle for 500+ schools statewide.',
      'Built secure microservices processing 10K+ evaluation forms annually with role-based access for reviewers and administrators.',
      'Reduced manual processing effort by 35% and improved approval turnaround time by 30%.',
      'Optimised Oracle queries and backend APIs, reducing P95 latency by 25% during peak funding cycles.',
    ]
  },
  {
    title: 'Software Engineer', company: 'Experian', location: 'Hyderabad, India',
    date: 'Jan 2020 – July 2022', badge: '2020 – 2022',
    bullets: [
      'Built Spring Boot backend services for Ascend Quest & Ascend Portal processing 8–12M PII-sensitive records/day at 95% data integrity.',
      'Implemented data ingestion pipelines improving campaign accuracy by 30% and reducing downstream reprocessing by 40%.',
      'Reduced client onboarding time by 45%; supported integrations for American Express and JPMorgan Chase.',
      'Built React micro-frontend modules reducing page load time by 35%, enabling independent UI deployments.',
      'Integrated Splunk observability and AWS Lambda DAG workflows, reducing incident detection time by 50%.',
    ]
  }
]

export default function Experience() {
  const itemRefs = useRef([])
  const isMobile = useMediaQuery(isMobileQuery)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.style.opacity = '1'; e.target.style.transform = 'translateY(0)' }
      })
    }, { threshold: 0.08 })
    itemRefs.current.forEach(el => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" style={{ padding: isMobile ? '5rem 5%' : '7rem 6%', background:'var(--off-white)' }}>
      <div style={{ fontSize:'.75rem', fontWeight:700, letterSpacing:2, textTransform:'uppercase', color:'var(--blue-600)', marginBottom:'.8rem' }}>Career</div>
      <h2 style={{ fontFamily:"'Playfair Display', serif", fontSize: isMobile ? 'clamp(1.8rem, 7vw, 2.5rem)' : 'clamp(2rem, 3.5vw, 3rem)', fontWeight:900, color:'var(--text-dark)', lineHeight:1.15 }}>Experience</h2>
      <div style={{ width:48, height:3, background:'linear-gradient(90deg, var(--blue-500), var(--blue-300))', borderRadius:2, margin:'1.2rem 0 2.5rem' }} />

      <div style={{ position:'relative', paddingLeft: isMobile ? '1.5rem' : '2rem' }}>
        <div style={{ position:'absolute', left:0, top:8, bottom:8, width:2, background:'linear-gradient(180deg, var(--blue-500) 0%, var(--blue-200) 100%)', borderRadius:2 }} />

        {jobs.map((job, i) => (
          <div key={i} ref={el => itemRefs.current[i] = el} style={{
            position:'relative', marginBottom: isMobile ? '2.5rem' : '3rem',
            paddingLeft: isMobile ? '1.5rem' : '2rem',
            opacity:0, transform:'translateY(30px)', transition:'opacity .6s, transform .6s',
          }}>
            <div style={{ position:'absolute', left: isMobile ? '-1.85rem' : '-2.4rem', top:'.35rem', width:13, height:13, borderRadius:'50%', background:'var(--blue-600)', border:'3px solid white', boxShadow:'0 0 0 2px var(--blue-400)' }} />

            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', flexWrap:'wrap', gap:'.4rem', marginBottom:'.5rem' }}>
              <div>
                <div style={{ fontFamily:"'Playfair Display', serif", fontSize: isMobile ? '1.1rem' : '1.3rem', fontWeight:700, color:'var(--text-dark)' }}>{job.title}</div>
                <div style={{ color:'var(--blue-600)', fontWeight:600, fontSize: isMobile ? '.88rem' : '.95rem' }}>{job.company}</div>
                <div style={{ color:'var(--text-light)', fontSize:'.8rem', marginTop:'.1rem' }}>{job.location} · {job.date}</div>
              </div>
              <span style={{ background:'var(--blue-50)', border:'1px solid var(--blue-100)', color:'var(--blue-700)', padding:'.2rem .65rem', borderRadius:100, fontSize:'.72rem', fontWeight:600, whiteSpace:'nowrap', height:'fit-content' }}>{job.badge}</span>
            </div>

            <ul style={{ listStyle:'none' }}>
              {job.bullets.map((b, j) => (
                <li key={j} style={{ position:'relative', paddingLeft:'1.1rem', color:'var(--text-mid)', fontSize: isMobile ? '.83rem' : '.88rem', lineHeight:1.7, marginBottom:'.5rem' }}>
                  <span style={{ position:'absolute', left:0, color:'var(--blue-500)', fontWeight:700 }}>→</span>{b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
