import { NavLink } from 'react-router-dom';
import nourishImg from '../assets/images/norish.png';
import nourishMotivation from '../assets/images/norishMotivation.png';
import norishStructure from '../assets/images/norishStructure.png';
import nourishBanner from '../assets/images/nourishBanner.jpg';
import '../App.css';

function NourishSteps() {
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

      <main className="case">
        <header className="case__mast">
          <h1 className="case__mast-title">NorishSteps</h1>
          <p className="case__mast-sub">
            A supportive meal‑tracking system for eating recovery
          </p>
          <blockquote className="case__mast-quote">
            “The way I see it, though? It’s just one part of me, but it was also instrumental
            in shaping me into a kinder, more loving, and accepting person.”
          </blockquote>
        </header>

        <section className="case__banner" aria-label="NourishSteps banner">
          <img src={nourishImg} alt="NourishSteps preview" className="case__banner-img" />
        </section>

        <section className="case__section" id="overview">
          <h2>1. Project Overview</h2>
          <p>
            NourishSteps is a full‑stack meal‑logging and insights application designed to
            support individuals working toward healthier eating behaviors. The product helps
            users record meals, review weekly patterns, and build consistent routines through
            a clean calendar diary and an encouraging timer flow.
          </p>
          <p>
            I led end‑to‑end product development, including UX design, system architecture,
            full‑stack implementation, and feature prioritization. I built the system
            independently using React (Vite), Node/Express, Prisma, and SQL. My goal: create
            a tool that feels supportive rather than punitive—prioritizing emotional comfort,
            usability, and thoughtful visualization.
          </p>
          <p>
            My goal was to create a tool that feels supportive rather than punitive—prioritizing emotional comfort, usability, and thoughtful visualization.
          </p>
          <ul className="case__meta">
            <li>Timeline: 3 months</li>
            <li>Role: Product · UX · Full‑stack</li>
            <li>Stack: React (Vite), Node/Express, Prisma, SQL</li>
            <li>
              <a href="https://github.com/emmiamia/nourishsteps" target="_blank" rel="noreferrer" className="case__meta-link">
                View on GitHub →
              </a>
            </li>
            <li>
              <a href="https://nourishsteps.app" target="_blank" rel="noreferrer" className="case__meta-link">
                Visit Live Site →
              </a>
            </li>
          </ul>
        </section>

        <section className="case__section" id="problem">
          <h2>2. Problem Space & Motivation</h2>
          <div className="case__split">
            <div className="case__side case__side--text">
              <p>
                Meal-tracking tools often prioritize calorie counting, weight goals, and numerical metrics. 
                For individuals trying to build healthier eating habits or recovering from eating disorders, these metrics can be overwhelming and counterproductive. 
                During conversations with friends and through interviews with people in the recovery community, I noticed several recurring patterns:
              </p>
              <ul className="case__bullets">
                <li>People want structure, not surveillance.</li>
                <li>Logging should feel supportive—not a test.</li>
                <li>Many tools use aggressive visuals and numerical pressure.</li>
                <li>Interfaces often ignore emotional context and tone.</li>
              </ul>
              <p>
                NourishSteps takes a different approach: simple, calm, non‑judgmental, and
                emotionally aware. The focus is gentle awareness—consistency, self‑observation,
                and encouraging pacing.
              </p>
              <ul className="case__bullets">
                <li>No calorie counts.</li>
                <li>No comparison charts.</li>
                <li>No “goal weight“ prompts.</li>
              </ul>
            </div>
            <aside className="case__side case__side--media" aria-label="Motivation">
              <img
                src={nourishMotivation}
                alt="NourishSteps problem space & motivation moodboard"
                className="case__side-img"
              />
            </aside>
          </div>
        </section>

        <section className="case__section" id="research">
          <h2>3. User Research & Insights</h2>
          <p>
            To ground the design of NourishSteps in real user needs, I conducted informal
            interviews, competitive product evaluations, and contextual reflections with
            people who engage in a wide range of eating behaviors. It revealed clear emotional, behavioral, and usability patterns
            that were consistent across participants.
          </p>
          <h3>Research lenses</h3>
          <ul className="case__bullets">
            <li><strong>Emotional context</strong> — how users feel when logging or thinking about food</li>
            <li><strong>Behavioral patterns</strong> — how, when, and why users log (or avoid logging) meals</li>
            <li><strong>Interaction preferences</strong> — what makes logging intuitive or stressful</li>
          </ul>
          <p>
            Together, these insights shaped the product strategy and informed every UX decision.
          </p>

          <div className="case__sticky-wall" aria-label="Key insights synthesis">
            <div className="case__sticky-notes">
              <div className="case__sticky-note">Stress reduces logging consistency</div>
              <div className="case__sticky-note">Numeric data increases anxiety</div>
              <div className="case__sticky-note">Users prefer &lt;10s meal logging</div>
              <div className="case__sticky-note">Neutral colors create psychological safety</div>
              <div className="case__sticky-note">Awareness over evaluation</div>
              <div className="case__sticky-note">Lightweight during cognitive load</div>
              <div className="case__sticky-note">Single-tap actions preferred</div>
              <div className="case__sticky-note">Pattern visibility without judgment</div>
            </div>
          </div>

          <h3>3.1 Key User Insights</h3>
          <div className="case__insights">
            <div className="case__insight">
              <h4>
                <span className="case__insight-number">1</span>
                Logging often breaks down under stress
              </h4>
              <p>
                Stressful periods—deadlines, exams, or emotional overwhelm—were the moments users
                were least likely to log meals, even though structure would have helped most.
              </p>
              <p className="case__note">
                <strong>Design implication:</strong> Emphasize single‑tap actions, minimal navigation,
                and unobtrusive reminders so logging stays lightweight during cognitive load.
              </p>
            </div>

            <div className="case__insight">
              <h4>
                <span className="case__insight-number">2</span>
                Numerical data increases anxiety
              </h4>
              <p>
                Calorie counts, red warnings, and comparisons were described as stress‑inducing and
                "judgmental," shifting attention from feelings to performance.
              </p>
              <p className="case__note">
                <strong>Design implication:</strong> Remove calorie metrics; prefer soft patterns,
                gentle language, and neutral visuals. Offer observations—not scores.
              </p>
            </div>

            <div className="case__insight">
              <h4>
                <span className="case__insight-number">3</span>
                Logging must be extremely fast
              </h4>
              <p>
                A common refrain: "too many taps" or "too much typing." Users said they would log
                more if it took under 10 seconds.
              </p>
              <p className="case__note">
                <strong>Design implication:</strong> Defaults are prefilled, typing is optional,
                and an entry can be completed with a single action.
              </p>
            </div>

            <div className="case__insight">
              <h4>
                <span className="case__insight-number">4</span>
                Users want awareness, not evaluation
              </h4>
              <p>
                People prefer gentle visibility into routines ("I skip lunch on busy days") instead
                of judgment or gamified charts.
              </p>
              <p className="case__note">
                <strong>Design implication:</strong> The weekly summary highlights frequency and
                consistency, intentionally avoiding comparative or success/failure states.
              </p>
            </div>
          </div>

          <h3>3.2 Competitive Analysis</h3>
          <p>
            I examined leading tools (e.g., MyFitnessPal, Cronometer, Notion‑based journals).
            They are feature‑rich and data‑forward, but often assume users are motivated by
            quantifiable progress. Gaps included:
          </p>
          <ul className="case__bullets">
            <li>Heavy reliance on calorie and macro data</li>
            <li>Complex entry flows tuned for nutrition tracking, not emotional well‑being</li>
            <li>Frequent use of bright red cues that interviewees found discouraging</li>
            <li>Interfaces optimized for “fitness progress,” not healthy habit formation</li>
          </ul>
          <p className="case__note">
            These gaps reinforced the opportunity to design for emotional safety, simplicity, and ritual‑building.
          </p>

          <h3>3.3 Personas</h3>
          <p>
            Based on recurring themes, I synthesized three representative personas to guide design decisions:
          </p>
          <div className="case__personas">
            <div className="case__persona">
              <div className="case__persona-header">
                <div className="case__persona-icon">📚</div>
                <h4 className="case__persona-title">The Busy Student</h4>
              </div>
              <div className="case__persona-section">
                <span className="case__persona-label">Goals</span>
                <p className="case__persona-content">
                  Maintain consistent eating patterns despite academic and personal demands. Fit logging seamlessly into a packed schedule.
                </p>
              </div>
              <div className="case__persona-section">
                <span className="case__persona-label">Pain Points</span>
                <ul className="case__persona-content">
                  <li>Forgets to log during stressful periods</li>
                  <li>Complex interfaces feel like another task</li>
                  <li>Needs structure without added cognitive load</li>
                </ul>
              </div>
              <div className="case__persona-section">
                <span className="case__persona-label">Behavior Summary</span>
                <p className="case__persona-content">
                  Often overwhelmed by deadlines and exams. Needs an interface that is fast, unobtrusive, and requires minimal mental effort.
                </p>
              </div>
            </div>

            <div className="case__persona">
              <div className="case__persona-header">
                <div className="case__persona-icon">🌱</div>
                <h4 className="case__persona-title">The Routine-Builder</h4>
              </div>
              <div className="case__persona-section">
                <span className="case__persona-label">Goals</span>
                <p className="case__persona-content">
                  Create steady, sustainable eating habits. Build consistency through gentle encouragement and clear feedback.
                </p>
              </div>
              <div className="case__persona-section">
                <span className="case__persona-label">Pain Points</span>
                <ul className="case__persona-content">
                  <li>Feels discouraged by judgmental metrics</li>
                  <li>Wants pattern visibility without pressure</li>
                  <li>Needs motivation that feels supportive, not punitive</li>
                </ul>
              </div>
              <div className="case__persona-section">
                <span className="case__persona-label">Behavior Summary</span>
                <p className="case__persona-content">
                  Focused on creating steady habits. Values gentle encouragement and pattern-based feedback. Motivated by consistency rather than quantifiable goals.
                </p>
              </div>
            </div>

            <div className="case__persona">
              <div className="case__persona-header">
                <div className="case__persona-icon">🧘</div>
                <h4 className="case__persona-title">The Overthinker</h4>
              </div>
              <div className="case__persona-section">
                <span className="case__persona-label">Goals</span>
                <p className="case__persona-content">
                  Track meals without triggering anxiety. Find calm and predictability in the interface experience.
                </p>
              </div>
              <div className="case__persona-section">
                <span className="case__persona-label">Pain Points</span>
                <ul className="case__persona-content">
                  <li>Easily stressed by cluttered interfaces</li>
                  <li>Numerical metrics increase anxiety</li>
                  <li>Unpredictable layouts feel overwhelming</li>
                </ul>
              </div>
              <div className="case__persona-section">
                <span className="case__persona-label">Behavior Summary</span>
                <p className="case__persona-content">
                  Easily stressed by visual noise or numerical pressure. Benefits from calming visuals, predictable layouts, and a non-judgmental tone.
                </p>
              </div>
            </div>
          </div>
          <p>
            These personas helped keep decisions aligned with users' emotional states and informed
            the product's tonal and visual direction.
          </p>

          <h3>3.4 Research Summary</h3>
          <p>
            The research revealed a strong need for a calm, simple, emotionally intelligent
            tracking tool—one that supports users in moments of stress rather than overwhelming
            them with data. This foundation directly informed the system architecture, interaction
            patterns, and overall design philosophy of NourishSteps.
          </p>
        </section>

        <section className="case__section" id="goals">
          <h2>4. Product Goals & Success Metrics</h2>
          <ul className="case__bullets">
            <li>Make meal logging frictionless.</li>
            <li>Provide soft, non‑triggering pattern awareness.</li>
            <li>Encourage consistency without judgment.</li>
            <li>Offer emotional pacing through a supportive timer.</li>
            <li>Build an aesthetic that feels calm and safe.</li>
          </ul>
        </section>

        <section className="case__section" id="design">
          <h2>5. Design Process</h2>
          
          <div className="case__design-subsection">
            <h3>5.1 Information Architecture</h3>
            <p>
              Three core flows: <strong>Daily Check-In</strong> (mood, urges, meal status, notes) · <strong>Meal Tracking</strong> (calendar view, quick log, multi-phase timer) · <strong>Progress Visualization</strong> (7-day stats, mood trends, streak tracking).
            </p>
            <p>
              Additional: <strong>Coping Toolbox</strong> (tag-filtered guided practices with favorites) · <strong>Resources</strong> (crisis support links).
            </p>
            <div className="case__structure-diagram">
              <img src={norishStructure} alt="NourishSteps information architecture diagram" className="case__structure-img" />
            </div>
          </div>

          <div className="case__design-subsection">
            <h3>5.2 Wireframes & Early Concepts</h3>
            <ul className="case__bullets">
              <li><strong>Calendar-based navigation</strong> for viewing historical entries by date</li>
              <li><strong>Quick log vs. timer-based</strong> meal tracking (one-click save or guided timer)</li>
              <li><strong>Multi-phase meal timer</strong> (meal + post-meal phases with configurable durations)</li>
              <li><strong>Tag-based filtering</strong> in toolbox (breathing, grounding, self-compassion, etc.)</li>
              <li><strong>Gradient-based visualizations</strong> (soft charts, not harsh data tables)</li>
            </ul>
          </div>

          <div className="case__design-subsection">
            <h3>5.3 High‑Fidelity Decisions</h3>
            <ul className="case__bullets">
              <li><strong>Calming green palette</strong> (#4a7c59 primary, soft emerald tones throughout)</li>
              <li><strong>Rounded corners everywhere</strong> (rounded-2xl, rounded-3xl) for friendliness</li>
              <li><strong>Soft shadows and backdrop blur</strong> for depth without harshness</li>
              <li><strong>Gradient overlays</strong> on cards and charts for visual interest</li>
              <li><strong>No calorie/weight numbers</strong> (only meal status: completed/partial/skipped)</li>
              <li><strong>Framer Motion animations</strong> for smooth page transitions and micro-interactions</li>
              <li><strong>Skeleton loading states</strong> for perceived performance</li>
              <li><strong>Dark mode / Light mode support</strong> with theme toggle and system preference detection, ensuring comfortable viewing in both day and night environments</li>
            </ul>
          </div>

          <div className="case__design-subsection">
            <h3>5.4 Accessibility</h3>
            <ul className="case__bullets">
              <li><strong>Large tap targets</strong> (DaisyUI btn classes ensure 44px minimum)</li>
              <li><strong>High contrast text</strong> (base-content on base-100 with WCAG AA compliance)</li>
              <li><strong>Consistent spacing</strong> (gap-3, gap-4, gap-6 grid system)</li>
              <li><strong>Readable hierarchy</strong> (text-2xl for headings, text-sm for hints)</li>
              <li><strong>Keyboard navigation</strong> (Escape to close modals, R for random tool)</li>
              <li><strong>ARIA labels and roles</strong> (aria-modal, role="dialog" on modals)</li>
              <li><strong>Focus management</strong> (auto-scroll and focus on modal open)</li>
            </ul>
          </div>
        </section>

        <section className="case__banner-full" aria-label="NourishSteps banner">
          <img src={nourishBanner} alt="NourishSteps banner" className="case__banner-full-img" />
        </section>

        <section className="case__section" id="features">
          <h2>6. Key Features</h2>
          <p>
            NourishSteps was designed as a calm, emotionally-aware system supporting both daily routines and long-term recovery patterns. The feature set combines behavioral design, elegant UX patterns, and robust engineering to create an experience that feels gentle, intuitive, and reliable.
          </p>
          <p>
            Below is an overview of core user-facing features, followed by technical capabilities and design system foundations that make the product scalable and sustainable.
          </p>

          <div className="case__design-subsection">
            <h3>6.1 User-Facing Features</h3>
            
            <div className="case__feature">
              <h4>Daily Check-In System</h4>
              <p className="case__feature-desc">
                A lightweight ritual for emotional grounding and self-awareness.
              </p>
              <div className="case__feature-visual">
                {/* Add screenshot: checkin.png - Shows the daily check-in interface with mood scale, urge monitoring bars, meal status options, and notes field */}
                {/* <img src={checkinImg} alt="NourishSteps daily check-in interface" className="case__feature-img" /> */}
              </div>
              <div className="case__feature-details">
                <div className="case__feature-includes">
                  <strong>What it includes:</strong>
                  <ul className="case__bullets">
                    <li>Mood Tracking (1–5 scale with visual emoji indicators)</li>
                    <li>Urge Monitoring (0–5 gradient bars representing intensity)</li>
                    <li>Meal Status (Completed / Partial / Skipped)</li>
                    <li>Notes (500-character reflective journaling with live counts)</li>
                    <li>Calendar Navigation (jump to any date to review/edit entries)</li>
                    <li>Adaptive Visual Feedback (mood-themed colors from rose → emerald)</li>
                  </ul>
                </div>
                <div className="case__feature-why">
                  <strong>Why it matters:</strong>
                  <p>Daily check-ins help users recognize patterns in mood, urges, and eating behaviors. The interface is intentionally soft and non-judgmental, reducing cognitive load during stressful moments.</p>
                </div>
              </div>
            </div>

            <div className="case__feature">
              <h4>Meal Tracking & Multi-Phase Timer</h4>
              <p className="case__feature-desc">
                A flexible system that supports both quick logging and mindful pacing.
              </p>
              <div className="case__feature-visual">
                {/* Add screenshot: timer.png - Shows the multi-phase meal timer interface with supportive prompts, or calendar heatmap showing meal distribution */}
                {/* <img src={timerImg} alt="NourishSteps meal timer interface with multi-phase timing" className="case__feature-img" /> */}
              </div>
              <div className="case__feature-details">
                <div className="case__feature-includes">
                  <strong>What it includes:</strong>
                  <ul className="case__bullets">
                    <li>Quick Logging (one-click meal save for breakfast/lunch/dinner/snacks)</li>
                    <li>Multi-Phase Meal Timer (configurable eating + post-meal phases, 5–60 min)</li>
                    <li>Supportive Prompts (rotating, affirming messages during timed phases)</li>
                    <li>Calendar Heatmap (emerald gradient visualization of daily meal counts)</li>
                    <li>7-Day Statistics (completion rates, partial meals, skipped meals, streaks)</li>
                    <li>Meal History Management (edit/delete entries across past dates)</li>
                  </ul>
                </div>
                <div className="case__feature-why">
                  <strong>Why it matters:</strong>
                  <p>Many users feel overwhelmed by numbers or complex interactions. The timer-based flow introduces emotional pacing and routine-building without pressure, while quick logging supports fast moments and busy days.</p>
                </div>
              </div>
            </div>

            <div className="case__feature">
              <h4>Progress Dashboard</h4>
              <p className="case__feature-desc">
                A calm, data-informed overview of patterns — without triggering metrics.
              </p>
              <div className="case__feature-visual">
                {/* Add screenshot: dashboard.png - Shows the full dashboard with mood/urge trends, meal distribution chart, streak visualization, and stat tiles */}
                {/* <img src={dashboardImg} alt="NourishSteps progress dashboard showing mood trends, meal distribution, and streak visualization" className="case__feature-img" /> */}
              </div>
              <div className="case__feature-details">
                <div className="case__feature-includes">
                  <strong>Key visualizations:</strong>
                  <ul className="case__bullets">
                    <li>Mood & Urge Trends (area chart, 7/14/30 days)</li>
                    <li>Meal Distribution (completed/partial/skipped pie chart)</li>
                    <li>Streak Visualization (radial bar)</li>
                    <li>Daily Entry Counts (bar chart)</li>
                    <li>Stat Tiles (mood average, urge average, streaks)</li>
                  </ul>
                </div>
                <div className="case__feature-why">
                  <strong>Why it matters:</strong>
                  <p>Users want awareness, not evaluation. The dashboard frames information gently, using soft gradients and non-comparative visuals to help users notice trends without feeling judged.</p>
                </div>
              </div>
            </div>

            <div className="case__feature">
              <h4>Coping Toolbox</h4>
              <p className="case__feature-desc">
                A guided library of grounding practices for stressful moments.
              </p>
              <div className="case__feature-details">
                <div className="case__feature-includes">
                  <strong>What it includes:</strong>
                  <ul className="case__bullets">
                    <li>Tag Filtering (breathing, grounding, self-compassion, etc.)</li>
                    <li>Full-Text Search across titles and steps</li>
                    <li>Favorites System persisted via localStorage</li>
                    <li>Interactive Modals with step checklists</li>
                    <li>Built-In Focus Timer (60-second grounding)</li>
                    <li>Personal Notes saved per tool</li>
                    <li>"Random Tool" Shortcut via keyboard press (R)</li>
                    <li>Celebration Feedback via emoji confetti</li>
                  </ul>
                </div>
                <div className="case__feature-why">
                  <strong>Why it matters:</strong>
                  <p>Users often need emotional support tools at the moment they feel urges. The toolbox provides immediate, structured, and calming guidance without navigating away from the experience.</p>
                </div>
              </div>
            </div>

            <div className="case__feature">
              <h4>Calendar Diary</h4>
              <p className="case__feature-desc">
                A clean, animated monthly overview of meals, check-ins, and streaks.
              </p>
              <div className="case__feature-visual">
                {/* Add screenshot: calendar.png - Shows the monthly calendar view with emerald gradient heatmap, badges for check-ins, and navigation */}
                {/* <img src={calendarImg} alt="NourishSteps calendar diary with heatmap visualization" className="case__feature-img" /> */}
              </div>
              <div className="case__feature-details">
                <div className="case__feature-includes">
                  <strong>Key elements:</strong>
                  <ul className="case__bullets">
                    <li>Month Navigation with arrows and quick "Today" shortcut</li>
                    <li>Heatmap View using emerald gradient intensities</li>
                    <li>Badge System for daily check-in counts</li>
                    <li>Smooth Transitions via Framer Motion</li>
                    <li>Tap/Click to Open Daily Detail</li>
                  </ul>
                </div>
                <div className="case__feature-why">
                  <strong>Why it matters:</strong>
                  <p>Calendars are powerful for pattern recognition. Animated transitions and consistent iconography make browsing historical entries feel smooth, simple, and safe.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="case__design-subsection">
            <h3>6.2 Technical Architecture & Engineering Features</h3>
            <p>
              While the user experience is intentionally calm and minimal, the underlying system is engineered for performance, reliability, and maintainability.
            </p>
            <div className="case__structure-diagram">
              {/* Add diagram: architecture.png - Shows system architecture diagram with frontend (React/Vite), backend (Node/Express), database (SQLite), and data flow */}
              {/* <img src={architectureImg} alt="NourishSteps technical architecture diagram" className="case__structure-img" /> */}
            </div>

            <h4>Performance Optimizations</h4>
            <ul className="case__bullets">
              <li><strong>Code Splitting:</strong> Lazy-loaded pages via React.lazy() + Suspense</li>
              <li><strong>Skeleton Loading Screens</strong> for perceived speed</li>
              <li><strong>Memoization (useMemo)</strong> for expensive chart calculations</li>
              <li><strong>Parallel API Calls</strong> via Promise.all()</li>
            </ul>
            <p className="case__note">
              <strong>Impact:</strong> Smooth interactions even on low-end devices; charts load instantly.
            </p>

            <h4>User Experience Enhancements</h4>
            <ul className="case__bullets">
              <li><strong>Error Boundaries</strong> to prevent app-wide crashes</li>
              <li><strong>Dark Mode / Light Mode Theme Toggle</strong> with system preference detection and manual override</li>
              <li>Theme adaptation maintains the calming green palette and emotional tone in both day and night settings</li>
              <li><strong>Mobile-First Layout</strong> and responsive components</li>
              <li><strong>Micro-Animations</strong> via Framer Motion</li>
              <li><strong>Backdrop Blur</strong> for depth</li>
              <li><strong>Full Keyboard Navigation</strong> (ESC closes modals; R opens random tool)</li>
            </ul>
            <p className="case__note">
              <strong>Impact:</strong> A polished, accessible, and delightful interface that adapts to user preferences and environmental conditions.
            </p>

            <h4>Progressive Web App (PWA)</h4>
            <ul className="case__bullets">
              <li><strong>Installable App</strong> on mobile and desktop</li>
              <li><strong>Service Worker</strong> via Vite PWA plugin</li>
              <li><strong>Offline Capabilities</strong> for most features</li>
              <li><strong>Manifest</strong> with custom theme + icons</li>
            </ul>
            <p className="case__note">
              <strong>Impact:</strong> Transforms the web app into a near-native mobile experience.
            </p>

            <h4>Data Visualization</h4>
            <ul className="case__bullets">
              <li>Built with <strong>Recharts</strong> (Area, Line, Bar, RadialBar, Pie)</li>
              <li><strong>Custom Emerald/Pink/Sky Gradients</strong> for emotional tone</li>
              <li><strong>Dark Tooltips</strong>, responsive containers, animation support</li>
            </ul>
            <p className="case__note">
              <strong>Impact:</strong> Charts feel expressive and soft, not clinical or overwhelming.
            </p>

            <h4>State Management</h4>
            <ul className="case__bullets">
              <li>React Hooks (useState, useEffect, useMemo, useRef)</li>
              <li>Centralized API Client with unified error handling</li>
              <li>LocalStorage Persistence for favorites and personal notes</li>
              <li>Optimistic UI Updates</li>
            </ul>
          </div>

          <div className="case__design-subsection">
            <h3>6.3 Backend Architecture & Data Integrity</h3>
            
            <h4>RESTful API</h4>
            <ul className="case__bullets">
              <li>Complete CRUD for check-ins, meals, and toolbox entries</li>
              <li>Date Filtering for daily or range-based queries</li>
              <li>Monthly Summaries for calendar heatmaps</li>
              <li>7-Day Analytics for dashboard</li>
              <li>CORS Configuration for multi-port development</li>
            </ul>

            <h4>Data Models</h4>
            <ul className="case__bullets">
              <li><strong>CheckIn:</strong> mood, urge, note, meal status, date</li>
              <li><strong>Meal:</strong> date, type, duration_sec, note</li>
              <li><strong>Toolbox:</strong> title, steps, tags</li>
              <li><strong>SQLite:</strong> lightweight, file-based storage</li>
            </ul>

            <h4>Data Integrity</h4>
            <ul className="case__bullets">
              <li>Unified streak logic (meals + check-ins)</li>
              <li>Timezone-safe date validation</li>
              <li>Input sanitization to prevent malformed entries</li>
            </ul>
          </div>
        </section>

        <section className="case__section" id="reflection">
          <h2>Reflection</h2>
          <p>
            Although this project met my original goals of creating a calm, supportive, and emotionally aware tracking experience, the process also revealed several limitations and opportunities for deeper exploration. Since the product was designed and tested within a small, informal sample, future iterations would benefit from more structured evaluations with a broader demographic to understand how different users engage with the system across varied emotional contexts.
          </p>
          <p>
            Throughout the design process, I found myself balancing technical ambition with the sensitivity required when building tools for users who may experience stress or disordered eating patterns. This raised important questions about how digital products can support well-being without reinforcing harmful habits or creating new forms of pressure. In future research cycles, I would like to incorporate more participatory design sessions to allow users to co-shape the pacing, tone, and visualization styles that feel safest to them.
          </p>
          <p>
            Some additional areas I hope to explore include:
          </p>

          <h3>How do users define "non-triggering" design in the context of food and mood tracking?</h3>
          <p>
            How does color, language, and interaction framing influence emotional safety?
          </p>

          <h3>What are the moments when users most need support?</h3>
          <p>
            Understanding the daily rhythms and stress patterns that precede skipped meals or emotional spikes could help refine the timing and content of supportive prompts.
          </p>

          <h3>Where is the line between supportive structure and overwhelming structure?</h3>
          <p>
            For some users, streaks may feel motivating; for others, they may feel punitive. How should systems adapt to individual differences?
          </p>

          <p>
            Looking ahead, I am interested in conducting mixed-methods evaluations that include behavioral analytics, diary studies, and psychological safety assessments to better understand the real-world impact of the tool. I would also like to collaborate with mental-health professionals to ensure that the system's language, pacing, and feedback align with evidence-based recovery practices.
          </p>
          <p>
            Ultimately, this project strengthened my belief that designing for well-being requires not just technical skill, but deep empathy, careful restraint, and a willingness to continually question whether the product is truly helping the user. NourishSteps is only a starting point — and I look forward to exploring how thoughtful design can play a more meaningful role in everyday emotional health.
          </p>
          <div className="case__cta">
            <a href="https://nourishsteps.app" target="_blank" rel="noreferrer" className="case__cta-link case__cta-link--primary">
              Visit Live Site →
            </a>
            <a href="https://github.com/emmiamia/nourishsteps" target="_blank" rel="noreferrer" className="case__cta-link case__cta-link--secondary">
              View Source Code on GitHub →
            </a>
          </div>
        </section>
      </main>
    </>
  );
}

export default NourishSteps;

