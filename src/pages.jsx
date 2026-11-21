import { Link } from 'react-router-dom'
import { Rotator, Counter, EventsList } from './components.jsx'

const Page = ({ title, lead, children }) => (
  <section className="page">
    <h1>{title}</h1>
    {lead && <p className="lead">{lead}</p>}
    {children}
  </section>
)

// Data about the actual events 
const plan = [
  ['Nov–Dec 2026', 'Institutional MoUs and Course Development'],
  ['Jan–Feb 2027', 'International Winter School'],
  ['Feb–May 2027', 'Research by seven or more teams'],
  ['Jun–Jul 2027', 'Compendium and Documentary production'],
  ['Aug 2027', 'National Policy Dialogue'],
]

// Partners of the IEF
const partners = [
  ['IPN-LSDTC', 'National Polytechnic Institute (Instituto Politécnico Nacional) and its Laboratory of Systems for the Diagnosis and Treatment of Cancer.'],
  ['UNESCO Chair in Teacher Education', 'Kathmandu University, affiliated with the United Nations Educational, Scientific and Cultural Organization.'],
]

//Members of the IEF
const boards = [
  { title: 'Executive Board', roles: [
    ['President', [['Sudhanshu Raj Bhattarai', 'SoE']]],
    ['Vice President', [['Samriddhi Mainali', 'SoL']]],
    ['Secretary', [['Aadim Sapkota', 'SoE']]],
    ['Joint Secretary', [['Barsha Neupane', 'SoM']]],
    ['Treasurer', [['Swopnim Ghimire', 'SoS']]],
    ['School Representatives', [['Uttam Ghosh', 'SoA'], ['Bibek Paudel', 'SoEd'], ['Nishan Gautam', 'SoE'], ['Pratyasha Thapa', 'SoL'], ['Melina Niraula', 'SoM'], ['Navnita Shah', 'SMS'], ['Prarthana Thapa', 'SoS']]],
    ['Executive Members', [['Bishwas Dhakal', 'SoEd'], ['Honey Raj Mahato', 'SMS'], ['Aagya Adhikari', 'SoS']]],
  ]},
  { title: 'Editorial Board', roles: [
    ['Editor-in-Chief', [['Aakash Shah', 'SMS']]],
    ['Co-Editor-in-Chief', [['Pranav Bikram Singh Katwal', 'SoS']]],
    ['Copy Editors', [['Kritika KC', 'SoL'], ['Tapasya Adhikari', 'SoL'], ['Sujal Budhathoki', 'SoM'], ['Swosti Dhakal', 'SoM']]],
    ['Design Director', [['Pratistha Bhatta', 'SMS']]],
    ['Designers', [['Himesh Bhandari', 'SoE'], ['Garima Bhusal', 'SoL']]],
    ['Technical In-Charge', [['Ruyoj KC', 'SoE']]],
    ['Production Manager', [['Hrishita Chaudhary', 'SoE']]],
  ]},
  { title: 'Media Production Team', roles: [
    ['Production Manager', [['Sahaj Wagle', 'SoE']]],
    ['Videographer', [['Prabin Babu Basel', 'SoE']]],
    ['Video Editor', [['Aashish Bhandari', 'SoA']]],
    ['Script Writers', [['Sawana Bhatta', 'SoEd'], ['Aastha Timilsena', 'SoL'], ['Brity Chaudhary', 'SoS']]],
    ['Social Media Handler', [['Saurav Kharel', 'SoA']]],
  ]},
]

// Community projects of the IEF
const projects = [
  ['Community Project One', 'Description to be added.'],
  ['Community Project Two', 'Description to be added.'],
]

// Articles in the IEF student journal
const articles = [
  ['Article Title', 'Author Name', 'Abstract to be added.'],
  ['Article Title', 'Author Name', 'Abstract to be added.'],
]

// Home page
export const Home = ({ onJoin }) => (
  <>
    <section className="hero">
      <span className="blob b1" /><span className="blob b2" /><span className="blob b3" />
      <div className="hero-content">
        <p className="eyebrow">Kathmandu University</p>
        <h1>Interdisciplinary Exchange Forum</h1>
        <p className="rot">Where our schools <Rotator words={['collaborate', 'research', 'publish', 'exchange ideas']} /></p>
        <p>A platform enabling the schools of Kathmandu University to communicate, collaborate and conduct research across disciplines.</p>
        <div className="actions">
          <button className="btn" onClick={onJoin}>Join IEF</button>
          <Link className="btn ghost" to="/events">Ongoing Events</Link>
          <Link className="btn ghost" to="/schools">Explore Schools</Link>
        </div>
      </div>
    </section>
    <section className="stats">
      {[[7, 'Schools represented'], [3, 'Boards and teams'], [2, 'International partners'], [5, 'Milestones, 2026–27']].map(([n, l]) => (
        <div className="stat" key={l}><Counter to={n} /><span>{l}</span></div>
      ))}
    </section>
    <Page title="Ongoing and Upcoming Events">
      <EventsList limit={3} />
      <p><Link className="btn" to="/events">View all events</Link></p>
    </Page>
    <Page title="Annual Work Plan">
      <ol className="timeline">
        {plan.map(([date, task], i) => (
          <li key={task}><b>{String(i + 1).padStart(2, '0')}</b><span className="date">{date}</span><span>{task}</span></li>
        ))}
      </ol>
    </Page>
    <Page title="Collaborations" lead="Partnerships supporting the interdisciplinary course and the 2027 Winter School.">
      <div className="grid">
        {partners.map(([n, d]) => <div className="card" key={n}><h3>{n}</h3><p>{d}</p></div>)}
      </div>
    </Page>
  </>
)

// About page
export const About = () => (
  <Page title="About Us" lead="The Interdisciplinary Exchange Forum (IEF) is a Kathmandu University initiative connecting multiple schools.">
    <div className="grid">
      <div className="card"><h3>Mission</h3><p>To be completed.</p></div>
      <div className="card"><h3>Vision</h3><p>To be completed.</p></div>
      <div className="card"><h3>Activities</h3><p>A student journal, community projects, and international summer and winter schools.</p></div>
    </div>
  </Page>
)

// Schools page
export const Schools = () => (
  <Page title="Summer and Winter Schools">
    <div className="card wide">
      <h3>International Winter School on Interdisciplinary Research</h3>
      <p><b>2027 Theme: Cancer</b> · January–February 2027 · Two weeks</p>
      <ul>
        <li><b>Week 1 (Monday–Friday):</b> Foundations of Interdisciplinary Research, delivered by the UNESCO Chair in Teacher Education, Kathmandu University.</li>
        <li><b>Week 2 (Monday–Friday):</b> Interdisciplinary Research in Cancer, delivered by the National Polytechnic Institute, Laboratory of Systems for the Diagnosis and Treatment of Cancer (IPN-LSDTC).</li>
      </ul>
    </div>
    <div className="card wide">
      <h3>Summer School</h3>
      <p>Details to be announced.</p>
    </div>
  </Page>
)

// Journal page
export const Journal = () => (
  <Page title="Student Journal" lead="Peer-reviewed interdisciplinary work by Kathmandu University students.">
    <div className="grid">
      {articles.map(([t, a, d], i) => <div className="card" key={i}><h3>{t}</h3><small>{a}</small><p>{d}</p></div>)}
    </div>
    <p><a className="btn" href="mailto:ief@ku.edu.np?subject=Journal%20Submission">Submit a manuscript</a></p>
  </Page>
)

// Projects page
export const Projects = () => (
  <Page title="Community Projects">
    <div className="grid">
      {projects.map(([t, d], i) => <div className="card" key={i}><h3>{t}</h3><p>{d}</p></div>)}
    </div>
  </Page>
)

// Members page
export const Members = () => (
  <Page title="Members" lead="Boards and teams of the Interdisciplinary Exchange Forum, established 17 November 2026.">
    {boards.map((b) => (
      <div key={b.title}>
        <h2 className="board-title">{b.title}</h2>
        <div className="grid">
          {b.roles.map(([role, people]) => (
            <div className="card" key={role}>
              <h3>{role}</h3>
              <ul className="people">
                {people.map(([name, school]) => (
                  <li key={name}>{name} <small>({school})</small></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    ))}
  </Page>
)

// Contact page
export const Contact = () => (
  <Page title="Contact">
    <form className="card wide" action="mailto:ief@ku.edu.np" method="post" encType="text/plain">
      <input name="name" placeholder="Name" required />
      <input name="email" type="email" placeholder="Email" required />
      <textarea name="message" rows="5" placeholder="Message" required />
      <button className="btn" type="submit">Send</button>
    </form>
    <p>Kathmandu University, Dhulikhel, Kavrepalanchok, Nepal · ief@ku.edu.np</p>
  </Page>
)

// Events page
export const Events = () => (
  <Page title="Events" lead="Status is determined automatically from the current date.">
    <EventsList filterable />
  </Page>
)
