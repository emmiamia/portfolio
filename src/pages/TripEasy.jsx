import { NavLink } from 'react-router-dom';
import tripImg from '../assets/images/tripeasy.png';
import tripmotiv from '../assets/images/tripmotiv.jpg';
import trip1 from '../assets/images/trip1.jpg';
import trip2 from '../assets/images/trip2.jpg';
import dayday from '../assets/images/dayday.jpg';
import map from '../assets/images/map.png';
import budget from '../assets/images/budget.png';
import collab from '../assets/images/collab.png';
import logistics from '../assets/images/logistics.png';
import checklists from '../assets/images/checklists.png';
import tripbanner from '../assets/images/tripbanner.jpg';

import '../App.css';

function TripEasy() {

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

      <main className="case tripeasy">
        <header className="case__mast">
          <h1 className="case__mast-title">TripEasy</h1>
          <p className="case__mast-sub">
            A collaborative trip planning app that centralizes itineraries, logistics, budgets, and maps
          </p>
          <blockquote className="case__mast-quote">
            "Planning a trip shouldn't feel like managing a spreadsheet. It should feel like building anticipation for an adventure."
          </blockquote>
        </header>

        <section className="case__banner" aria-label="TripEasy banner">
          <img src={tripImg} alt="TripEasy preview" className="case__banner-img" />
        </section>

        <section className="case__section" id="overview">
          <h2>1. Project Overview</h2>
          <p>
            TripEasy is a personal travel-planning web application designed to streamline how individuals organize trips. 
            The product centralizes itineraries, dates, and travel details into a single workspace, replacing the friction of scattered notes, 
            screenshots, and fragmented planning tools. My goal was to build a tool that feels lightweight, focused, and emotionally 
            uplifting—something that helps users plan trips without stress.
          </p>
          <p>
            I designed and built this project end-to-end, from early feature scoping and user flow design to full-stack implementation 
            and deployment. The work centers on creating a smooth planning experience: clear navigation, responsive layouts, meaningful 
            empty states, and reliable data syncing across the app. The interface emphasizes clarity, ease of use, and an inviting 
            visual system that supports planning rather than overwhelming it.
          </p>
          <ul className="case__meta">
            <li>Timeline: 4 months</li>
            <li>Role: Product Design · UX Design · Frontend Development · Backend Development</li>
            <li>Stack: React, Node.js, Express, Prisma, User researches</li>
            <li>
              <a href="https://github.com/emmiamia/tripEasy" target="_blank" rel="noreferrer" className="case__meta-link" style={{ color: "#0B2B58" }}>
                View on GitHub →
              </a>
            </li>
            <li>
              <a href="https://tripeasy-ld8b.onrender.com" target="_blank" rel="noreferrer" className="case__meta-link" style={{ color: "#0B2B58" }}>
                Visit Live Site →
              </a>
            </li>
          </ul>
        </section>

        <section className="case__section" id="problem">
          <h2>2. Problem Space & Motivation</h2>
          <p>
            Planning a trip often feels more complicated than it needs to be. People get confused when the tasks juggle into a enormous pile of chores. 
            Switching between scattered tools—notes apps, messaging threads, Google Docs, screenshots, and calendar reminders is not only time-wasting but also inefficient. 
            Existing tools tend to fall into two extremes: overly complex platforms built for power users, or overly simple note-based systems that lack structure.
          </p>
          <p>
            This gap inspired me to design TripEasy as a lightweight, approachable alternative. 
            I wanted a tool that keeps only the essentials—trip information, itinerary notes, dates—without overwhelming the user with features they don’t need. 
            My motivation came from my own travel planning experiences, where I found myself wishing for a cleaner, calmer interface that supported actual planning, 
            allowing users to use this single platform throughout their trip.
          </p>
          <div className="case__problem-media">
            <img src={tripmotiv} alt="TripEasy planning moodboard" />
          </div>
        </section>

        <section className="case__section" id="research">
          <h2>3. User Research & Insights</h2>
          <p>
            Before defining the feature scope for TripEasy, I ran a lightweight exploratory study to understand how people currently plan their travels.
            Instead of formal interviews, I focused on informal conversations with friends and peers who had recently organized trips, and reflected on my own planning habits.
            The goal was to capture recurring friction points rather than build a comprehensive user model.
          </p>
          <p>
            Across these conversations, a few consistent patterns emerged:
          </p>
          <div className="case__insight-cards">
            <article className="case__insight-card">
              <h4>Planning happens across too many surfaces</h4>
              <p>
                People switch between group chats, notes apps, docs, and screenshots. None of these tools
                communicate with each other, so information gets duplicated and it's unclear where the latest version lives.
              </p>
            </article>
            <article className="case__insight-card">
              <h4>Details get lost more often than expected</h4>
              <p>
                Dates, addresses, reservation codes, and meeting points disappear into chat histories or image galleries.
                Travelers regularly dig through old messages to retrieve simple logistics.
              </p>
            </article>
            <article className="case__insight-card">
              <h4>Heavy-duty travel apps feel overwhelming</h4>
              <p>
                Existing planning platforms were described as “too much work to set up.” Many people prefer manual methods
                simply because they feel more controllable, even if they’re messy.
              </p>
            </article>
            <article className="case__insight-card">
              <h4>Even organized planners struggle to build structure</h4>
              <p>
                Some travelers create trip-specific documents, but designing a single doc that captures everything is surprisingly difficult.
                They often revise it mid-way when they realize they forgot a category.
              </p>
            </article>
            <article className="case__insight-card">
              <h4>Users value clarity over automation</h4>
              <p>
                While AI-driven itinerary generation sounded interesting, people mostly wanted a clean home to see everything in one place
                without rigid templates or complex workflows.
              </p>
            </article>
          </div>
          <p>
            These insights shaped TripEasy’s direction: instead of a full-scale travel management platform, I focused on a clean, minimal workspace that supports natural planning habits—centralized, easy to update, and free of unnecessary friction.
          </p>
        </section>

        <section className="case__section" id="design">
          <h2>4. Concept Development & Design Process</h2>

          <div className="case__design-subsection">
            <h3>4.1 Information Architecture</h3>
            <p>
              TripEasy mirrors the real workflow of travel planning. The experience is built around three intentionally scoped spaces:
            </p>
            <ul className="case__bullets">
              <li><strong className="tripeasy-accent">Dashboard</strong> — a command center showing all trips, collaborators, and quick entry points.</li>
              <li><strong className="tripeasy-accent">Trip Creation</strong> — a single-flow form that gathers essentials (name, dates, destination, cover image) and prebuilds the trip structure immediately.</li>
              <li><strong className="tripeasy-accent">Trip Workspace</strong> — the hub where itinerary, logistics, packing, tasks, notes, map previews, expenses, and collaborators live side by side with no deep drilling.</li>
            </ul>
            <p>
              Navigation stays shallow on purpose—URL structure and side navigation simply reinforce location, while the IA lets anyone move from overview → detail → overview in a single click.
            </p>
          </div>

          <div className="case__design-subsection">
            <h3>4.2 Wireframes & Early Concepts</h3>
            <p>
              Early sketches tested whether an all-in-one layout would overwhelm users. The following directions endured through usability reviews:
            </p>
            <ul className="case__bullets">
              <li><strong className="tripeasy-accent">Card-first dashboard</strong> highlighting trip status, dates, and collaborator counts at a glance.</li>
              <li><strong className="tripeasy-accent">One-form trip creation</strong> with inline validation and automatic hero image handling—no multi-step modal wizard.</li>
              <li><strong className="tripeasy-accent">Workspace grid</strong> showing every panel (itinerary, logistics, map, packing, tasks, notes, expenses, collaborators) simultaneously.</li>
              <li><strong className="tripeasy-accent">Intuitive empty states</strong> explaining each panel’s purpose to guide first-time collaborators.</li>
              <li><strong className="tripeasy-accent">Mobile wireframes</strong> for dashboard and itinerary to confirm critical flows remained intact on smaller screens.</li>
            </ul>
            <p>
              The wires proved that the “one workspace” idea wouldn’t overwhelm because panels can collapse, and content is visually grouped.
            </p>
            <div className="case__wireframe-images">
            <div className="wireframe-image">
              <img src={trip1} alt="Early TripEasy dashboard wireframe" loading="lazy" />
            </div>
            <div className="wireframe-image">
              <img src={trip2} alt="Refined TripEasy workspace concept" loading="lazy" />
            </div>
          </div>
          </div>

          <div className="case__design-subsection">
            <h3>4.3 High-Fidelity Design Decisions</h3>
            <p>
              Once the core structure was validated, I refined the visual language to reinforce TripEasy’s purpose: providing a single, consolidated workspace where users can plan 
              every aspect of a trip without navigating across multiple tools or pages.            
            </p>
            <ul className="case__bullets">
              <li><strong className="tripeasy-accent">Generous rounding and soft shadows</strong> so every card feels like a tactile panel you can drag around a workspace.</li>
              <li><strong className="tripeasy-accent">Tiny icon hints</strong> would nudge users toward collaborative actions.</li>
              <li><strong className="tripeasy-accent">Responsive layout</strong> ensures that all trip components—notes, itinerary items, packing lists, logistics, tasks, and expenses—remain accessible and readable on any screen size.</li>
            </ul>
            <p>
              The result is a workspace that feels supportive even when nine components live on the page— to stay approachable and ready for whichever trip.
            </p>
          </div>

          <div className="case__design-subsection">
            <h3>4.4 Interaction Design</h3>
            <p>
              Interactions are designed to feel reassuring in a typically stressful context:
            </p>
            <ul className="case__bullets">
              <li><strong className="tripeasy-accent">Immediate transitions</strong> from trip creation into the pre-populated workspace.</li>
              <li><strong className="tripeasy-accent">Inline actions</strong> for tasks, itinerary items, packing statuses, invites, and notes—no reloads or heavy modals.</li>
              <li><strong className="tripeasy-accent">Live data refresh</strong> so collaborator lists, maps, and tasks reflect changes instantly.</li>
            </ul>
            <p>
              Together, these interactions keep planning fast, fluid, and collaborative—the core promise of TripEasy.
            </p>
          </div>

          <div className="case__design-subsection">
            <h3>4.5 Redirects & Routing</h3>
            <p>
              To reinforce that every route or destination can be managed inside TripEasy, the workspace supports contextual redirects. 
              Selecting any destination, day, or card automatically anchors users to the corresponding map view, logistics panel, or detail editor—
              without leaving the platform or opening external tabs.
            </p>
            <ul className="case__bullets">
              <li><strong className="tripeasy-accent">Deep links</strong> from the dashboard jump directly into a specific day, destination, or task.</li>
              <li><strong className="tripeasy-accent">Map + itinerary coupling</strong> ensures that clicking a map pin scrolls the itinerary to the matched activity and vice versa.</li>
              <li><strong className="tripeasy-accent">Internal routing</strong> keeps users inside TripEasy for every action—from adding reservations to plotting driving directions.</li>
            </ul>
            <p>
              These redirects make TripEasy the single home for all travel routes and destinations—no copy-pasting links or juggling multiple tools.
            </p>
          </div>
        </section>

        <section className="case__section" id="features">
          <h2>6. Key Features</h2>
          <p>
            TripEasy combines intuitive interaction design with thoughtful information architecture to create 
            a seamless trip planning experience. Below are the core features that make collaborative planning 
            effortless and enjoyable.
          </p>

          <div className="case__design-subsection">
            <h3>6.1 Collaborative Itinerary Builder</h3>
            
            <div className="case__feature-card">
              <div className="case__feature-content">
              <h4>Day-by-Day Planning</h4>
              <p className="case__feature-desc">
                A timeline-based interface for organizing activities, accommodations, and transportation chronologically.
              </p>
              <div className="case__feature-details">
                <div className="case__feature-includes">
                  <strong>What it includes:</strong>
                  <ul className="case__bullets">
                    <li>Time-based scheduling with duration estimates</li>
                    <li>Activity details (location, notes, cost, attendees)</li>
                    <li>Real-time collaborative editing</li>
                    <li>Activity templates for common trip elements</li>
                  </ul>
                </div>
                <div className="case__feature-why">
                  <strong>Why it matters:</strong>
                  <p>Group trips require coordination and shared visibility. The timeline view makes it easy for everyone to see the plan, suggest changes, and understand the trip flow at a glance.</p>
                </div>
              </div>
              </div>
              <div className="case__feature-visual-placeholder">
                <img src={dayday} alt="Day-by-day planning screens" loading="lazy" />
              </div>
            </div>

            <div className="case__feature-card">
              <div className="case__feature-content">
              <h4>Map Integration</h4>
              <p className="case__feature-desc">
                Visual spatial context that connects itinerary items to their geographic locations.
              </p>
              <div className="case__feature-details">
                <div className="case__feature-includes">
                  <strong>What it includes:</strong>
                  <ul className="case__bullets">
                    <li>Interactive map with location pins</li>
                    <li>Route visualization between locations</li>
                    <li>Distance and travel time calculations</li>
                    <li>Toggle between map and list views</li>
                    <li>Location search and autocomplete</li>
                  </ul>
                </div>
                <div className="case__feature-why">
                  <strong>Why it matters:</strong>
                  <p>Maps provide essential spatial context that text-based itineraries cannot. Seeing locations on a map helps users understand proximity, plan efficient routes, and make informed decisions about activity sequencing.</p>
                </div>
              </div>
              </div>
              <div className="case__feature-visual-placeholder">
                <img src={map} alt="map integration" loading="lazy" />
              </div>    
              </div>

            <div className="case__feature-card">
              <div className="case__feature-content">
              <h4>Budget Tracking & Splitting</h4>
              <p className="case__feature-desc">
                Simplified expense management with automatic calculations and fair cost distribution.
              </p>
              <div className="case__feature-details">
                <div className="case__feature-includes">
                  <strong>What it includes:</strong>
                  <ul className="case__bullets">
                    <li>Expense categories (accommodation, food, activities, transport)</li>
                    <li>Automatic per-person cost calculations</li>
                    <li>Visual budget progress indicators</li>
                    <li>Expense splitting by activity or category</li>
                    <li>Currency conversion support</li>
                  </ul>
                </div>
                <div className="case__feature-why">
                  <strong>Why it matters:</strong>
                  <p>Budget management is often a source of stress in group trips. Clear visibility into spending and automatic calculations reduce friction and prevent awkward money conversations.</p>
                </div>
              </div>
              </div>
              <div className="case__feature-visual-image">
                <img src={budget} alt="Budget tracking dashboard" loading="lazy" />
              </div>            
            </div>

            <div className="case__feature-card">
              <div className="case__feature-content">
              <h4>Real-Time Collaboration</h4>
              <p className="case__feature-desc">
                Seamless group coordination with live updates and shared editing capabilities.
              </p>
              <div className="case__feature-details">
                <div className="case__feature-includes">
                  <strong>What it includes:</strong>
                  <ul className="case__bullets">
                    <li>User presence indicators</li>
                    <li>Live editing with conflict resolution</li>
                    <li>Activity assignment to group members</li>
                    <li>Comment threads on itinerary items</li>
                    <li>Notification system for changes</li>
                  </ul>
                </div>
                <div className="case__feature-why">
                  <strong>Why it matters:</strong>
                  <p>Group trips require input from multiple people. Real-time collaboration ensures everyone can contribute, see updates immediately, and feel included in the planning process.</p>
                </div>
              </div>
              </div>
              <div className="case__feature-visual-placeholder">
                <img src={collab} alt="Real-time collaboration" loading="lazy" />
              </div>
            </div>

            <div className="case__feature-card">
              <div className="case__feature-content">
              <h4>Trip Checklists</h4>
              <p className="case__feature-desc">
                Structured preparation and packing lists that keep the whole crew aligned on what’s ready and what’s still pending.
              </p>
              <div className="case__feature-details">
                <div className="case__feature-includes">
                  <strong>What it includes:</strong>
                  <ul className="case__bullets">
                    <li>Preparation checklist with due dates and reminders</li>
                    <li>Packing templates for essentials, gear, and personal items</li>
                    <li>Quick add buttons to capture tasks on the fly</li>
                    <li>Companion-specific assignments so responsibilities stay clear</li>
                  </ul>
                </div>
                <div className="case__feature-why">
                  <strong>Why it matters:</strong>
                  <p>Group trips succeed when everyone knows what to bring and when to finish prep work. Shared checklists prevent those stressful “did anyone pack the charger?” moments.</p>
                </div>
              </div>
              </div>
              <div className="case__feature-visual-image">
                <img src={checklists} alt="Trip checklists interface" loading="lazy" />
              </div>
            </div>

            <div className="case__feature-card">
              <div className="case__feature-content">
              <h4>Logistics</h4>
              <p className="case__feature-desc">
                A central space for lodging, transport, and companion coordination—so confirmations and timelines never get lost.
              </p>
              <div className="case__feature-details">
                <div className="case__feature-includes">
                  <strong>What it includes:</strong>
                  <ul className="case__bullets">
                    <li>Sections for stays, flights, trains, and ground transport</li>
                    <li>Inline prompts to add confirmation numbers and notes</li>
                    <li>Quick companion invites to share itineraries</li>
                    <li>Timeline view that shows how logistics connect across days</li>
                  </ul>
                </div>
                <div className="case__feature-why">
                  <strong>Why it matters:</strong>
                  <p>Travel details live in email threads, PDFs, and spreadsheets. TripEasy pulls them into one calm view so everyone knows where they’re sleeping, how they’re moving, and who’s joining.</p>
                </div>
              </div>
              </div>
              <div className="case__feature-visual-placeholder">
                <img src={logistics} alt="Logistics overview" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        <section className="case__section" id="reflection">
          <h2>Reflection</h2>
          <p>
            Designing TripEasy reinforced the importance of understanding how people actually work together, not just 
            how they work individually. The challenge wasn't just creating a good interface—it was designing for 
            group dynamics, communication patterns, and shared decision-making.
          </p>
          <p>
            One key learning was that collaboration tools need to balance structure with flexibility. Too much structure 
            feels rigid and constraining; too little creates chaos. Finding that balance required careful attention to 
            user feedback and iterative testing with real travel groups.
          </p>
          <p>
            The map integration proved to be one of the most valuable features, as it addressed a fundamental gap in 
            how people think about trips—spatially, not just temporally. This insight has influenced how I approach 
            other location-based design challenges.
          </p>
          <p>
            Looking forward, I'm interested in exploring how AI could assist with trip suggestions, route optimization, 
            and budget recommendations while maintaining the collaborative, human-centered approach that makes TripEasy 
            effective. I also see opportunities to integrate with booking platforms and travel services to further 
            streamline the planning process.
          </p>
          <div className="case__cta">
            <a href="https://tripeasy-ld8b.onrender.com" target="_blank" rel="noreferrer" className="case__cta-link case__cta-link--primary" style={{ backgroundColor: "#0B2B58" }}>
              Visit Live Site →
            </a>
            <a href="https://github.com/emmiamia/tripEasy" target="_blank" rel="noreferrer" className="case__cta-link case__cta-link--secondary" style={{color: "#0B2B58", border: "2px solid #0B2B58"}}>
              View Source Code on GitHub →
            </a>
          </div>
        </section>

        <section className="case__banner case__banner--footer" aria-label="TripEasy gallery banner">
          <img src={tripbanner} alt="TripEasy experience collage" className="case__banner-img" />
        </section>
      </main>
    </>
  );
}

export default TripEasy;
