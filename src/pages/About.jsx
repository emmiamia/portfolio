import { NavLink } from 'react-router-dom';
import heroGif from '../assets/images/hero.gif';

import '../App.css';

function About() {
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

      <main className="about-simple">
        <section className="about-simple__hero">
          <div>
            <p className="about-simple__eyebrow">Oh. Hello there!</p>
            <h1>Emma Yue</h1>
            <p className="about-simple__lede">
              USC-trained BS Computer Science graduate building emotion-forward UX systems. I love pairing engineering rigor with calm, thoughtful design.
            </p>
            <div className="about-links">
              <a href="mailto:hello@emmayeu.com">hello@emmayeu.com</a>
              <a href="/resume.pdf" target="_blank" rel="noreferrer">
                Résumé
              </a>
            </div>
          </div>
          <div className="about-simple__media">
            <img src={heroGif} alt="Emma Yue collage" />
          </div>
        </section>

        <section className="about-simple__section">
          <h2>Who I am</h2>
          <p>
            I blend backend architecture with human-centered research to build calm, accountable tools. My craft sits at the intersection of systems thinking,
            emotionally-aware UX, and documentation that helps teams stay aligned.
          </p>
        </section>

        <section className="about-simple__section">
          <h2>Where I’m headed</h2>
          <p>
            Preparing for HCI/software management graduate programs and seeking collaborations that value clarity, care, and measurable impact. If your work blends
            design, research, and engineering, I’d love to connect.
          </p>
        </section>

        <section className="about-simple__section about-cta">
          <h2>Let’s connect</h2>
          <div className="about-links about-links--cta">
            <a href="mailto:hello@emmayeu.com" className="case__cta-link case__cta-link--primary">
              Email me
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="case__cta-link case__cta-link--secondary">
              LinkedIn
            </a>
          </div>
        </section>
      </main>
    </>
  );
}

export default About;

