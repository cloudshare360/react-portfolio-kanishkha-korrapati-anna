import React, { useEffect, useState } from 'react';
import './App.css';
import './responsive.css';

const experience = [
  { period: 'Jan — May 2026', role: 'Financial Analyst Intern', company: 'The Grupe Company', place: 'Stockton, CA', bullets: ['$1M+ real-estate investment models with DCF, cash-flow projections, and sensitivity analysis.', 'Market and feasibility research for 10+ properties using comparable-sales data and Power Query.', 'Quarterly investor reporting covering financial performance, ROI, and project-level trends.'] },
  { period: 'Aug — Dec 2025', role: 'Investment Analyst & Economist', company: 'Eberhardt School of Business', place: 'Stockton, CA', bullets: ['Managed an $800K+ investment-grade fixed-income fund and supported portfolio allocation decisions.', 'Researched MINT, BSCS, and MSTI using Bloomberg Terminal, holdings, performance, and risk analysis.', 'Built Excel models and investment presentations covering valuation, rates, inflation, spreads, and sector exposure.'] },
  { period: 'Aug 2025 — May 2026', role: 'Finance Student Senator', company: 'Associated Students, University of the Pacific', place: 'Stockton, CA', bullets: ['Supported funding, budget planning, and governance for the Eberhardt School of Business.', 'Evaluated conference funding and priorities across two semesters; chaired the Rules Committee.'] },
  { period: 'Aug 2023 — Jun 2024', role: 'Financial Business Assistant', company: 'VIBRI MEDIA', place: 'Hyderabad, India', bullets: ['Managed budgets, contracts, logistics, and vendor payments totaling $500K+ across productions and events.', 'Negotiated 12–15% vendor savings and used SAP FICO S/4HANA for payments and reconciliation.', 'Built Excel and Power Query reporting that supported approximately $100K in overall profit.'] }
];
const earlierRoles = [
  ['Hospitality & Production Manager', 'Indian Premier League', '$500K+ event budgets · 12–15% vendor savings'],
  ['Hospitality & Logistics Lead', 'Celebrity Cricket League', '8 teams / 250+ people · 25% logistics cost reduction'],
  ['Event Coordinator', 'South Indian International Movie Awards', '200+ VIP guests · 20–25% event cost reduction'],
  ['Lead Building Manager', 'University of the Pacific — DUC', 'Supervised daily operations and 35+ student staff']
];
const capabilities = [
  ['Financial analysis', 'DCF modeling', 'Valuation', 'Fixed income', 'ROI analysis', 'Budgeting & forecasting'],
  ['Analytics', 'Advanced Excel', 'Power BI', 'Power Query', 'Python', 'MySQL'],
  ['Markets & systems', 'Bloomberg Terminal', 'SAP FICO S/4HANA', 'Credit analysis', 'Portfolio risk'],
  ['Communication', 'Investor reporting', 'Executive dashboards', 'PowerPoint', 'Cross-functional leadership']
];
const caseStudies = [
  { number: '01', label: 'Real estate underwriting', title: 'Evaluating $1M+ investment opportunities', question: 'Which properties showed a supportable return profile under changing assumptions?', analysis: ['DCF and cash-flow projections', 'Sensitivity testing', 'Comparable-sales and feasibility research', 'Power Query and Power BI'], delivery: 'Evaluated 10+ properties and translated project-level ROI and performance trends into quarterly investor reporting.' },
  { number: '02', label: 'Fixed-income strategy', title: 'Supporting allocation for an $800K+ fund', question: 'How should an investment-grade portfolio respond to rates, inflation, credit spreads, and sector risk?', analysis: ['Bloomberg Terminal research', 'ETF holdings and performance review', 'Macroeconomic and credit analysis', 'Advanced Excel modeling'], delivery: 'Synthesized risk exposure, valuation insights, and market trends into fund-review presentations and allocation recommendations.' }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePhoto, setActivePhoto] = useState(0);
  const [photosPaused, setPhotosPaused] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (photosPaused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const interval = window.setInterval(() => setActivePhoto((current) => (current + 1) % 2), 5500);
    return () => window.clearInterval(interval);
  }, [photosPaused]);
  return <div className="site-shell">
    <header className="nav-wrap"><nav className="nav container" aria-label="Primary navigation">
      <a className="brand" href="#top" onClick={closeMenu}><span>KA</span>Kanishkha Anna</a>
      <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation">{menuOpen ? 'Close' : 'Menu'}</button>
      <div className={`nav-links ${menuOpen ? 'open' : ''}`}><a href="#work" onClick={closeMenu}>Case studies</a><a href="#experience" onClick={closeMenu}>Experience</a><a href="#expertise" onClick={closeMenu}>Expertise</a><a href="#education" onClick={closeMenu}>Education</a><a className="nav-cta" href="#contact" onClick={closeMenu}>Let’s talk</a></div>
    </nav></header>
    <main id="top">
      <section className="hero container"><div className="eyebrow">Financial analysis · Investment research · Data analytics</div><div className="hero-grid"><div>
        <h1>Turning financial complexity into <em>clear decisions.</em></h1>
        <p className="hero-copy">Financial Mathematics graduate with hands-on experience in real-estate underwriting, fixed-income portfolio research, and finance operations. I build models, investigate risk, and communicate the story behind the numbers.</p>
        <div className="actions"><a className="button primary" href="#work">Explore my work</a><a className="button text" href="Kanishkha_Korrapati_Anna_Resume_2026.pdf" target="_blank" rel="noreferrer">View résumé ↗</a></div>
      </div><aside className="hero-card"><div className="availability"><i />Open to finance & analytics roles</div><div className="portrait-carousel" onMouseEnter={() => setPhotosPaused(true)} onMouseLeave={() => setPhotosPaused(false)} onFocus={() => setPhotosPaused(true)} onBlur={() => setPhotosPaused(false)} aria-label="Kanishkha portrait gallery"><img className={`profile-photo ${activePhoto === 0 ? 'active' : ''}`} src={`${process.env.PUBLIC_URL}/images/kanishkha-professional.jpeg`} alt={activePhoto === 0 ? 'Kanishkha Korrapati Anna in professional attire' : ''} width="1200" height="1600" fetchPriority="high" aria-hidden={activePhoto !== 0} /><img className={`profile-photo ${activePhoto === 1 ? 'active' : ''}`} src={`${process.env.PUBLIC_URL}/images/kanishka.png`} alt={activePhoto === 1 ? 'Kanishkha Korrapati Anna' : ''} width="619" height="610" loading="lazy" aria-hidden={activePhoto !== 1} /><div className="photo-controls" aria-label="Choose portrait">{['Professional portrait', 'Personal portrait'].map((label, index) => <button type="button" key={label} className={activePhoto === index ? 'active' : ''} aria-label={`Show ${label.toLowerCase()}`} aria-pressed={activePhoto === index} onClick={() => setActivePhoto(index)}><span /></button>)}</div></div><div><strong>Based in California</strong><p>Eligible to work in the U.S. on OPT; no sponsorship required for initial employment.</p></div></aside></div>
      <div className="metric-strip"><div><strong>$1M+</strong><span>Real-estate investments evaluated</span></div><div><strong>$800K+</strong><span>Fixed-income fund managed</span></div><div><strong>25%</strong><span>Peak logistics cost reduction</span></div><div><strong>10+</strong><span>Properties researched</span></div></div></section>
      <section id="work" className="section case-study-section"><div className="container"><div className="section-head"><div><span className="kicker">Evidence of work</span><h2>From question to recommendation.</h2></div><p>Two examples of how I frame financial questions, apply analytical tools, and communicate decision-ready findings.</p></div><div className="case-study-grid">{caseStudies.map((study) => <article className="case-study" key={study.number}><div className="case-study-top"><span>{study.number}</span><small>{study.label}</small></div><h3>{study.title}</h3><div className="case-block"><h4>Decision question</h4><p>{study.question}</p></div><div className="case-block"><h4>Analysis</h4><ul>{study.analysis.map((item) => <li key={item}>{item}</li>)}</ul></div><div className="case-delivery"><h4>Delivered</h4><p>{study.delivery}</p></div></article>)}</div><p className="confidentiality-note">Presented at a high level to respect employer and fund confidentiality.</p></div></section>
      <section id="experience" className="section container"><div className="section-head"><div><span className="kicker">Selected experience</span><h2>Analysis with real-world stakes.</h2></div><p>From underwriting property investments to allocating fixed-income capital, my work connects rigorous analysis to operating decisions.</p></div>
        <div className="timeline">{experience.map((item) => <article className="role" key={item.role}><div className="role-meta"><span>{item.period}</span><small>{item.place}</small></div><div><h3>{item.role}</h3><h4>{item.company}</h4><ul>{item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul></div></article>)}</div>
        <div className="earlier-grid">{earlierRoles.map(([role, org, impact]) => <article key={role}><span>{org}</span><h3>{role}</h3><p>{impact}</p></article>)}</div></section>
      <section id="expertise" className="section dark-section"><div className="container"><div className="section-head inverse"><div><span className="kicker">Working toolkit</span><h2>Finance depth, data fluency.</h2></div><p>A practical toolkit for investigating investments, monitoring performance, and presenting recommendations.</p></div><div className="skills-grid">{capabilities.map(([title, ...items], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div></div></section>
      <section id="education" className="section container"><div className="section-head"><div><span className="kicker">Education & credentials</span><h2>Built on quantitative foundations.</h2></div></div><div className="education-grid">
        <article className="degree featured"><span>May 2026</span><h3>Master of Science<br/>Financial Mathematics</h3><p>University of the Pacific<br/>Eberhardt School of Business</p><small>Stockton, California</small></article>
        <article className="degree"><span>June 2023</span><h3>Bachelor of Commerce</h3><p>Accounting & Business Management<br/>Osmania University</p><small>Hyderabad, India</small></article>
        <article className="credentials"><h3>Credentials</h3><ul><li>CFA Institute Investment Foundations</li><li>Bloomberg Market Concepts</li><li>Bloomberg Finance Fundamentals</li></ul></article>
      </div></section>
      <section id="contact" className="contact"><div className="container contact-grid"><div><span className="kicker">Start a conversation</span><h2>Let’s put the numbers to work.</h2><p>I’m interested in financial analyst, investment analyst, FP&amp;A, and finance-focused data analytics opportunities.</p></div><div className="contact-links"><a href="mailto:kanishkhasri12@gmail.com">kanishkhasri12@gmail.com <span>↗</span></a><a href="tel:+14088295997">+1 408 829 5997 <span>↗</span></a><a href="Kanishkha_Korrapati_Anna_Resume_2026.pdf" target="_blank" rel="noreferrer">Download résumé <span>↓</span></a></div></div></section>
    </main><footer><div className="container"><span>© 2026 Kanishkha Korrapati Anna</span><span>Finance · Analytics · Strategy</span></div></footer>
  </div>;
}
export default App;
