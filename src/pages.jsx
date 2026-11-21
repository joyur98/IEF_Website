import { Link } from 'react-router-dom'
import { Rotator, Counter, EventsList } from './components.jsx'
import logo from './assets/logo.png'

const Page = ({ title, lead, children }) => (
  <section className="page">
    <h1>{title}</h1>
    {lead && <p className="lead">{lead}</p>}
    {children}
  </section>
)

// TODO: replace with real data
const plan = [
  ['Nov–Dec 2026', 'Institutional MoUs and Course Development'],
  ['Jan–Feb 2027', 'International Winter School'],
  ['Feb–May 2027', 'Research by seven or more teams'],
  ['Jun–Jul 2027', 'Compendium and Documentary production'],
  ['Aug 2027', 'National Policy Dialogue'],
]
const partners = [
  ['IPN-LSDTC', 'Instituto Politécnico Nacional (IPN), Mexico, and its Laboratory of Systems for the Diagnosis and Treatment of Cancer (LSDTC). The partnership provides exposure to interdisciplinary research in practice and connects IEF to an academic network outside Nepal.'],
  ['UNESCO Chair in Teacher Education', 'Based in the School of Education, Kathmandu University. The Chair supports teaching, learning and education research through an international network of academic partners, enabling IEF to design accessible interdisciplinary programmes.'],
]
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
const projects = [
  ['Interdisciplinary Cancer Research Initiative', 'Winter school, team research, a compendium, a documentary and a National Policy Dialogue. All funds raised are donated to support cancer patients.'],
  ['Community Project Two', 'Description to be added.'],
]
const articles = [
  ['Article Title', 'Author Name', 'Abstract to be added.'],
  ['Article Title', 'Author Name', 'Abstract to be added.'],
]

export const Home = ({ onJoin }) => (
  <>
    <section className="hero">
      <span className="blob b1" /><span className="blob b2" /><span className="blob b3" />
      <div className="hero-content">
        <p className="eyebrow">Kathmandu University</p>
        <h1>Interdisciplinary Exchange Forum</h1>
        <p className="rot">Where our schools <Rotator words={['collaborate', 'research', 'publish', 'exchange ideas']} /></p>
        <p>An interdisciplinary student forum open to undergraduate, graduate and postgraduate students across all seven schools of Kathmandu University.</p>
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
    <Page title="Cancer Research Initiative" lead="2027 theme: Cancer. An interdisciplinary programme spanning teaching, research, publication and policy.">
      <div className="grid">
        <div className="card"><h3>Interdisciplinary Course</h3><p>A course covering the historical, scientific, technological, legal, ethical, social and economic aspects of cancer.</p></div>
        <div className="card"><h3>Winter School and Research</h3><p>A two-week winter school, followed by three to four months of team research (February–May 2027).</p></div>
        <div className="card"><h3>Compendium and Documentary</h3><p>Research outcomes compiled into a compendium, followed by a documentary based on the findings.</p></div>
        <div className="card"><h3>National Policy Dialogue</h3><p>A dialogue with members of the National Planning Commission, Members of Parliament and Ministers.</p></div>
      </div>
      <div className="impact">All funds raised through IEF’s cancer research initiative will be donated to support cancer patients.</div>
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

export const About = () => (
  <Page title="About Us">
    <div className="about-top">
      <img className="about-logo" src={logo} alt="IEF logo" />
      <div>
        <p className="lead">The Interdisciplinary Exchange Forum (IEF) is an interdisciplinary student forum at Kathmandu University, open to undergraduate, graduate and postgraduate students across all seven schools of the university.</p>
        <p>Contemporary global issues are complex and extend across disciplines. IEF was established to bridge this gap by expanding interdisciplinary exchange across the seven schools and by providing collaborative facilities for students.</p>
      </div>
    </div>
    <h2 className="board-title">Objectives</h2>
    <div className="grid">
      <div className="card"><p>To foster quality interdisciplinary academic exchange among the undergraduate, graduate and postgraduate students of the seven schools of Kathmandu University.</p></div>
    </div>
    <h2 className="board-title">Collaborations</h2>
    <div className="grid">
      {partners.map(([n, d]) => <div className="card" key={n}><h3>{n}</h3><p>{d}</p></div>)}
    </div>
    <h2 className="board-title">Cancer Research Initiative</h2>
    <div className="grid">
      <div className="card"><h3>Course and Winter School</h3><p>IEF will build an interdisciplinary cancer research course. The International Winter School (2027) runs for two weeks: foundations of interdisciplinary research in week one, and interdisciplinary research in cancer in week two, with researchers, professors and specialists from the laboratory.</p></div>
      <div className="card"><h3>Research</h3><p>After the winter school, participants conduct interdisciplinary research on cancer for three to four months (February–May 2027), applying the skills learned.</p></div>
      <div className="card"><h3>Compendium and Documentary</h3><p>A compendium is a concise, organised collection of key information and findings on a single subject. IEF will publish one gathering the research outcomes, then produce a documentary for the university community, students and the general public.</p></div>
      <div className="card"><h3>National Policy Dialogue</h3><p>IEF will release the compendium and documentary at a dialogue with members of the National Planning Commission, Members of Parliament and Ministers, to consider how the findings can inform cancer-related health policy in Nepal.</p></div>
    </div>
    <div className="impact"><b>Funding and Social Impact.</b> All funds raised through IEF’s cancer research initiative will be donated to support cancer patients.</div>
  </Page>
)

export const Schools = () => (
  <Page title="Summer and Winter Schools">
    <div className="card wide">
      <h3>International Winter School on Interdisciplinary Research</h3>
      <p><b>2027 Theme: Cancer</b> · January–February 2027 · Two weeks</p>
      <p>The programme includes participation of researchers, professors and specialists from the laboratory. Participants subsequently conduct interdisciplinary cancer research for three to four months (February–May 2027).</p>
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

export const Journal = () => (
  <Page title="Student Journal" lead="Peer-reviewed interdisciplinary work by Kathmandu University students.">
    <div className="grid">
      {articles.map(([t, a, d], i) => <div className="card" key={i}><h3>{t}</h3><small>{a}</small><p>{d}</p></div>)}
    </div>
    <p><a className="btn" href="mailto:ief@ku.edu.np?subject=Journal%20Submission">Submit a manuscript</a></p>
  </Page>
)

export const Projects = () => (
  <Page title="Community Projects">
    <div className="grid">
      {projects.map(([t, d], i) => <div className="card" key={i}><h3>{t}</h3><p>{d}</p></div>)}
    </div>
  </Page>
)

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

export const Events = () => (
  <Page title="Events" lead="Status is determined automatically from the current date.">
    <EventsList filterable />
  </Page>
)
