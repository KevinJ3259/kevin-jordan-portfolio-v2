import "./App.css";

function App() {
  return (
    <div className="app">
      {/* ================= NAVIGATION ================= */}
      <header className="navbar">
        <div className="nav-container">
          <a href="#home" className="logo">
            KJ
          </a>

          <nav className="nav-links">
  <a href="#about">About</a>
  <a href="#skills">Skills</a>
  <a href="#projects">Projects</a>
  <a href="#experience">Experience</a>
  <a href="#resume">Resume</a>
  <a href="#contact">Contact</a>
</nav>
        </div>
      </header>

      <main>
        {/* ================= HERO ================= */}
        <section id="home" className="hero">
          <div className="hero-content">
            <p className="eyebrow">FULL-STACK SOFTWARE DEVELOPER</p>

            <h1>
              Hi, I'm <span>Kevin Jordan</span>
            </h1>

            <h2>
              I build modern full-stack applications from frontend to database.
            </h2>

            <p className="hero-description">
              React and TypeScript developer with experience building
              production-ready applications using Node.js, Express, PostgreSQL,
              Prisma, REST APIs, and AI integrations.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="primary-button">
                View My Projects
              </a>

              <a
                href="https://github.com/KevinJ3259"
                target="_blank"
                rel="noreferrer"
                className="secondary-button"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/kevin-jordan-50a5341a0"
                target="_blank"
                rel="noreferrer"
                className="secondary-button"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>

        {/* ================= ABOUT ================= */}
        <section id="about" className="section">
          <div className="section-heading">
            <p className="section-label">ABOUT ME</p>
            <h2>Developer focused on building practical applications.</h2>
          </div>

          <div className="about-content">
            <p>
              I'm a full-stack software developer with a background in
              information technology, software engineering, technical
              troubleshooting, and customer-focused problem solving.
            </p>

            <p>
              I build applications across the entire stack, including
              responsive React interfaces, REST APIs, server-side business
              logic, relational databases, authentication, and cloud
              deployments.
            </p>

            <p>
              My recent work includes an AI-powered career management platform
              and a full-stack vehicle maintenance dashboard. I enjoy turning
              real-world problems into useful, reliable software.
            </p>
          </div>
        </section>

        {/* ================= SKILLS ================= */}
        <section id="skills" className="section">
          <div className="section-heading">
            <p className="section-label">TECHNICAL SKILLS</p>
            <h2>Technologies I use to build applications.</h2>
          </div>

          <div className="skills-grid">
            <div className="skill-card">
              <h3>Frontend</h3>
              <div className="skill-list">
                <span>React</span>
                <span>TypeScript</span>
                <span>JavaScript</span>
                <span>HTML5</span>
                <span>CSS3</span>
                <span>Responsive Design</span>
              </div>
            </div>

            <div className="skill-card">
              <h3>Backend</h3>
              <div className="skill-list">
                <span>Node.js</span>
                <span>Express</span>
                <span>REST APIs</span>
                <span>Authentication</span>
                <span>API Integration</span>
              </div>
            </div>

            <div className="skill-card">
              <h3>Database</h3>
              <div className="skill-list">
                <span>PostgreSQL</span>
                <span>Prisma ORM</span>
                <span>SQL</span>
                <span>Database Design</span>
                <span>Neon</span>
              </div>
            </div>

            <div className="skill-card">
              <h3>Tools & Deployment</h3>
              <div className="skill-list">
                <span>Git</span>
                <span>GitHub</span>
                <span>VS Code</span>
                <span>Render</span>
                <span>Vercel</span>
                <span>OpenAI API</span>
              </div>
            </div>
          </div>
        </section>

        {/* ================= PROJECTS ================= */}
        <section id="projects" className="section projects-section">
          <div className="section-heading">
            <p className="section-label">FEATURED PROJECTS</p>
            <h2>Applications I've built and deployed.</h2>
          </div>

          <div className="projects-grid">
            {/* CAREERTRACK AI */}
            <article className="project-card">
              <div className="project-number">01</div>

              <div className="project-content">
                <p className="project-type">
                  AI / FULL-STACK APPLICATION
                </p>

                <h3>CareerTrack AI</h3>

                <img
                  src="/project-images/careertrack-ai.png"
                  alt="CareerTrack AI dashboard"
                  className="project-image"
                />

                <p className="project-description">
                  AI-powered career management platform for organizing job
                  applications, tracking interviews, analyzing resumes, and
                  generating tailored cover letters.
                </p>

                <div className="project-features">
                  <span>Job Application Tracking</span>
                  <span>AI Resume Analysis</span>
                  <span>AI Cover Letters</span>
                  <span>Interview Tracking</span>
                  <span>Dashboard Analytics</span>
                </div>

                <div className="tech-stack">
                  <span>React</span>
                  <span>TypeScript</span>
                  <span>Node.js</span>
                  <span>Express</span>
                  <span>PostgreSQL</span>
                  <span>Prisma</span>
                  <span>OpenAI API</span>
                </div>

                <div className="project-buttons">
                  <a
                    href="https://careertrack-ai-sigma.vercel.app"
                    target="_blank"
                    rel="noreferrer"
                    className="primary-button"
                  >
                    Live Demo
                  </a>

                  <a
                    href="https://github.com/KevinJ3259"
                    target="_blank"
                    rel="noreferrer"
                    className="secondary-button"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </article>

            {/* VEHICLE MAINTENANCE DASHBOARD */}
            <article className="project-card">
              <div className="project-number">02</div>

              <div className="project-content">
                <p className="project-type">
                  FULL-STACK WEB APPLICATION
                </p>

                <h3>Vehicle Maintenance Dashboard</h3>

                <img
                  src="/project-images/vehicle-maintenance.png"
                  alt="Vehicle Maintenance Dashboard"
                  className="project-image"
                />

                <p className="project-description">
                  Full-stack vehicle maintenance and fuel tracking application
                  that helps users manage service history, maintenance
                  reminders, fuel expenses, MPG, and vehicle ownership costs.
                </p>

                <div className="project-features">
                  <span>Vehicle Management</span>
                  <span>Maintenance Tracking</span>
                  <span>Service Reminders</span>
                  <span>Fuel Tracking</span>
                  <span>MPG Analytics</span>
                  <span>Ownership Costs</span>
                </div>

                <div className="tech-stack">
                  <span>React</span>
                  <span>TypeScript</span>
                  <span>Node.js</span>
                  <span>Express</span>
                  <span>PostgreSQL</span>
                  <span>Prisma</span>
                  <span>Neon</span>
                  <span>Render</span>
                </div>

                <div className="project-buttons">
                  <a
                    href="https://vehicle-maintenance-app-frontend.onrender.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="primary-button"
                  >
                    Live Demo
                  </a>

                  <a
                    href="https://github.com/KevinJ3259/vehicle-maintenance-app"
                    target="_blank"
                    rel="noreferrer"
                    className="secondary-button"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </article>

            {/* FINSIGHT AI */}
            <article className="project-card">
              <div className="project-number">03</div>

              <div className="project-content">
                <p className="project-type">
                  AI / FULL-STACK FINANCE APPLICATION
                </p>

                <h3>FinSight AI</h3>

                <img
                  src="/project-images/finsight-ai.png"
                  alt="FinSight AI personal finance dashboard"
                  className="project-image"
                />

                <p className="project-description">
                  Secure AI-powered personal finance application for tracking
                  income and expenses, planning recurring cash flow, managing
                  budgets and savings goals, and generating personalized
                  financial insights.
                </p>

                <div className="project-features">
                  <span>Secure User Authentication</span>
                  <span>Income & Expense Tracking</span>
                  <span>Cash-Flow Forecasting</span>
                  <span>Budget Management</span>
                  <span>Savings Goals</span>
                  <span>AI Financial Insights</span>
                </div>

                <div className="tech-stack">
                  <span>Python</span>
                  <span>FastAPI</span>
                  <span>React</span>
                  <span>TypeScript</span>
                  <span>PostgreSQL</span>
                  <span>SQLAlchemy</span>
                  <span>JWT</span>
                  <span>OpenAI API</span>
                  <span>Render</span>
                </div>

                <div className="project-buttons">
                  <a
                    href="https://finsight-ai-0961.onrender.com"
                    target="_blank"
                    rel="noreferrer"
                    className="primary-button"
                  >
                    Live Demo
                  </a>

                  <a
                    href="https://github.com/KevinJ3259/finsight-ai"
                    target="_blank"
                    rel="noreferrer"
                    className="secondary-button"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* ================= EXPERIENCE ================= */}
<section id="experience" className="section">
  <div className="section-heading">
    <p className="section-label">EXPERIENCE & EDUCATION</p>
    <h2>Technical experience backed by hands-on development.</h2>
  </div>

  <div className="experience-list">
    <div className="experience-card">
      <p className="experience-type">PROFESSIONAL EXPERIENCE</p>

      <h3>AT&T — Installation Technician</h3>
      <h4>Technical Troubleshooting • Networking • Fiber</h4>

      <p>
        Installed and supported fiber-optic internet, voice, Wi-Fi, structured
        cabling, residential gateways, and networking equipment. Diagnosed and
        resolved hardware, connectivity, and customer technology issues.
      </p>
    </div>

    <div className="experience-card">
      <p className="experience-type">PROFESSIONAL EXPERIENCE</p>

      <h3>GEICO — Customer Service Representative</h3>
      <h4>Problem Solving • Customer Support • Process Accuracy</h4>

      <p>
        Managed complex customer issues, analyzed account and policy concerns,
        communicated solutions clearly, and worked across internal teams to
        resolve problems efficiently.
      </p>
    </div>

    <div className="experience-card">
      <p className="experience-type">EDUCATION</p>

      <h3>Bachelor of Science — Information Technology</h3>
      <h4>Software Engineering</h4>

      <p>University of Phoenix — 2020</p>
    </div>

    <div className="experience-card">
      <p className="experience-type">TECHNICAL TRAINING</p>

      <h3>Full-Stack Web Development Bootcamp</h3>
      <h4>React • Node.js • Express • Databases • APIs</h4>

      <p>University of Kansas — 2022</p>
    </div>
  </div>
</section>

        {/* ================= RESUME ================= */}
        <section id="resume" className="section resume-section">
          <div className="section-heading">
            <p className="section-label">RESUME</p>
            <h2>Professional background and qualifications.</h2>
          </div>

          <div className="resume-card">
            <p>
              Full-stack software developer with experience building and
              deploying production-ready applications using React, TypeScript,
              Node.js, Express, PostgreSQL, Prisma, REST APIs, and AI
              integrations.
            </p>

            <a
              href="/Kevin%20Jordan%20Full%20Stack%20Resume.pdf"
              download
              className="primary-button"
            >
              Download Resume
            </a>
          </div>
        </section>

        {/* ================= CONTACT ================= */}
        <section id="contact" className="section contact-section">
          <div className="section-heading">
            <p className="section-label">CONTACT</p>
            <h2>Let's build something useful.</h2>
          </div>

          <p className="contact-description">
            I'm interested in software engineering, full-stack development,
            frontend development, backend development, and technology
            opportunities where I can contribute and continue growing as an
            engineer.
          </p>

          <div className="contact-buttons">
            <a
              href="mailto:kmjordan2009.kj@gmail.com"
              className="primary-button"
            >
              Email Me
            </a>

            <a
              href="https://github.com/KevinJ3259"
              target="_blank"
              rel="noreferrer"
              className="secondary-button"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/kevin-jordan-50a5341a0"
              target="_blank"
              rel="noreferrer"
              className="secondary-button"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="footer">
        <p>© 2026 Kevin Jordan. Built with React & TypeScript.</p>
      </footer>
    </div>
  );
}

export default App;
