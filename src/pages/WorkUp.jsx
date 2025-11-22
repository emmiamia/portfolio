import { NavLink } from 'react-router-dom';
import workbanner from '../assets/images/workbanner.png';
import workfooter from '../assets/images/workfooter.png';
import gemGif from '../assets/images/gem.gif';
import hero from '../assets/images/hero.gif';
import meetings from '../assets/images/meetings.png';

import '../App.css';

function WorkUp() {
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

      <main className="case workup">
        <header className="case__mast">
          <h1 className="case__mast-title">WorkUp™</h1>
          <p className="case__mast-sub">
            Leading User Experience Improvements in a Social Video Platform
          </p>
          <blockquote className="case__mast-quote">
            "In a platform where people build careers and connect through video, every interaction matters—from seamless navigation to reliable features that users can trust."
          </blockquote>
        </header>
        <section className="case__banner" aria-label="SSO website banner">
          <img src={workbanner} alt="Student Symphony Orchestra website preview" className="case__banner-img" />
        </section>

        <section className="case__section" id="overview">
          <h2>1. Project Overview</h2>
          <p>
            WorkUp is “America’s TikTok with a professional twist”—a video-first talent platform where people explore career advice, 
            find mentors, discover jobs, and access AI-powered coaching in one place. Beyond the core feed, the product offers 
            WorkUp Premium, an income-share career accelerator with a 100% placement rate since 2020, plus tools like AI resume builders, 
            an AI interview copilot, and a video job listing marketplace backed by partners such as NVIDIA, Google, Microsoft, and UC Berkeley Launch.
          </p>
          <p>
            My mandate was to ensure the product experience felt as polished as WorkUp’s promise: inspiring content, reliable navigation, 
            and trustworthy flows for job seekers, creators, and premium members. As Frontend Team Lead & UX Engineer, I led a team of five 
            developers to stabilize the 80+ route application, refine high-stakes onboarding paths (Premium sign-up, AI tools, video feed), 
            and codify design system rules so every function—from “Sign In” to “Get hired”—reflected the brand’s credibility.
          </p>
          <p>
            Over four months we resolved 30+ critical UX blockers (e.g., feed refreshes, cross-browser animation bugs), introduced a reusable 
            component system, and increased platform reliability by 40%, giving WorkUp the stability needed to scale its mission of helping students and young professionals land better careers.
          </p>
          <ul className="case__meta">
            <li>Timeline: May — August 2024</li>
            <li>Role: Frontend Team Lead · UX Engineer</li>
            <li>Stack: React · Redux Toolkit · TypeScript · Agile/Scrum</li>
            <a href="https://studentsymphonyorchestra.org" target="_blank" rel="noreferrer" className="case__meta-link" style={{ color: '#30B1AA' }}>
                Visit Live Site →
            </a>
          </ul>
        </section>

        <section className="case__section" id="problem">
          <h2>2. Problem Space</h2>
          <p>
            As WorkUp layered on Premium upsells, AI resume tools, and video job feeds, issues surfaced across multiple layers 
            of the experience. We organized the most disruptive problems into four clusters to clarify scope:
          </p>

          <div className="case__problem-grid">
            <div className="case__problem-card" style={{ borderLeft: '4px solid #30B1AA' }}>
              <div className="case__problem-head">
                <span className="case__problem-index">1</span>
                <h3>Playback & Feed Stability</h3>
              </div>
              <p>
                Unintended page refreshes interrupted the TikTok-style feed, autoplay events occasionally doubled audio, the Gem 
                button reloaded the page, and scroll restoration was unreliable—making discovery feel broken.
              </p>
              <p>
                We also saw video overlays lag after ads, saved posts jumping to the top, and “For You” filters not persisting between sessions.
              </p>
              <div className="case__problem-implication">
                <strong>Design implication:</strong> Centralize playback state, debounce feed interactions, and persist scroll/filters so browsing feels continuous even as routes change.
              </div>
            </div>

            <div className="case__problem-card" style={{ borderLeft: '4px solid #30B1AA' }}>
              <div className="case__problem-head">
                <span className="case__problem-index">2</span>
                <h3>Navigation & Context Loss</h3>
              </div>
              <p>
                Back navigation from Jobs/Gigs feeds reset filters, Premium sign-up flows lost state when users previewed perks, 
                AI resume builder links opened in new routes without retaining uploaded files, and Gigs comments failed silently.
              </p>
              <p>
                Incomplete toast messaging and missing “success” confirmations amplified confusion for creators and recruiters.
              </p>
              <div className="case__problem-implication">
                <strong>Design implication:</strong> Introduce shared router state, inline validation, and universal toast patterns so every flow preserves context and communicates outcomes.
              </div>
            </div>

            <div className="case__problem-card" style={{ borderLeft: '4px solid #30B1AA' }}>
              <div className="case__problem-head">
                <span className="case__problem-index">3</span>
                <h3>Responsive & Accessibility Gaps</h3>
              </div>
              <p>
                On mobile, CTA buttons overlapped hero text, modal drawers spilled beyond the viewport, keyboard focus indicators 
                were inconsistent, and landing page animations jittered on low-end devices.
              </p>
              <p>
                Several touch targets missed WCAG sizing, Premium signup steps lacked semantic headings, and the AI Copilot carousel 
                lacked swipe affordances.
              </p>
              <div className="case__problem-implication">
                <strong>Design implication:</strong> Rebuild hero and CTA layouts with a mobile-first grid, enforce consistent focus/touch targets, and add motion-safe fallbacks for lower-powered devices.
              </div>
            </div>

            <div className="case__problem-card" style={{ borderLeft: '4px solid #30B1AA' }}>
              <div className="case__problem-head">
                <span className="case__problem-index">4</span>
                <h3>Cross-Browser Visual Drift</h3>
              </div>
              <p>
                Safari ignored sticky hero positioning, Firefox applied different letter-spacing, embedded video overlays rendered 
                behind modals, and sponsor carousels desynced on Edge.
              </p>
              <p>
                WorkUp Premium pricing tables lost gradient backgrounds in Chrome Canary, and Nvidia/Google sponsor badges 
                appeared blurry due to improper asset scaling.
              </p>
              <div className="case__problem-implication">
                <strong>Design implication:</strong> Establish a browser QA matrix, normalize typography/positioning tokens, and route sponsor assets through a single optimized pipeline so UI parity is guaranteed.
              </div>
            </div>
          </div>

          <h3>Stakeholder Impact</h3>
          <ul className="case__bullets">
            <li><strong className="workup-accent">High drop-off</strong> during feed browsing, job discovery, and Premium upsell flows</li>
            <li><strong className="workup-accent">Support tickets</strong> about inconsistent videos, broken buttons, and missing confirmations</li>
            <li><strong className="workup-accent">Engineering slowdowns</strong> caused by duplicated fixes and unclear component ownership</li>
          </ul>

          <div style={{marginTop: '2rem', padding: '1.5rem', background: '#eff6ff', borderRadius: '12px', borderLeft: '4px solid #30B1AA'}}>
            <p style={{margin: 0, fontSize: 'clamp(1rem, 2vw, 1.1rem)', lineHeight: '1.7', color: '#333', fontWeight: '500'}}>
              <strong style={{color: '#30B1AA'}}>The core question:</strong> How can we improve user experience at scale while 
              maintaining technical quality, coordinating a frontend team, and supporting continuous feature delivery?
            </p>
          </div>
        </section>

        <section className="case__section" id="research">
          <h2>3. User Research & Usability Analysis</h2>
          <p>
            I conducted a multi-source analysis combining:
          </p>
          <ul className="case__bullets">
            <li>Review of user feedback & support tickets</li>
            <li>Heuristic evaluation of core flows</li>
            <li>Cross-functional discussions with product & backend</li>
            <li>Internal user testing sessions</li>
          </ul>

          <h3>Key Problem Discoveries</h3>
          <div className="case__insight-cards">
            <article className="case__insight-card" style={{ borderLeft: '4px solid #30B1AA' }}>
              <div className="case__problem-head">
                <span className="case__problem-index">1</span>
                <h4>Explore Page — Gem Button Triggered Full Page Refresh</h4>
              </div>
              <p>
                Users expected lightweight interaction feedback. Instead, clicking Gem reloaded the entire page, reset the feed, 
                and occasionally triggered duplicate audio.
              </p>
              <p>
                Saved posts also jumped to the top and “For You” filters didn’t persist, compounding frustration.
              </p>
              <div className="case__problem-implication">
                <strong>Design implication:</strong> Treat engagement as stateful client actions—swap anchor tags for buttons, debounce clicks, 
                and persist scroll/filter context.
              </div>
            </article>
            <article className="case__insight-card" style={{ borderLeft: '4px solid #30B1AA' }}>
              <div className="case__problem-head">
                <span className="case__problem-index">2</span>
                <h4>Gigs Feed — Comment Button Failed Silently</h4>
              </div>
              <p>
                Submission events occasionally died without error messaging, so creators kept tapping “Post” with no response.
              </p>
              <p>
                Keyboard focus never moved, and there was no toast to confirm success, leaving users unsure whether their content appeared.
              </p>
              <div className="case__problem-implication">
                <strong>Design implication:</strong> Add optimistic UI, inline validation, and confirmation toasts so collaborative flows feel responsive and trustworthy.
              </div>
            </article>
            <article className="case__insight-card" style={{ borderLeft: '4px solid #30B1AA' }}>
              <div className="case__problem-head">
                <span className="case__problem-index">3</span>
                <h4>Back Navigation Didn't Preserve Context</h4>
              </div>
              <p>
                Returning to Jobs or Gigs reset scroll, cleared filters, and erased draft text. Premium signup detours also lost uploaded resumes.
              </p>
              <p>
                Users described needing to “start over” every time they tapped into details then backed out.
              </p>
              <div className="case__problem-implication">
                <strong>Design implication:</strong> Centralize router state and autosave form inputs so multipage flows resume exactly where users left off.
              </div>
            </article>
            <article className="case__insight-card" style={{ borderLeft: '4px solid #30B1AA' }}>
              <div className="case__problem-head">
                <span className="case__problem-index">4</span>
                <h4>Animations Behaved Differently Across Devices</h4>
              </div>
              <p>
                Safari ignored hero stickiness, Firefox rendered alternate letter-spacing, and Edge desynced sponsor carousels.
              </p>
              <p>
                Premium hero gradients also disappeared in Canary builds, making the paid offering look unstable.
              </p>
              <div className="case__problem-implication">
                <strong>Design implication:</strong> Define motion tokens, provide reduced-motion fallbacks, and expand browser QA coverage before shipping campaigns.
              </div>
            </article>
          </div>

          <h3>User Insights</h3>
          <p>
            Users expected:
          </p>
          <ul className="case__bullets">
            <li><strong className="workup-accent">Immediate feedback</strong>, not full reloads</li>
            <li><strong className="workup-accent">Consistent behavior</strong> across routes</li>
            <li><strong className="workup-accent">Context preservation</strong> during navigation</li>
            <li><strong className="workup-accent">Reliable UI</strong> across devices and browsers</li>
          </ul>
          <p>
            These insights guided the entire redesign and engineering strategy.
          </p>
        </section>

        <section className="case__section" id="design">
          <h2>4. Design & Methodology</h2>
          <p>
            WorkUp needed the polish of a flagship consumer app. I and my team framed the process around 
            three questions: 
          </p>
          <ul className="case__bullets">
            <li>What must feel effortless on mobile?</li>
            <li>How do we keep design consistent across 80+ routes?</li>
            <li>How do we prove changes work?</li>
          </ul>
          <div className="case__design-subsection">
            <h3>4.1 Why Mobile-First & Component Standards Were Non‑Negotiable</h3>
            <p>
              70% of sessions came from mobile, yet most bugs surfaced there. I rebuilt the hero, feed cards, and CTA rows using a “WorkUp Grid” layout spec, 
              defined spacing tokens, and created a shared typography scale. Every component in the new library shipped with props for motion, theme, and device breakpoints.
            </p>
            <ul className="case__bullets">
              <li><strong className="workup-accent">Outcome:</strong> 60+ reusable React components reduced duplicate CSS by 45% and cut future UI tickets in half.</li>
              <li><strong className="workup-accent">Constraint:</strong> Had to maintain existing route structure, so components were introduced incrementally via feature flags.</li>
            </ul>
          </div>

          <div className="case__visual case__visual--split">
            <div className="case__visual-card">
              <p className="case__visual-label">WorkUp Grid Spec</p>
              <p className="case__visual-desc">
                Placeholder for layout diagram showing spacing tokens, breakpoints, and typography scale.
              </p>
            </div>
            <div className="case__visual-card">
              <p className="case__visual-label">Rebuilt Components</p>
              <p className="case__visual-desc">
                Placeholder for feed card + CTA row snapshot demonstrating consistent padding and motion props.
              </p>
            </div>
          </div>

          <div className="case__design-subsection">
            <h3>4.2 Iteration Loop: Prototype → Internal Playtest → Analytics Check</h3>
            <p>
              Each weekly sprint followed the same cadence: rapid prototyping in Storybook, internal playtests with PM/marketing, and quick checks in Mixpanel to ensure 
              we didn’t tank completion rates. We logged every change in a “Changelog” doc so cross-functional stakeholders always knew what shipped.
            </p>
            <ul className="case__bullets">
              <li><strong className="workup-accent">Artifacts:</strong> Storybook playground, Figma flows, and a public QA tracker shared with support.</li>
              <li><strong className="workup-accent">Result:</strong> Time from bug report to verified fix dropped from 5 days to 2.25 days.</li>
            </ul>
          </div>

          
          <div className="case__design-subsection">
            <h3>4.3 Example Highlight — Gem Button Fix</h3>
            <p>
              <strong className="workup-accent">Problem:</strong> Clicking Gem triggered unintended full page refresh, resetting the feed and doubling audio.
            </p>
            <p>
              <strong className="workup-accent">What we shipped:</strong> Converted the anchor to a semantic button, debounced taps, piped the action through Redux state, 
              and persisted scroll position. We also added a subtle microinteraction so the button “pulsed” without hijacking navigation.
            </p>
            <p>
              <strong className="workup-accent">Proof:</strong> Feed engagement per session went up 14%, and complaints about the Gem button dropped to zero in the next support cycle.
            </p>
            <div className="case__visual case__visual--media">
            <div className="case__visual-card case__visual-card--media">
              <p className="case__visual-label">Gem Interaction (After)</p>
              <img
                src={gemGif}
                alt="Updated Gem button microinteraction showing pulse animation without page reload"
                className="case__visual-media"
              />
            </div>
          </div>
          </div>

          

          <div className="case__design-subsection">
            <h3>4.4 Example Highlight — Responsive Hero Rebuild</h3>
            <p>
              <strong className="workup-accent">Problem:</strong> The home hero (headline + CTA + phone mockup) broke on small screens—buttons overlapped the text, 
              and the mock phone fell below the fold, making the page feel unfinished.
            </p>
            <p>
              <strong className="workup-accent">What we shipped:</strong> Designed a flexible “content + device” layout module with CSS grid + clamp spacing. 
              Added safe-area awareness for iOS, swapped heavy GIFs for Lottie animations, and introduced motion-safe media queries so users with reduced motion don’t see parallax.
            </p>
            <p>
              <strong className="workup-accent">Proof:</strong> Hero CLS dropped by 48%, scroll depth on mobile improved 32%, and marketing reported a 19% lift in “Download the app” tap-throughs.
            </p>
            <div className="case__visual case__visual--media">
            <div className="case__visual-card case__visual-card--media">
              <p className="case__visual-label">Responsive rebuild (After)</p>
              <img
                src={hero}
                alt="responsive rebuild gif"
                className="case__visual-media"
              />
            </div>
          </div>
          </div>
        </section>

        <section className="case__section" id="management">
          <h2>5. Software Management & Leadership</h2>

          <div className="case__design-subsection">
            <div className="case__split">
              <div className="case__side case__side--text">
                <h3>5.1 Agile Project Management</h3>
                <p>
                  As team leader, I led:
                </p>
                <ul className="case__bullets">
                  <li>Daily standups with 5 developers</li>
                  <li>Sprint planning and task decomposition</li>
                  <li>Retrospectives introducing new process improvements</li>
                  <li>Weekly demos clarifying progress with stakeholders</li>
                  <li>Structured bug assignment workflows via Excel tracking</li>
                </ul>
              </div>
              <aside className="case__side case__side--media" aria-label="Agile standup and sprint planning notes">
                <img src={meetings} alt="Digital whiteboard showing standup notes and sprint planning agenda" className="case__side-img" style={{width: '35vw', height: 'auto'}}/>
              </aside>
            </div>
          </div>

          <div className="case__design-subsection">
            <h3>5.2 Ensuring Code Quality</h3>
            <p>
              I built a consistent engineering culture by implementing:
            </p>
            <ul className="case__bullets">
              <li><strong className="workup-accent">Peer code review</strong> requirements</li>
              <li><strong className="workup-accent">Reusable component documentation</strong></li>
              <li><strong className="workup-accent">Severity-based bug classification</strong></li>
              <li><strong className="workup-accent">User acceptance testing</strong> before merges</li>
              <li><strong className="workup-accent">Development standards</strong> reducing technical debt</li>
            </ul>
          </div>

          <div className="case__design-subsection">
            <h3>5.3 Cross-Functional Collaboration</h3>
            <ul className="case__bullets">
              <li><strong className="workup-accent">Synced regularly</strong> with backend on API constraints</li>
              <li><strong className="workup-accent">Translated product goals</strong> into technical specifications</li>
              <li><strong className="workup-accent">Mentored junior developers</strong> on React and UCD principles</li>
            </ul>
          </div>
        </section>

        <section className="case__section" id="technical">
          <h2>6. Technical Implementation</h2>

          <div className="case__design-subsection">
            <h3>6.1 Component-Based System Architecture</h3>
            <p>
              I built and organized a reusable library of 60+ React components, ensuring:
            </p>
            <ul className="case__bullets">
              <li>Visual consistency</li>
              <li>Modular code reuse</li>
              <li>Faster onboarding and feature development</li>
            </ul>
          </div>

          <div className="case__design-subsection">
            <h3>6.2 Scalable State Management</h3>
            <ul className="case__bullets">
              <li>Architected Redux store with 29 slices</li>
              <li>Integrated Redux Persist for session continuity</li>
              <li>Optimized state update logic for performance</li>
            </ul>
          </div>

          <div className="case__design-subsection">
            <h3>6.3 Major UX Enhancements</h3>
            <ul className="case__bullets">
              <li>Navigation behavior corrected to preserve user context</li>
              <li>Fixed video playback disruptions</li>
              <li>Rebuilt responsive layouts for mobile/tablet</li>
              <li>Resolved cross-browser inconsistencies</li>
            </ul>
          </div>

          <div className="case__design-subsection">
            <h3>6.4 Technical Highlight — Feed Playback Controller</h3>
            <p>
              The old feed let every video component manage its own HTML5 player, which caused overlapping audio, heavy re-renders, and memory leaks on mobile Safari.
            </p>
            <ul className="case__bullets">
              <li>Created a centralized <code>usePlaybackController</code> hook that tracks active cards via IntersectionObserver and throttles preload requests.</li>
              <li>Leveraged a lightweight event bus so gesture controls, captions, and the Gem state all read from the same source of truth.</li>
              <li>Added haptics + reduced-motion fallbacks to keep the experience smooth for accessibility settings.</li>
            </ul>
            <p>
              <strong className="workup-accent">Result:</strong> CPU usage on iOS dropped 28%, and “audio overlap” bug reports disappeared.
            </p>
          </div>

          <div className="case__design-subsection">
            <h3>6.5 Technical Highlight — Premium Autosave & Resume Sync</h3>
            <p>
              Premium onboarding spans four steps, multiple file uploads, and AI resume rewrites. Losing state meant losing paying users.
            </p>
            <ul className="case__bullets">
              <li>Built a background autosave service that serializes draft data to IndexedDB every 3 seconds and mirrors uploads to S3 with signed URLs.</li>
              <li>Implemented checksum comparison so we only sync fields that actually changed, keeping bandwidth low.</li>
              <li>Hooked into our Redux slices with optimistic updates so users immediately see “Saved to drafts” even before the sync finishes.</li>
            </ul>
            <p>
              <strong className="workup-accent">Result:</strong> Premium form completion increased 26 percentage points, and resume-upload errors dropped below 1%.
            </p>
          </div>
        </section>

        <section className="case__section" id="impact">
          <h2>7. Impact & Results</h2>

          <div className="case__design-subsection">
            <h3>7.1 Quantitative Outcomes</h3>
            <ul className="case__bullets">
              <li>30+ critical bugs resolved</li>
              <li>40% improvement in platform reliability</li>
              <li>95% resolution rate on submitted issues</li>
              <li>60+ reusable components developed</li>
              <li>Cross-browser support significantly improved</li>
            </ul>
          </div>

          <div className="case__design-subsection">
            <h3>7.2 Qualitative Improvements</h3>
            <p>
              <strong className="workup-accent">For Users</strong>
            </p>
            <ul className="case__bullets">
              <li>No more sudden page reloads</li>
              <li>Consistent, predictable navigation</li>
              <li>More polished UI interactions</li>
              <li>Stable experience across devices</li>
            </ul>
            <p>
              <strong className="workup-accent">For the Team</strong>
            </p>
            <ul className="case__bullets">
              <li>Higher velocity due to reusable architecture</li>
              <li>Stronger design consistency</li>
              <li>Clearer communication through Agile workflows</li>
              <li>New culture of documentation & code quality</li>
            </ul>
          </div>
        </section>

        <section className="case__section" id="reflection">
          <h2>8. Conclusion</h2>
          
          <h3>What I Learned</h3>

          <div className="case__design-subsection">
            <h4>HCI Principles in Practice</h4>
            <ul className="case__bullets">
              <li><strong className="workup-accent">User mental models define expectations</strong> — technical fixes must respect them.</li>
              <li><strong className="workup-accent">Accessibility is not optional</strong> — cross-device experience defines trust.</li>
              <li><strong className="workup-accent">Iteration is powerful</strong> — rapid cycles lead to more intuitive interfaces.</li>
            </ul>
          </div>

          <div className="case__design-subsection">
            <h4>Software Management Lessons</h4>
            <ul className="case__bullets">
              <li><strong className="workup-accent">Communication is leverage</strong> — daily syncs reduced blockers and improved clarity.</li>
              <li><strong className="workup-accent">Process must evolve</strong> — retrospectives helped our team self-correct.</li>
              <li><strong className="workup-accent">Leadership is balance</strong> — between feature delivery, technical debt, and user needs.</li>
            </ul>
          </div>

          <div className="case__design-subsection">
            <h4>Challenges Overcome</h4>
            <ul className="case__bullets">
              <li>Debugging complex, interdependent Redux states</li>
              <li>Ensuring backward compatibility while refactoring</li>
              <li>Coordinating team members of varying experience levels</li>
              <li>Aligning design, engineering, and product expectations</li>
            </ul>
          </div>

          <h3>Final Reflection</h3>
          <p>
            Improving user experience required not only technical skill, but also leadership, communication, and empathy for both users and teammates.
          </p>
          <p>
            I learned how to guide a team through ambiguity, translate user pain points into engineering solutions, and balance product 
            goals, UX needs, and technical constraints.
          </p>
          <p>
            It strengthened my belief that the most impactful software is built at the intersection of design, engineering, and 
            collaboration.
          </p>
          <div className="case__cta">
            <a href="https://joinworkup.com/" target="_blank" rel="noreferrer" className="case__cta-link case__cta-link--primary" style={{backgroundColor: '#30B1AA'}}>
              Visit Live Site →
            </a>
          </div>
        </section>

        <section className="case__banner case__banner--footer" aria-label="workup footer banner">
          <img src={workfooter} alt="workUp footer" className="case__banner-img" />
        </section>
      </main>
    </>
  );
}

export default WorkUp;
