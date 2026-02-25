import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <footer style={{
        background:'#0f0f0f',
        borderTop:'1px solid #1e1e1e',
        color:'#444',
        textAlign:'center', padding:'1.8rem 6%', fontSize:'.8rem'
      }}>
        © 2025 Bhanu Cheryala · Built with precision &amp; passion
      </footer>
    </>
  )
}
