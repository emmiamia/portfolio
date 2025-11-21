import { NavLink } from 'react-router-dom';
import ssoImg from '../assets/images/sso.png';
import sso1 from '../assets/images/sso1.png';
import journey from '../assets/images/journey.png';
import journey2 from '../assets/images/journey2.png';
import ssoCalendar from '../assets/images/ssoCalendar.png';
import ssoCalendar2 from '../assets/images/ssoCalendar2.png';
import donateBanner from '../assets/images/donateBanner.png';
import ssoFooter from '../assets/images/ssoFooter.png';

import '../App.css';

function Sso() {
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
            <a href="/resume.pdf" target="_blank" rel="noreferrer">
              Resume
            </a>
          </div>
        </nav>
      </div>

      <main className="case sso">
        <header className="case__mast">
          <h1 className="case__mast-title">Student Symphony Orchestra</h1>
          <p className="case__mast-sub">
            Website Management & Content Strategy for USC's Student-Run Orchestra
          </p>
          <blockquote className="case__mast-quote">
            "On stage I played my part, and off stage I shaped the digital one — keeping our orchestra heard, seen, and connected."
          </blockquote>
        </header>

        <section className="case__banner" aria-label="SSO website banner">
          <img src={ssoImg} alt="Student Symphony Orchestra website preview" className="case__banner-img" />
        </section>

        <section className="case__section" id="overview">
          <h2>1. Project Overview</h2>
          <p>
            The Student Symphony Orchestra (SSO) is USC's only student-run orchestra, bringing together 
            non-music majors and music majors in collaborative music-making. As the organization's website 
            manager, I maintained and refined their Squarespace site, ensuring it remained an accurate, 
            accessible, and engaging platform for the orchestra's diverse community.
          </p>
          <p>
            The website was already structurally solid when I joined, but it needed ongoing maintenance, 
            improved clarity, and a consistent workflow for regular updates. My role focused on refining 
            the content experience, ensuring information remained accurate across semesters, and introducing 
            small but meaningful UX enhancements that improved usability without disrupting the existing 
            structure.
          </p>
          <ul className="case__meta">
            <li>Timeline: 2 years (ongoing maintenance)</li>
            <li>Role: Website Manager · Content Strategist · UX Refinement</li>
            <li>Platform: Squarespace</li>
            <li>
              <a href="https://studentsymphonyorchestra.org" target="_blank" rel="noreferrer" className="case__meta-link" style={{ color: '#F9AF3B' }}>
                Visit Live Site →
              </a>
            </li>
          </ul>
        </section>

        <section className="case__section" id="problem">
          <h2>2. What is the problem?</h2>
          
          <div>
            <p>
              How can a student-run organization maintain an accurate, accessible website that serves diverse 
              user needs—from prospective members to concert attendees to composers—while operating with 
              limited resources and frequent leadership transitions?
            </p>
          </div>

          <p style={{marginBottom: '1.5rem'}}>
            The SSO website had a solid foundation, but maintaining it effectively revealed several 
            critical challenges:
          </p>

          <div className="case__problem-grid">
            <div className="case__problem-card">
              <h3>Content Decay</h3>
              <p>
                Information became outdated as board members changed, concert seasons shifted, and member resources evolved. Without a clear workflow, content accuracy suffered during busy periods.
              </p>
            </div>

            <div className="case__problem-card">
              <h3>Inconsistent User Experience</h3>
              <p>
                While the structure was sound, inconsistent formatting across pages made it harder for users to scan and find information quickly.
              </p>
            </div>

            <div className="case__problem-card">
              <h3>Accessibility Gaps</h3>
              <p>
                Missing alt text on newer images, inconsistent heading structures, and keyboard navigation issues contradicted SSO's stated commitment to accessibility.
              </p>
            </div>
          </div>

          <div>
            <p>
              <strong>The core challenge:</strong> Establishing a sustainable system that could maintain quality and 
              accessibility over time, even as organizational leadership and priorities shifted.
            </p>
          </div>
        </section>

        <section className="case__section" id="research">
          <h2>3. Researching the current state</h2>
          
          <h3>Evaluative Research</h3>
          <p>
            As both a member musician of the orchestra and the site manager, I combined my own user experience 
            with feedback from other musicians and friends to identify existing issues:
          </p>
          <ul className="case__bullets">
            <li><strong className="sso-accent">Accessibility violations:</strong> Color contrast issues in 3 sections</li>
            <li><strong className="sso-accent">Content inconsistencies:</strong> Inconsistent formatting in concert archives</li>
            <li><strong className="sso-accent">Information architecture:</strong> Member resources were buried 3 clicks deep, making critical information hard to find</li>
          </ul>
          
          <h3>Discovering the needs</h3>
          <ul className="case__bullets">
            <li>How might we ensure information remains accurate and current across semesters?</li>
            <li>How might we improve accessibility?</li>
            <li>How might we establish sustainable maintenance workflows that survive leadership transitions?</li>
          </ul>
          <p>
            Some key issues were revealed that needed to be addressed:
          </p>

          <div className="case__insight-cards">
            <article className="case__insight-card">
              <h4>Prospective Members Need Clear Entry Points</h4>
              <p>
                Students interested in joining need immediate access to audition information, rehearsal schedules, 
                and membership requirements. 
              </p>
            </article>
            <article className="case__insight-card">
              <h4>Audience Members Want Concert Information</h4>
              <p>
                Concert-goers primarily seek event dates, ticket information, and program details. The site needed 
                a clear "Events" section with upcoming concerts prominently featured.
              </p>
            </article>
            <article className="case__insight-card">
              <h4>Composers Need Submission Guidelines</h4>
              <p>
                SSO's "Call for Scores" program is attracting composers from around the world. Submission guidelines, 
                deadlines, and past winners needed to be easily discoverable and well-organized.
              </p>
            </article>
            <article className="case__insight-card">
              <h4>Donation & Engagement Need Prominent Placement</h4>
              <p>
                Our orchestra runs almost solely on donations from audiences and other platforms. Having a popup asking 
                people to follow our email would keep musicians updated and notify others about events. Additionally, 
                a banner at the top of the page—similar to promotional banners on e-commerce sites—would make 
                donations more direct and clickable without requiring users to navigate to another page.
              </p>
            </article>
          </div>

          <div className="case__journey-map">
            <img className="case__journey-map-img"
              src={journey} 
              alt="journey map part 1" 
            />
            <img className="case__journey-map-img"
              src={journey2} 
              alt="journey map part 2" 
            />
          </div>
        </section>

        <section className="case__section" id="design">
          <h2>4. The prioritized solutions: workflow and refinements</h2>
          <p>
            Based on the identified needs and the three core questions, I prioritized solutions that addressed 
            user needs, accessibility requirements, and long-term sustainability. 
          </p>
          
          <div className="case__design-subsection">
            <h3>4.1 How might we ensure information remains accurate and current across semesters?</h3>
            <div className="case__split">
              <div className="case__side case__side--text">
                <p>
                  I created a systematic maintenance workflow to address content decay and ensure information accuracy:
                </p>
                <ul className="case__bullets">
                  <li><strong className="sso-accent">Semester-based update schedule:</strong> Established regular checkpoints for updating board/staff information, concert schedules, and member resources at the start of each semester</li>
                  <li><strong className="sso-accent">Site-wide calendar system:</strong> Maintained a public calendar that gets updated every semester (which corresponds to a performance season), providing audiences and prospective members with current concert dates and events</li>
                  <li><strong className="sso-accent">Member rehearsal schedule:</strong> Created a private, password-protected page for members where their rehearsal schedule is updated weekly, ensuring active members always have access to current rehearsal times and locations</li>
                  <li><strong className="sso-accent">Proactive communication:</strong> Regular check-ins with board members to gather updated information before it becomes urgent</li>
                </ul>
                <p>
                  This workflow addressed the need for <strong className="sso-accent">Prospective Members</strong> to find current 
                  audition information and membership requirements, ensured <strong className="sso-accent">Composers</strong> always 
                  had access to up-to-date submission guidelines and deadlines, and provided <strong className="sso-accent">Current Members</strong> 
                  with reliable, weekly-updated rehearsal schedules through a secure member portal.
                </p>
              </div>
              <aside className="case__side case__side--media" aria-label="SSO calendar system">
                <img
                  src={ssoCalendar}
                  alt="SSO site-wide calendar system showing semester-based updates"
                  className="case__side-img"
                />
                <img
                  src={ssoCalendar2}
                  alt="SSO site-wide calendar 2 "
                  className="case__side-img"
                />
              </aside>
            </div>
          </div>

          <div className="case__design-subsection">
            <h3>4.2 How might we improve accessibility?</h3>
            <p>
              Aligning with SSO's commitment to accessibility and equity, I identified and addressed gaps in the 
              existing site through systematic testing and refinements:
            </p>
            <ul className="case__bullets">
              <li><strong className="sso-accent">Nav bar</strong> updated nav bar for more direct display of information.</li>
              <li><strong className="sso-accent">Keyboard navigation:</strong> Tested and ensured all interactive elements remained keyboard-accessible.</li>
              <li><strong className="sso-accent">Link clarity:</strong> Refined link labels to be more descriptive and user-friendly.</li>
              <li><strong className="sso-accent">Visual consistency:</strong> Maintained consistent typography, image curation, and call-to-action styling across the site.</li>
            </ul>
            <p>
              These improvements ensured the website reflected SSO's stated values of equity and accessibility, 
              making the site usable for all members and visitors regardless of ability.
            </p>
          </div>

          <div className="case__design-subsection">
            <h3>4.3 Addressing Donation & Engagement Needs</h3>
            <div className="case__split">
              <div className="case__side case__side--text">
                <p>
                  Recognizing that the orchestra runs almost solely on donations, I implemented features to make 
                  engagement and donations more prominent and accessible:
                </p>
                <ul className="case__bullets">
                  <li><strong className="sso-accent">Email subscription popup:</strong> Added a popup asking visitors to follow our email list, keeping musicians updated and notifying others about events and opportunities</li>
                  <li><strong className="sso-accent">Prominent donation banner:</strong> Created a top-of-page banner—similar to promotional banners on e-commerce sites—that makes donations direct and clickable without requiring users to navigate to another page</li>
                  <li><strong className="sso-accent">Support section optimization:</strong> Ensured donation information and impact stories were clearly presented with consistent call-to-action styling</li>
                </ul>
                <p>
                  These enhancements made it easier for supporters to engage with SSO and contribute, addressing the 
                  critical need for sustainable funding while maintaining the organization's authentic, student-run identity.
                </p>
              </div>
              <aside className="case__side case__side--media" aria-label="Donation and engagement features">
                <img
                  src={sso1}
                  alt="SSO donation and engagement features"
                  className="case__side-img"
                />
              </aside>
            </div>
            <div className="case__banner case__banner--footer" style={{marginTop: '2rem'}} aria-label="Donation banner">
              <img src={donateBanner} alt="SSO donation banner" className="case__banner-img" />
            </div>
          </div>
        </section>

        <section className="case__section" id="impact">
          <h2>5. Impact & Outcomes</h2>
          <p>
            The maintenance workflow and iterative improvements have had positive impacts on SSO's operations:
          </p>
          <ul className="case__bullets">
            <li><strong className="sso-accent">Improved information accessibility:</strong> The updated navigation bar provides more direct display of information, making it easier for users to find what they need without navigating through multiple pages</li>
            <li><strong className="sso-accent">Reliable schedule systems:</strong> The site-wide calendar updated each semester and the weekly-updated member rehearsal schedule ensure that both audiences and members have access to current, accurate scheduling information</li>
            <li><strong className="sso-accent">Enhanced member experience:</strong> The private, password-protected member page with weekly rehearsal schedule updates ensures active members always have timely access to rehearsal information</li>
            <li><strong className="sso-accent">Increased engagement opportunities:</strong> The email subscription popup and prominent donation banner make it easier for visitors to stay connected and support the orchestra, addressing the critical need for sustainable funding</li>
            <li><strong className="sso-accent">Consistent user experience:</strong> Visual consistency improvements, clearer link labels, and keyboard navigation enhancements make the site more intuitive and user-friendly across all user groups</li>
            <li><strong className="sso-accent">Sustainable maintenance:</strong> Established workflows and documentation ensure the site can be effectively maintained across semesters and leadership transitions</li>
          </ul>
          <p>
            The website now serves as an effective tool for supporting SSO's mission of promoting equity, 
            accessibility, and innovation in collaborative music-making, with reliable maintenance ensuring it 
            meets the practical needs of members, audiences, and supporters.
          </p>
        </section>

        <section className="case__section" id="reflection">
          <h2>6. Conclusion</h2>
          
          <h3>Learnings</h3>
          <p>
            Managing the SSO website taught me valuable lessons about the importance of maintenance workflows, 
            content strategy, and iterative improvement. Working with an existing, well-structured site required 
            a different approach than building from scratch—one focused on refinement, consistency, and 
            sustainable processes rather than major redesigns.
          </p>
          <ul className="case__bullets">
            <li><strong className="sso-accent">User perspective matters:</strong> Being both a member musician and the site manager gave me firsthand insight into user needs. Combining my own experience with feedback from other musicians and friends helped identify real pain points that might have been overlooked from a purely administrative perspective.</li>
            <li><strong className="sso-accent">Small improvements compound:</strong> While major redesigns can be exciting, consistent maintenance and small UX enhancements often have more lasting impact on user experience. This project deepened my appreciation for the discipline of content management.</li>
            <li><strong className="sso-accent">Workflow sustainability matters:</strong> Creating a maintenance workflow that was both thorough and manageable proved essential for keeping the site current across busy semesters and leadership transitions. The systems I established needed to outlast my tenure.</li>
            <li><strong className="sso-accent">Platform constraints require creativity:</strong> Working within Squarespace's template constraints required creative problem-solving to achieve UX goals while respecting the existing structure.</li>
          </ul>

          <p>
            I'm grateful for the opportunity to contribute to SSO's mission through thoughtful website management, 
            and I hope the workflows I established will support future managers in maintaining the site effectively.
          </p>
          <div className="case__cta">
            <a href="https://studentsymphonyorchestra.org" target="_blank" rel="noreferrer" className="case__cta-link case__cta-link--primary" style={{backgroundColor: '#F9AF3B'}}>
              Visit Live Site →
            </a>
          </div>
        </section>

        <section className="case__banner case__banner--footer" aria-label="SSO footer banner">
          <img src={ssoFooter} alt="Student Symphony Orchestra footer" className="case__banner-img" />
        </section>
      </main>
    </>
  );
}

export default Sso;
