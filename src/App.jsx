import React, { useEffect, useMemo, useState } from "react";

export default function App() {
  // ---- EDIT THIS PROFILE INFO ----
  const profile = useMemo(() => ({
    name: "Waritnun Sakulklang",
    headline: "CS student @Chulalongkorn University • Full-Stack / Back-End",
    location: "Bangkok, Thailand",
    email: "waritnunsakulklang@gmail.com",
    github: "https://github.com/waritnun",
    linkedin: "https://www.linkedin.com/in/wsakulklang",
    resumeUrl: `${import.meta.env.BASE_URL}resume.pdf`,
    lookingFor: "Back-End / Full-Stack Internship",
    focus: ["REST APIs", "Cloud Storage", "Async Pipelines"],
  }), []);

  const projects = useMemo(() => ([
    {
      title: "Project A — Optimized back-end for the Variant Analysis module ",
      desc: "Implemented a Django-based backend service to handle data transmission from the frontend and store structured records in MongoDB",
      tags: ["Python", "Django", "Docker", "PostgreSQL", "MongoDB", "MinIO S3"],
      links: {
        Code: "https://github.com/YOUR_GITHUB/REPO",
        Demo: "#",
        "Write-up": "#",
      },
    },
    {
      title: "Project B — Document Request System",
      desc: "Designed a document request website and integrated a Node.js service that validates submissions and logs each request to Google Sheets",
      tags: ["HTML/CSS","JavaScript", "Node.js", "Google Sheets API", "Evaluation"],
      links: {
        Code: "https://github.com/YOUR_GITHUB/REPO",
        Report: "#",
      },
    },
    {
      title: "Project C — Elaboration Skills Analysis Model",
      desc: "Developed a speech-to-text + NLP pipeline to score elaboration quality from spoken answers. Built TF-IDF feature extraction and a reference-based scoring method using IELTS Writing data, packaged into reusable modules.",
      tags: ["Python", "NLP (TF-IDF)"],
      links: {
        Code: "https://github.com/YOUR_GITHUB/REPO",
        "Live App": "#",
      },
    },
  ]), []);

  const experience = useMemo(() => ([
    {
      role: "Backend Developer Intern — NBT (NSTDA)",
      meta: "Jun 2025 – Aug 2025 • Bangkok",
      bullets: [
        "Built secure Django REST APIs (CRUD + permissions + filtering by user).",
        "Implemented presigned upload to S3/MinIO with FASTQ validation and metadata extraction.",
        "Triggered processing pipelines via Kafka and exposed a unified job timeline endpoint.",
      ],
    },
    {
      role: "Math & Science Tutor (Grades 5–11)",
      meta: "2025 - Present",
      bullets: [
        "Tutor students in math and science, adapting lessons to each student’s level and learning goals.",
        "Create practice sets and explain concepts clearly to improve understanding and exam performance.",
      ],
    },
    {
      role: "Brain Hackathon 2024 — Second Runner-Up",
      meta: "Jan 2024 • PMU-B",
      bullets: [
        "Developed an end-to-end prototype to assess elaboration quality from spoken responses (audio → transcription → text features → scoring).",
        "Implemented reusable preprocessing, TF-IDF vectorization, and evaluation modules; validated the approach using IELTS Writing datasets.",
      ],
    },
    {
      role: "DPST Scholarship - Computer Science",
      meta: "2024 – Present",
      bullets: [
        " A highly selective national scholarship awarded by the Institute for the Promotion of Teaching Science and Technology (IPST) to students with outstanding academic performance and research potential in STEM fields.",
      ],
    },
  ]), []);

  const skills = useMemo(() => ({
    Tech: ["Python","Java", "JavaScript", "SQL", "Git", "Docker"],
    "Web": ["Django", "Node.js", "REST APIs", "MongoDB", "React","S3/MinIO"],
    Product: ["REST APIs", "Requirements", "Workflows", "Docs", "Communication"]
,
  }), []);

  // ---- Theme toggle (remember preference) ----
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const year = new Date().getFullYear();

  return (
    <>
      <div className="nav">
        <div className="nav-inner">
          <div className="brand">
            <div className="dot" aria-hidden="true" />
            <div>{profile.name}</div>
          </div>

          <nav className="links" aria-label="Primary">
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>

            <button
              className="btn"
              type="button"
              onClick={() => setTheme(t => (t === "dark" ? "light" : "dark"))}
              aria-label="Toggle theme"
              title="Toggle theme"
            >
              <span aria-hidden="true">🌓</span> Theme
            </button>
          </nav>
        </div>
      </div>

      <div className="wrap">
        <header className="hero" id="top">
          <div className="hero-grid">
            <div className="card">
              <h1 className="headline">
                Hi, I’m <span style={{ color: "var(--accent)" }}>{profile.name}</span>.
              </h1>
              <p className="sub">{profile.headline}</p>

              <div className="meta-row" aria-label="Highlights">
                <div className="pill">{profile.location}</div>
                <div className="pill">{profile.lookingFor}</div>
                <div className="pill">{profile.focus.join(" • ")}</div>
              </div>


              <div className="cta">
                <a className="btn btn-primary" href="#contact">Contact me</a>
                <a className="btn" href={profile.resumeUrl} target="_blank" rel="noopener">
                  View Resume (PDF)
                </a>
                <a className="btn" href={profile.github} target="_blank" rel="noopener">
                  GitHub
                </a>
                <a className="btn" href={profile.linkedin} target="_blank" rel="noopener">
                  LinkedIn
                </a>
              </div>

            
            </div>

            <aside className="card quick" aria-label="Quick facts">
              <div className="row">
                <p className="k">Education</p>
                <p className="v">Chulalongkorn University</p>
              </div>
              <div className="row">
                <p className="k">Availability</p>
                <p className="v">Summer Internship 2026</p>
              </div>
              <div className="row">
                <p className="k">Contact</p>
                <p className="v"><a href={`mailto:${profile.email}`}>{profile.email}</a></p>
              </div>
            </aside>
          </div>
        </header>

        <section id="projects">
          <div className="section-title">
            <h2>Projects</h2>
          </div>

          <div className="grid-3">
            {projects.map((p) => (
              <article className="card project" key={p.title}>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>

                <div className="tags" aria-label="Project tags">
                  {p.tags.map(t => <span className="tag" key={t}>{t}</span>)}
                </div>

              
              </article>
            ))}
          </div>
        </section>

        <section id="experience">
          <div className="section-title">
            <h2>Experience</h2>
            <span>Internships, competitions, scholarship, awarded.</span>
          </div>

          <div className="two-col">
            <div className="list">
              {experience.slice(0, Math.ceil(experience.length / 2)).map((e) => (
                <div className="item" key={e.role}>
                  <div className="top">
                    <div className="role">{e.role}</div>
                    <div className="meta">{e.meta}</div>
                  </div>
                  <ul>
                    {e.bullets.map((b, i) => <li key={i}>{b}</li>)}
                  </ul>
                </div>
              ))}
            </div>

            <div className="list">
              {experience.slice(Math.ceil(experience.length / 2)).map((e) => (
                <div className="item" key={e.role}>
                  <div className="top">
                    <div className="role">{e.role}</div>
                    <div className="meta">{e.meta}</div>
                  </div>
                  <ul>
                    {e.bullets.map((b, i) => <li key={i}>{b}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="skills">
          <div className="section-title">
            <h2>Skills</h2>
          </div>

          <div className="grid-3">
            {Object.entries(skills).map(([group, items]) => (
              <div className="card" key={group}>
                <h3 style={{ margin: "0 0 8px" }}>{group}</h3>
                <div className="tags">
                  {items.map(s => <span className="tag" key={s}>{s}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact">
          <div className="section-title">
            <h2>Contact</h2>
          </div>

          <div className="two-col">
            <div className="card">

              <div className="tags" style={{ marginBottom: 12 }}>
                <span className="tag">
                  Email: <a href={`mailto:${profile.email}`}><b>{profile.email}</b></a>
                </span>
                <span className="tag">
                  GitHub: <a href={profile.github} target="_blank" rel="noopener"><b>Profile</b></a>
                </span>
                <span className="tag">
                  LinkedIn: <a href={profile.linkedin} target="_blank" rel="noopener"><b>Profile</b></a>
                </span>
              </div>

              <a
                className="btn btn-primary"
                href={`mailto:${profile.email}?subject=Internship%20Opportunity&body=Hi%20${encodeURIComponent(profile.name)}%2C%0A%0A`}
              >
                ✉️ Email me
              </a>
            </div>

            <div className="card">
              <h3 style={{ margin: "0 0 8px" }}>Resume</h3>
              <a className="btn" href={profile.resumeUrl} target="_blank" rel="noopener">
                Open resume.pdf
              </a>
            </div>
          </div>
        </section>

        <footer>
          <div>© {year} {profile.name}</div>
          <div><a href="#top">Back to top ↑</a></div>
        </footer>
      </div>
    </>
  );
}
