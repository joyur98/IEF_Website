import { useEffect, useRef, useState } from 'react'

/* ---------- Event data (edit dates and text here) ---------- */
export const events = [
  { title: 'Institutional MoUs and Course Development', start: '2026-11-01', end: '2026-12-31', label: 'Nov–Dec 2026', text: 'Formalisation of institutional agreements and development of the interdisciplinary course.' },
  { title: 'International Winter School on Interdisciplinary Research', start: '2027-01-01', end: '2027-02-28', label: 'Jan–Feb 2027', text: '2027 theme: Cancer. Two weeks delivered by the UNESCO Chair in Teacher Education and IPN-LSDTC.' },
  { title: 'Research by Seven or More Teams', start: '2027-02-01', end: '2027-05-31', label: 'Feb–May 2027', text: 'Interdisciplinary research conducted by teams drawn from multiple schools.' },
  { title: 'Compendium and Documentary Production', start: '2027-06-01', end: '2027-07-31', label: 'Jun–Jul 2027', text: 'Compilation of research outputs and production of a documentary.' },
  { title: 'National Policy Dialogue', start: '2027-08-01', end: '2027-08-31', label: 'Aug 2027', text: 'A national forum on policy implications of the forum’s research.' },
]
const schools = ['School of Engineering (SoE)', 'School of Law (SoL)', 'School of Management (SoM)', 'School of Science (SoS)', 'School of Arts (SoA)', 'School of Education (SoEd)', 'School of Medical Sciences (SMS)']

const statusOf = (e, now) => {
  const s = new Date(e.start), f = new Date(e.end + 'T23:59:59')
  if (now < s) return ['Upcoming', 0]
  if (now > f) return ['Completed', 100]
  return ['Ongoing', Math.round(((now - s) / (f - s)) * 100)]
}

/* ---------- Rotating word ---------- */
export function Rotator({ words }) {
  const [i, setI] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % words.length), 2200)
    return () => clearInterval(t)
  }, [words.length])
  return <span key={i} className="rotator">{words[i]}</span>
}

/* ---------- Animated counter ---------- */
export function Counter({ to }) {
  const ref = useRef(null)
  const [n, setN] = useState(0)
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      io.disconnect()
      const t0 = performance.now()
      const tick = (t) => {
        const p = Math.min((t - t0) / 1200, 1)
        setN(Math.round(to * (1 - Math.pow(1 - p, 3))))
        if (p < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    })
    io.observe(ref.current)
    return () => io.disconnect()
  }, [to])
  return <b ref={ref} className="count">{n}</b>
}

/* ---------- Events list (status computed from today's date) ---------- */
export function EventsList({ limit, filterable }) {
  const [tab, setTab] = useState('All')
  const now = new Date()
  const order = { Ongoing: 0, Upcoming: 1, Completed: 2 }
  let list = events.map((e) => ({ ...e, st: statusOf(e, now) }))
    .sort((a, b) => order[a.st[0]] - order[b.st[0]] || new Date(a.start) - new Date(b.start))
  if (tab !== 'All') list = list.filter((e) => e.st[0] === tab)
  if (limit) list = list.slice(0, limit)
  return (
    <>
      {filterable && (
        <div className="tabs">
          {['All', 'Ongoing', 'Upcoming', 'Completed'].map((t) => (
            <button key={t} className={t === tab ? 'on' : ''} onClick={() => setTab(t)}>{t}</button>
          ))}
        </div>
      )}
      <div className="grid">
        {list.map((e) => (
          <article className={'card event ' + e.st[0].toLowerCase()} key={e.title}>
            <span className="badge"><i />{e.st[0]}</span>
            <small>{e.label}</small>
            <h3>{e.title}</h3>
            <p>{e.text}</p>
            {e.st[0] === 'Ongoing' && (
              <div className="bar" title={e.st[1] + '% elapsed'}><div style={{ '--w': e.st[1] + '%' }} /></div>
            )}
          </article>
        ))}
        {!list.length && <p>No events in this category.</p>}
      </div>
    </>
  )
}

/* ---------- Join modal ---------- */
export function JoinModal({ open, onClose }) {
  const [done, setDone] = useState(false)
  useEffect(() => {
    if (!open) return
    const esc = (e) => e.key === 'Escape' && onClose()
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', esc)
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', esc) }
  }, [open, onClose])
  useEffect(() => { if (!open) setTimeout(() => setDone(false), 300) }, [open])
  if (!open) return null

  const submit = (e) => {
    e.preventDefault()
    const f = Object.fromEntries(new FormData(e.target))
    // TODO: replace with a backend request (see notes)
    const body = Object.entries(f).map(([k, v]) => `${k}: ${v}`).join('\n')
    window.location.href = `mailto:ief@ku.edu.np?subject=${encodeURIComponent('IEF General Membership Application')}&body=${encodeURIComponent(body)}`
    setDone(true)
  }
  return (
    <div className="backdrop" onClick={onClose}>
      <div className="modal" role="dialog" aria-modal="true" aria-label="Join IEF" onClick={(e) => e.stopPropagation()}>
        <button className="x" onClick={onClose} aria-label="Close">×</button>
        {done ? (
          <div className="done"><div className="tick">✓</div><h2>Application prepared</h2><p>Thank you. Please send the email that has opened to complete your application.</p><button className="btn" onClick={onClose}>Close</button></div>
        ) : (
          <form onSubmit={submit}>
            <h2>Join IEF as a General Member</h2>
            <p className="lead">Open to students of all schools of Kathmandu University.</p>
            <input name="name" placeholder="Full name" required autoFocus />
            <input name="email" type="email" placeholder="Email address" required />
            <input name="phone" placeholder="Phone number" />
            <select name="school" required defaultValue=""><option value="" disabled>Select your school</option>{schools.map((s) => <option key={s}>{s}</option>)}</select>
            <input name="program" placeholder="Programme and year of study" required />
            <textarea name="motivation" rows="3" placeholder="Reason for joining (optional)" />
            <button className="btn" type="submit">Submit application</button>
          </form>
        )}
      </div>
    </div>
  )
}
