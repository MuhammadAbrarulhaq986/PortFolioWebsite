import React, { useEffect, useRef, useState } from "react";

const skills = {
  languages: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "C", "C#"],
  frameworks: [
    "React.js",
    "React Native",
    "Next.js",
    "Redux",
    "React Router",
    "React Hook Form",
    "Vite",
    "Express.js",
    "Node.js",
    "Tailwind CSS",
    "Bootstrap",
    "daisyUI",
  ],
  tools: [
    "Firebase",
    "MongoDB",
    "Git",
    "GitHub",
    "GitHub Actions",
    "Vercel",
    "Expo",
    "NPM",
    "JWT",
    "Postman",
    "Thunder Client",
    "VS Code",
  ],
  concepts: [
    "DOM Manipulation",
    "Promise Handling",
    "State Management",
    "REST API Integration",
    "Responsive UI Design",
    "OOP Architecture",
    "Component Architecture",
    "Virtual DOM",
  ],
};

const education = [
  {
    degree: "Bachelor in Computer Science",
    institution: "Iqra University",
    timeline: "2025 — 2029",
    details:
      "Advancing knowledge in software engineering fundamentals, data structures, algorithms, and system-level computing.",
  },
  {
    degree: "Web and Mobile App Development",
    institution: "Saylani Mass IT Training (SMIT)",
    timeline: "2023 — 2025",
    details:
      "Completed an intensive full-stack development program covering modern frontend standards, backend integration, and production-grade application architecture.",
  },
  {
    degree: "Intermediate / Computer Science",
    institution: "Govt. College for Men, Nazimabad",
    timeline: "2021 — 2022",
    details:
      "Built a strong foundation in mathematics, physics, and analytical problem-solving.",
  },
];

const About = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  const arsenalSections = [
    { title: "Languages", items: skills.languages, icon: "⟨/⟩" },
    { title: "Libraries & Frameworks", items: skills.frameworks, icon: "◆" },
    { title: "Tools & Ecosystem", items: skills.tools, icon: "⚙" },
    { title: "Core Concepts", items: skills.concepts, icon: "◈" },
  ];

  return (
    <div className="container about-view">
      {/* ── Profile ── */}
      <section
        className={`section-reveal ${visible ? "revealed" : ""}`}
        style={{ animationDelay: "0.05s" }}
      >
        <h2>The Profile</h2>
        <div className="card identity-card">
          <div className="id-accent">
            <span className="id-tag">MERN STACK DEVELOPER</span>
            <span className="id-tag id-tag--alt">OPEN TO OPPORTUNITIES</span>
          </div>

          <p className="intro-highlight">
            Full Stack Developer specializing in the MERN stack — building
            scalable, performant, and visually refined web applications from
            database to UI.
          </p>

          <p className="body-narrative">
            I am a Frontend-focused Full Stack Developer with hands-on
            experience across the complete MERN stack: MongoDB, Express.js,
            React.js, and Node.js. My work spans responsive interface design,
            real-time Firebase integrations, REST API development, and
            component-driven architecture using modern React patterns including
            hooks, context, and state management with Redux.
          </p>

          {/*<p className="body-narrative" style={{ marginTop: "1rem" }}>
            I have built and deployed multiple production applications — ranging
            from full-stack blogging platforms and real-time data dashboards to
            interactive frontend tools — all hosted on Vercel with clean,
            maintainable codebases. I approach every project with a focus on
            performance, scalability, and user experience, applying the same
            discipline to code that I apply to continuous learning.
          </p>*/}

          <div className="seeking-banner">
            <span className="seeking-dot" />
            <span>
              Currently seeking a <strong>Junior Frontend Dev position</strong>{" "}
              position
              {/*<strong>Junior Frontend / Full Stack Developer</strong> position*/}
              where I can contribute, grow, and deliver real impact.
            </span>
          </div>
        </div>
      </section>

      {/* ── Technical Arsenal ── */}
      <section
        className={`section-reveal ${visible ? "revealed" : ""}`}
        style={{ animationDelay: "0.2s" }}
      >
        <h2>Technical Knowledge</h2>
        <div className="skills-grid">
          {arsenalSections.map(({ title, items, icon }, idx) => (
            <div
              key={title}
              className="card skill-node"
              style={{ animationDelay: `${0.3 + idx * 0.1}s` }}
            >
              <div className="node-header">
                <span className="node-icon">{icon}</span>
                <strong className="node-title">{title}</strong>
              </div>
              <div className="tag-cloud">
                {items.map((item) => (
                  <span key={item} className="tech-tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Education ── */}
      <section
        className={`section-reveal ${visible ? "revealed" : ""}`}
        style={{ animationDelay: "0.35s" }}
      >
        <h2>Academic Tracks</h2>
        <div className="education-timeline">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="card edu-card"
              style={{ animationDelay: `${0.45 + idx * 0.1}s` }}
            >
              <span className="edu-timeline">{edu.timeline}</span>
              <h3 className="edu-degree">{edu.degree}</h3>
              <h4 className="edu-institution">{edu.institution}</h4>
              <p className="edu-details">{edu.details}</p>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        .about-view {
          display: flex;
          flex-direction: column;
          gap: 4rem;
        }

        .section-reveal {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.7s var(--transition-snap), transform 0.7s var(--transition-snap);
        }
        .section-reveal.revealed { opacity: 1; transform: translateY(0); }

        /* ── Identity card ── */
        .identity-card { margin-top: 1rem; display: flex; flex-direction: column; gap: 0; }

        .id-accent { display: flex; gap: 0.5rem; margin-bottom: 1.4rem; flex-wrap: wrap; }

        .id-tag {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          letter-spacing: 2px;
          padding: 0.25rem 0.75rem;
          border: 1px solid rgba(0,245,212,0.3);
          color: var(--neon-cyan);
          background: rgba(0,245,212,0.05);
          text-transform: uppercase;
        }
        .id-tag--alt {
          border-color: rgba(255,0,85,0.3);
          color: var(--martial-crimson);
          background: rgba(255,0,85,0.05);
        }

        .intro-highlight {
          font-size: clamp(1.05rem, 1.8vw, 1.2rem);
          color: var(--neon-cyan);
          margin-bottom: 1.2rem;
          font-family: var(--font-display);
          font-weight: 700;
          letter-spacing: 0.3px;
          line-height: 1.55;
        }

        .body-narrative {
          font-size: clamp(0.95rem, 1.4vw, 1.05rem);
          line-height: 1.9;
          color: var(--text-muted);
        }

        /* Seeking banner */
        .seeking-banner {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          margin-top: 1.8rem;
          padding: 0.9rem 1.2rem;
          border: 1px solid rgba(0,245,212,0.15);
          background: rgba(0,245,212,0.03);
          font-family: var(--font-body);
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.5;
        }

        .seeking-banner strong { color: var(--text-main); font-weight: 700; }

        .seeking-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: var(--neon-cyan);
          box-shadow: 0 0 8px var(--neon-cyan);
          animation: pulseGlow 2s ease infinite;
          flex-shrink: 0;
        }

        /* ── Arsenal grid ── */
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 1.5rem;
          margin-top: 1rem;
        }

        .skill-node {
          border-left-color: var(--martial-crimson);
          animation: fadeInUp 0.6s var(--transition-snap) both;
        }
        .skill-node:hover { border-left-color: var(--neon-cyan); }

        .node-header { display: flex; align-items: center; gap: 0.6rem; margin-bottom: 1.1rem; }
        .node-icon   { font-size: 1rem; color: var(--neon-cyan); opacity: 0.8; }

        .node-title {
          color: var(--text-main);
          font-family: var(--font-display);
          font-size: 0.82rem;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          display: block;
        }

        .tag-cloud { display: flex; flex-wrap: wrap; gap: 0.45rem; }

        .tech-tag {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          padding: 0.28rem 0.6rem;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.07);
          color: var(--text-muted);
          transition: all 0.2s ease;
          cursor: default;
        }
        .tech-tag:hover {
          border-color: var(--neon-cyan);
          color: var(--neon-cyan);
          background: rgba(0,245,212,0.05);
          transform: translateY(-1px);
        }

        /* ── Education ── */
        .education-timeline { display: flex; flex-direction: column; gap: 1.5rem; margin-top: 1rem; }

        .edu-card {
          border-left-color: rgba(255,255,255,0.1);
          animation: fadeInUp 0.6s var(--transition-snap) both;
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }
        .edu-card:hover { border-left-color: var(--neon-cyan); }

        .edu-timeline {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--martial-crimson);
          letter-spacing: 1.5px;
        }

        .edu-degree {
          font-family: var(--font-display);
          font-size: clamp(0.9rem, 1.5vw, 1.05rem);
          font-weight: 700;
          color: var(--text-main);
          text-transform: uppercase;
          letter-spacing: 1px;
          margin: 0;
        }

        .edu-institution {
          font-family: var(--font-display);
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--neon-cyan);
          margin: 0;
          opacity: 0.85;
        }

        .edu-details {
          font-size: 0.92rem;
          line-height: 1.65;
          color: var(--text-muted);
          margin-top: 0.4rem;
        }

        /* ── Mobile ── */
        @media (max-width: 600px) {
          .about-view { gap: 2.5rem; }
          .skills-grid { grid-template-columns: 1fr 1fr; }
          .seeking-banner { font-size: 0.88rem; }
        }
        @media (max-width: 420px) {
          .skills-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
};

export default About;
