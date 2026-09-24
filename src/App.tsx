import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const pages = ["home", "about", "skills", "projects", "experience", "education", "resume", "contact"];

  const getPageFromHash = () => {
    const page = window.location.hash.replace("#", "");
    return pages.includes(page) ? page : "home";
  };

  const [activePage, setActivePage] = useState(getPageFromHash);

  useEffect(() => {
    const handleHashChange = () => {
      setActivePage(getPageFromHash());
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const changePage = (page: string) => {
    if (window.location.hash === `#${page}`) {
      setActivePage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    window.location.hash = page;
  };

  const currentIndex = pages.indexOf(activePage);
  const previousPage = currentIndex > 0 ? pages[currentIndex - 1] : null;
  const nextPage = currentIndex < pages.length - 1 ? pages[currentIndex + 1] : null;

  return (
    <div className="app">
      {/* ================= NAVIGATION ================= */}
      <header className="navbar">
        <div className="nav-container">
          <button type="button" className="logo logo-button" onClick={() => changePage("home")}>
            KJ
          </button>

          <nav className="nav-links">
  <button
    type="button"
    className={activePage === "about" ? "nav-page-link active" : "nav-page-link"}
    onClick={() => changePage("about")}
  >
    About
  </button>
  <button
    type="button"
    className={activePage === "skills" ? "nav-page-link active" : "nav-page-link"}
    onClick={() => changePage("skills")}
  >
    Skills
  </button>
  <button
    type="button"
    className={activePage === "projects" ? "nav-page-link active" : "nav-page-link"}
    onClick={() => changePage("projects")}
  >
    Projects
  </button>
  <button
    type="button"
    className={activePage === "experience" ? "nav-page-link active" : "nav-page-link"}
    onClick={() => changePage("experience")}
  >
    Experience
  </button>
  <button
    type="button"
    className={activePage === "education" ? "nav-page-link active" : "nav-page-link"}
    onClick={() => changePage("education")}
  >
    Education
  </button>
  <button
    type="button"
    className={activePage === "resume" ? "nav-page-link active" : "nav-page-link"}
    onClick={() => changePage("resume")}
  >
    Resume
  </button>
  <button
    type="button"
    className={activePage === "contact" ? "nav-page-link active" : "nav-page-link"}
    onClick={() => changePage("contact")}
  >
    Contact
  </button>
</nav>
        </div>
      </header>

      <main>
        {/* ================= HERO ================= */}
        <section id="home" className={activePage === "home" ? "hero page-panel page-active" : "hero page-panel"}>
          <div className="hero-content">
            <p className="eyebrow">FULL-STACK SOFTWARE DEVELOPER</p>

            <h1>
              Hi, I'm <span>Kevin Jordan</span>
            </h1>

            <h2>
              I build modern full-stack applications from frontend to database.
            </h2>

            <p className="hero-description">
              Full-stack developer with experience building production-ready
              applications using Java, Spring Boot, React, TypeScript, Python,
              PostgreSQL, REST APIs, authentication, and cloud deployment.
            </p>

            <div className="hero-buttons">
              <button type="button" className="primary-button" onClick={() => changePage("projects")}>
                View My Projects
              </button>

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
        <section id="about" className={activePage === "about" ? "section page-panel page-active" : "section page-panel"}>
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
              My recent work includes FinSight AI, an AI-powered personal
              finance application, a full-stack vehicle maintenance dashboard,
              and Family Legacy Calendar. I enjoy turning real-world problems
              into useful, reliable software.
            </p>
          </div>
        </section>

        {/* ================= SKILLS ================= */}
        <section id="skills" className={activePage === "skills" ? "section page-panel page-active" : "section page-panel"}>
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
                <span>Java</span>
                <span>Spring Boot</span>
                <span>Spring Security</span>
                <span>Python</span>
                <span>FastAPI</span>
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
                <span>SQLAlchemy</span>
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
<section id="projects" className={activePage === "projects" ? "section projects-section page-panel page-active" : "section projects-section page-panel"}>
  <div className="section-heading projects-heading">
    <p className="section-label">FEATURED PROJECTS</p>
    <h2>Applications I've built and deployed.</h2>
    <p className="projects-intro">
      A collection of full-stack applications showcasing my experience with
      Java, Spring Boot, React, TypeScript, Python, PostgreSQL, APIs, AI, and
      cloud deployment.
    </p>
  </div>

  <div className="projects-grid compact-projects-grid">

    {/* INVENTORYPRO */}
    <article className="compact-project-card">
      <img
        src="/project-images/inventorypro.png"
        alt="InventoryPro inventory and order management dashboard"
        className="compact-project-image"
      />

      <div className="compact-project-body">
        <p className="compact-project-type">JAVA / FULL-STACK</p>
        <h3>InventoryPro</h3>

        <p className="compact-project-description">
          Secure inventory and order management system with products,
          customers, orders, reorder alerts, reporting, and database analytics.
        </p>

        <div className="compact-tech-stack">
          <span>Java</span>
          <span>Spring Boot</span>
          <span>React</span>
          <span>PostgreSQL</span>
        </div>

        <div className="compact-project-buttons">
          <a
            href="https://inventory-order-management-1-z7kr.onrender.com"
            target="_blank"
            rel="noreferrer"
            className="primary-button"
          >
            Live Demo
          </a>

          <a
            href="https://github.com/KevinJ3259/inventory-order-management"
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
    <article className="compact-project-card">
      <img
        src="/project-images/finsight-ai.png"
        alt="FinSight AI personal finance dashboard"
        className="compact-project-image"
      />

      <div className="compact-project-body">
        <p className="compact-project-type">AI / FULL-STACK</p>
        <h3>FinSight AI</h3>

        <p className="compact-project-description">
          AI-powered personal finance platform for transactions, budgets,
          savings goals, forecasting, and personalized financial insights.
        </p>

        <div className="compact-tech-stack">
          <span>Python</span>
          <span>FastAPI</span>
          <span>React</span>
          <span>PostgreSQL</span>
        </div>

        <div className="compact-project-buttons">
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

    {/* AI SAFETY EQUIPMENT DETECTION */}
    <article className="compact-project-card">
      <img
        src="/project-images/ai-safety-equipment.png"
        alt="AI Safety Equipment Detection System"
        className="compact-project-image"
      />

      <div className="compact-project-body">
        <p className="compact-project-type">AI / COMPUTER VISION</p>
        <h3>AI Safety Equipment Detection</h3>

        <p className="compact-project-description">
          Computer vision application using a custom-trained YOLO11 model
          to detect workplace safety equipment, including hard hats and
          safety vests, with bounding boxes and confidence scores.
        </p>

        <div className="compact-tech-stack">
          <span>Python</span>
          <span>YOLO11</span>
          <span>PyTorch</span>
          <span>Streamlit</span>
        </div>

        <div className="compact-project-buttons">
          <a
            href="https://ai-safety-equipment-detection.streamlit.app"
            target="_blank"
            rel="noreferrer"
            className="primary-button"
          >
            Live Demo
          </a>

          <a
            href="https://github.com/KevinJ3259/ai-safety-equipment-detection"
            target="_blank"
            rel="noreferrer"
            className="secondary-button"
          >
            View Code
          </a>
        </div>
      </div>
    </article>

    {/* CAREERTRACK AI */}
    <article className="compact-project-card">
      <img
        src="/project-images/careertrack-ai.png"
        alt="CareerTrack AI dashboard"
        className="compact-project-image"
      />

      <div className="compact-project-body">
        <p className="compact-project-type">AI / FULL-STACK</p>
        <h3>CareerTrack AI</h3>

        <p className="compact-project-description">
          AI-powered career platform for tracking applications and interviews,
          analyzing resumes, and generating tailored cover letters.
        </p>

        <div className="compact-tech-stack">
          <span>React</span>
          <span>TypeScript</span>
          <span>Node.js</span>
          <span>PostgreSQL</span>
        </div>

        <div className="compact-project-buttons">
          <a
            href="https://careertrack-ai-sigma.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="primary-button"
          >
            Live Demo
          </a>

          <a
            href="https://github.com/KevinJ3259/careertrack-ai"
            target="_blank"
            rel="noreferrer"
            className="secondary-button"
          >
            View Code
          </a>
        </div>
      </div>
    </article>

    {/* FAMILY LEGACY CALENDAR */}
    <article className="compact-project-card">
      <img
        src="/project-images/family-legacy-calendar.png"
        alt="Family Legacy Calendar"
        className="compact-project-image"
      />

      <div className="compact-project-body">
        <p className="compact-project-type">FULL-STACK</p>
        <h3>Family Legacy Calendar</h3>

        <p className="compact-project-description">
          Private family calendar for birthdays, events, family members, photo
          memories, and automatic monthly collage layouts.
        </p>

        <div className="compact-tech-stack">
          <span>React</span>
          <span>TypeScript</span>
          <span>Python</span>
          <span>PostgreSQL</span>
        </div>

        <div className="compact-project-buttons">
          <a
            href="https://family-legacy-calendar-frontend.onrender.com"
            target="_blank"
            rel="noreferrer"
            className="primary-button"
          >
            Live Demo
          </a>

          <a
            href="https://github.com/KevinJ3259/family-legacy-calendar"
            target="_blank"
            rel="noreferrer"
            className="secondary-button"
          >
            View Code
          </a>
        </div>
      </div>
    </article>

    {/* VEHICLE MAINTENANCE */}
    <article className="compact-project-card">
      <img
        src="/project-images/vehicle-maintenance.png"
        alt="Vehicle Maintenance Dashboard"
        className="compact-project-image"
      />

      <div className="compact-project-body">
        <p className="compact-project-type">FULL-STACK</p>
        <h3>Vehicle Maintenance Dashboard</h3>

        <p className="compact-project-description">
          Vehicle maintenance and fuel tracking dashboard with service history,
          reminders, MPG analysis, alerts, and ownership-cost reporting.
        </p>

        <div className="compact-tech-stack">
          <span>React</span>
          <span>TypeScript</span>
          <span>Node.js</span>
          <span>PostgreSQL</span>
        </div>

        <div className="compact-project-buttons">
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

  </div>
</section>

        {/* ================= EXPERIENCE ================= */}
<section id="experience" className={activePage === "experience" ? "section page-panel page-active" : "section page-panel"}>
  <div className="section-heading">
    <p className="section-label">PROFESSIONAL EXPERIENCE</p>
    <h2>Professional experience in technology, customer service, and sales.</h2>
  </div>

  <div className="experience-list">
    <div className="experience-card">
      <p className="experience-type">PROFESSIONAL EXPERIENCE</p>

      <h3>Race Communications — Outside Sales Representative</h3>
      <h4>Sales • Customer Engagement • Fiber Internet Solutions</h4>

      <p className="experience-date">September 2026 – Present</p>

      <p>
        Represent Race Communications through direct customer outreach,
        helping residential customers understand available fiber internet
        and phone services. Assess customer needs, recommend appropriate
        solutions, answer questions, address objections, and build strong
        customer relationships while working toward individual and team
        sales goals.
      </p>
    </div>
<div className="experience-card">
      <p className="experience-type">PROFESSIONAL EXPERIENCE</p>

      <h3>GEICO Insurance Agency — MOAT Coastal Service Representative IV</h3>
      <h4>Problem Solving • Customer Support • Process Accuracy</h4>

      <p className="experience-date">April 2022 – June 2026</p>

      <p>
        Managed complex customer issues, analyzed account and policy concerns,
        communicated solutions clearly, and worked across internal teams to
        resolve problems efficiently.
      </p>
    </div>

<div className="experience-card">
      <p className="experience-type">PROFESSIONAL EXPERIENCE</p>

      <h3>AT&T — Installation Technician</h3>
      <h4>Technical Troubleshooting • Networking • Fiber</h4>

      <p className="experience-date">July 2013 – April 2022</p>

      <p>
        Installed and supported fiber-optic internet, voice, Wi-Fi, structured
        cabling, residential gateways, and networking equipment. Diagnosed and
        resolved hardware, connectivity, and customer technology issues.
      </p>
    </div>

  </div>
</section>

        {/* ================= EDUCATION ================= */}
        <section
          id="education"
          className={activePage === "education" ? "section page-panel page-active" : "section page-panel"}
        >
          <div className="section-heading">
            <p className="section-label">EDUCATION & TRAINING</p>
            <h2>Education and technical training.</h2>
          </div>

          <div className="experience-list">
<div className="experience-card">
      <p className="experience-type">EDUCATION</p>
      <h3>Bachelor of Science — Information Technology</h3>
      <h4>Software Engineering</h4>
      <p>University of Phoenix — 2020</p>
    </div>

    <div className="experience-card">
      <p className="experience-type">EDUCATION</p>
      <h3>Associate of Arts — Foundations of Business</h3>
      <p>University of Phoenix — 2010</p>
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
        <section id="resume" className={activePage === "resume" ? "section resume-section page-panel page-active" : "section resume-section page-panel"}>
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
        <section id="contact" className={activePage === "contact" ? "section contact-section page-panel page-active" : "section contact-section page-panel"}>
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

        <div className="page-controls">
          <button
            type="button"
            className="page-control-button"
            onClick={() => previousPage && changePage(previousPage)}
            disabled={!previousPage}
          >
            ← Previous
          </button>

          <span className="page-indicator">
            {currentIndex + 1} / {pages.length}
          </span>

          <button
            type="button"
            className="page-control-button"
            onClick={() => nextPage && changePage(nextPage)}
            disabled={!nextPage}
          >
            Next →
          </button>
        </div>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="footer">
        <p>© 2026 Kevin Jordan. Built with React & TypeScript.</p>
      </footer>
    </div>
  );
}

export default App;