import { NavLink, Link } from 'react-router-dom';
import nourishImg from '../assets/images/norish.png';
import tripImg from '../assets/images/tripeasy.png';
import ssoImg from '../assets/images/SSO.png';
import workbanner from '../assets/images/workbanner.png';

import '../App.css';

function Home() {
  const projects = [
    {
      id: 1,
      title: 'NourishSteps',
      meta: 'Recovery Companion App',
      description:
        'A calm, human‑centered check‑in and meal support app for gentle, non‑judgmental routines. Built full‑stack with calendar diary, multi‑phase meal timer, and 7‑day streaks/stats.',
        image: nourishImg,
      align: 'right',
      tags: ['Full-Stack', 'Behavior-Support Tool', 'Human-Centered Design'],
    },
    {
      id: 2,
      title: 'TripEasy',
      meta: 'Mapping & Travel Organization Tool',
      description:
        'A collaborative trip planning app that centralizes itineraries, logistics, budgets, and maps into one shared workspace.',
        image: tripImg,
      align: 'left',
      tags: ['Travel Organization', 'Interaction Design', 'Experience Flow'],
    },
    {
      id: 3,
      title: 'WorkUp™',
      meta: 'Frontend Team Lead · UX Engineer · 2024',
      description:
        'Led a team of 5 developers to improve user experience and platform reliability for a social video platform serving 80+ routes. Resolved 30+ critical bugs, built 60+ reusable components, and increased reliability by 40%.',
      image: workbanner,
      align: 'right',
      tags: ['UX Engineering', 'Team Leadership', 'Full-Stack'],
    },
    {
      id: 4,
      title: 'Student Symphony Orchestra',
      meta: 'Website Management (Squarespace)',
      description:
        'Led the redesign and ongoing maintenance of the orchestra’s website, improving content structure, accessibility, and user engagement.',
        image: ssoImg,
      align: 'left',
      tags: ['Content System', 'Community Engagement'],
    },
  ];

  return (
    <>
      <div className="site-nav-wrapper">
        <nav className="site-nav">
          <NavLink to="/" className="site-nav__logo">
            Emma Yue
          </NavLink>
          <div className="site-nav__links">
            <NavLink to="/home" end>
              Past Works
            </NavLink>
            <NavLink to="/about" end>
              About
            </NavLink>
            <a href="/resume.pdf" target="_blank" rel="noreferrer">
              Resume
            </a>
          </div>
        </nav>
      </div>
      <main className="works">
        <h1 className="works__title">Projects</h1>
        <p className="works__hint">Click project card to see details</p>
        <ul className="works__list">
          {projects.map((p, idx) => (
            <li
              key={p.id}
              className={`work ${(idx + 1) % 2 === 0 ? 'work--even' : 'work--odd'} ${idx === 3 ? 'work--full' : ''}`}
            >
              {idx === 0 && (
                <Link
                  to="/nourishsteps"
                  className="work__overlay"
                  aria-label="Open NourishSteps project"
                />
              )}
              {idx === 1 && (
                <Link
                  to="/tripeasy"
                  className="work__overlay"
                  aria-label="Open TripEasy project"
                />
              )}
              {idx === 2 && (
                <Link
                  to="/workup"
                  className="work__overlay"
                  aria-label="Open WorkUp project"
                />
              )}
              {idx === 3 && (
                <Link
                  to="/sso"
                  className="work__overlay"
                  aria-label="Open SSO project"
                />
              )}
              <div className="work__media">
                <img src={p.image} alt={p.title} />
              </div>
              <div className="work__info">
                <h3 className="work__title">{p.title}</h3>
                <p className="work__meta">{p.meta}</p>
                <p className="work__intro">{p.description}</p>
                <ul className="work__tags" aria-label="Tags">
                  {p.tags.map(tag => (
                    <li key={tag} className="tag">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default Home;

