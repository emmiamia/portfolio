import { NavLink } from 'react-router-dom';

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

      <main className="about-dark">
        <section className="about-dark__hero">
          <p className="about-dark__eyebrow">Hello there!</p>
          <h1>I'm Emma Yue</h1>
          <p className="about-dark__lede">
          Hello!
            I recently graduated from USC as a BS Computer Science student.
            I am passionate about building emotionally-aware UI-UX systems and empowering people.
          </p>
        </section>

        <section className="about-dark__section about-dark__cta">
          <h2>Let's connect</h2>
          <div className="about-dark__links about-dark__links--cta">
          <a
            href="mailto:emmayue@usc.edu"
            className="about-dark__cta-link about-dark__cta-link--primary"
            style={{ color: "black" }}
          >
            Send me an email
          </a>

            <a href="https://www.linkedin.com/in/emma-yue-900a7a264/" target="_blank" rel="noreferrer" className="about-dark__cta-link about-dark__cta-link--secondary">
              LinkedIn
            </a>
          </div>
        </section>
      </main>
    </>
  );
}

export default About;

