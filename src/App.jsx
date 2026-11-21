import { useEffect, useState } from 'react'
import { NavLink, Route, Routes, Link, useLocation } from 'react-router-dom'
import { Home, About, Schools, Events, Journal, Projects, Members, Contact } from './pages.jsx'
import { JoinModal } from './components.jsx'

const links = [
  ['/', 'Home'], ['/about', 'About'], ['/events', 'Events'], ['/schools', 'Schools'],
  ['/journal', 'Journal'], ['/projects', 'Projects'], ['/members', 'Members'], ['/contact', 'Contact'],
]
const REVEAL = '.card, .timeline li, .stat, .board-title, .page h1, .page .lead, .tabs'

export default function App() {
  const { pathname } = useLocation()
  const [join, setJoin] = useState(false)
  const [menu, setMenu] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => { window.scrollTo(0, 0); setMenu(false) }, [pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Scroll-reveal for any matching element, including those rendered later
  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) }
    }), { threshold: 0.12 })
    const mark = () => document.querySelectorAll(REVEAL).forEach((el) => {
      if (el.classList.contains('reveal')) return
      const i = Array.prototype.indexOf.call(el.parentNode.children, el)
      el.style.setProperty('--d', Math.min(i, 6) * 70 + 'ms')
      el.classList.add('reveal'); io.observe(el)
    })
    mark()
    const mo = new MutationObserver(mark)
    mo.observe(document.getElementById('root'), { childList: true, subtree: true })
    return () => { io.disconnect(); mo.disconnect() }
  }, [])

  return (
    <>
      <header className={'nav' + (scrolled ? ' scrolled' : '')}>
        <Link to="/" className="brand">IEF <span>Kathmandu University</span></Link>
        <nav className={menu ? 'open' : ''}>
          {links.map(([to, label]) => <NavLink key={to} to={to} end>{label}</NavLink>)}
        </nav>
        <button className="btn join" onClick={() => setJoin(true)}>Join IEF</button>
        <button className="burger" onClick={() => setMenu(!menu)} aria-label="Menu">☰</button>
      </header>
      <main>
        <div className="route" key={pathname}>
          <Routes>
            <Route path="/" element={<Home onJoin={() => setJoin(true)} />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Events />} />
            <Route path="/schools" element={<Schools />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/members" element={<Members />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </main>
      <footer>© 2026 Interdisciplinary Exchange Forum, Kathmandu University</footer>
      <JoinModal open={join} onClose={() => setJoin(false)} />
    </>
  )
}
