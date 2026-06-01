import React, { useEffect, useRef, useState } from "react";

/* Animated skill bar component */
const SkillBar = ({ name, level, delay }) => {
  const [filled, setFilled] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setFilled(true);
      },
      { threshold: 0.3 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="skill-bar-wrap"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="skill-bar-header">
        <span className="skill-bar-name">{name}</span>
        <span className="skill-bar-pct">{level}%</span>
      </div>
      <div className="skill-bar-track">
        <div
          className="skill-bar-fill"
          style={{
            width: filled ? `${level}%` : "0%",
            transitionDelay: `${delay}s`,
          }}
        />
        <div
          className="skill-bar-glow"
          style={{
            left: filled ? `${level}%` : "0%",
            transitionDelay: `${delay + 0.05}s`,
          }}
        />
      </div>
    </div>
  );
};

// Core metrics calibrated to your hands-on experience
const skillLevels = {
  "React.js & DOM": 90,
  "JavaScript (ES6+ / DOM / Promises)": 88,
  "Tailwind CSS & daisyUI": 85,
  "HTML5 & CSS3": 92,
  "Firebase Backend Integration": 78,
};

// Thorough data compiled directly from your arsenal
const skills = {
  languages: ["JavaScript (ES6+)", "HTML5", "CSS3", "C", "C#"],
  frameworks: ["React.js", "Tailwind CSS", "Bootstrap", "daisyUI"],
  tools: [
    "Firebase Services",
    "React Hook Forms",
    "React Icons",
    "Git / GitHub",
    "Vercel",
  ],
  concepts: [
    "DOM Manipulation",
    "Promise Handling",
    "State Management",
    "API Fetching",
    "Responsive UI Design",
  ],
};

const About = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="container about-view">
      {/* ── Profile Section ── */}
      <section
        className={`profile-section section-reveal ${visible ? "revealed" : ""}`}
        style={{ animationDelay: "0.1s" }}
      >
        <h2>The Profile</h2>
        <div className="card identity-card">
          <div className="id-accent">
            <span className="id-tag">OPERATOR</span>
            {/*<span className="id-tag id-tag--alt">MARTIAL ARTIST</span>*/}
          </div>
          <p className="intro-highlight">
            Frontend Developer focused on building highly responsive,
            interactive, and visually stunning web applications.
          </p>
          <p className="body-narrative">
            Passionate about transforming complex layouts into clean, efficient
            React code. Armed with extensive experience handling standard
            frontend practices, real-time API integrations, and modern ecosystem
            architectures, I thrive on crafting reliable digital environments
            and continuously conquering new engineering milestones.
          </p>
        </div>
      </section>

      {/* ── Core Skills with Bars ── */}
      <section
        className={`skills-section section-reveal ${visible ? "revealed" : ""}`}
        style={{ animationDelay: "0.25s" }}
      >
        <h2>Core Proficiency</h2>
        <div className="card skill-bars-card">
          {Object.entries(skillLevels).map(([name, level], i) => (
            <SkillBar key={name} name={name} level={level} delay={i * 0.1} />
          ))}
        </div>
      </section>

      {/* ── Technical Arsenal ── */}
      <section
        className={`arsenal-section section-reveal ${visible ? "revealed" : ""}`}
        style={{ animationDelay: "0.4s" }}
      >
        <h2>Technical Arsenal</h2>
        <div className="skills-grid">
          {[
            { title: "Languages", items: skills.languages, icon: "⟨/⟩" },
            {
              title: "Libraries & UI frameworks",
              items: skills.frameworks,
              icon: "◆",
            },
            { title: "Tools & Ecosystem", items: skills.tools, icon: "⚙" },
            { title: "Core Architecture", items: skills.concepts, icon: "◈" },
          ].map(({ title, items, icon }, idx) => (
            <div
              key={title}
              className="card skill-node"
              style={{ animationDelay: `${0.5 + idx * 0.1}s` }}
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

      {/* ── Academic Tracks ── */}
      <section
        className={`education-section section-reveal ${visible ? "revealed" : ""}`}
        style={{ animationDelay: "0.55s" }}
      >
        <h2>Academic Tracks</h2>
        <div className="education-timeline">
          {[
            {
              degree: "Bachelor in Computer Science",
              institution: "Iqra University",
              timeline: "2025 — 2029",
              details:
                "Deepening fundamental software engineering paradigms, advanced computing logic, and structural system patterns.",
            },
            {
              degree: "Web and Mobile App Development",
              institution: "Saylani Mass IT Training (SMIT)",
              timeline: "2023 — 2025",
              details:
                "Rigorous technical training program covering advanced front-end standards, asynchronous structures, and scalable application builds.",
            },
            {
              degree: "Intermediate / Pre-Engineering",
              institution: "Govt. College for Men, Nazimabad",
              timeline: "2021 — 2022",
              details:
                "Solidified core engineering principles, mathematical analysis, and foundational science logic.",
            },
          ].map((edu, idx) => (
            <div
              key={idx}
              className="card edu-card"
              style={{ animationDelay: `${0.65 + idx * 0.1}s` }}
            >
              <div className="edu-header">
                <span className="edu-timeline">{edu.timeline}</span>
                <h3 className="edu-degree">{edu.degree}</h3>
                <h4 className="edu-institution">{edu.institution}</h4>
              </div>
              <p className="edu-details">{edu.details}</p>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        /* ── Theme Custom Variables ── */
        :root {
          --neon-cyan: #00f5d4;
          --martial-crimson: #ff0055;
          --text-main: #e0e0e0;
          --text-muted: #a0a0a0;
          --transition-snap: cubic-bezier(0.19, 1, 0.22, 1);
          --font-display: system-ui, -apple-system, sans-serif;
          --font-mono: ui-monospace, monospace;
        }

        /* ── Layout ─────────────────── */
        .about-view {
          display: flex;
          flex-direction: column;
          gap: 4rem;
          padding: 2rem max(2rem, 5vw);
          box-sizing: border-box;
          min-height: 100vh;
          color: var(--text-main);
        }

        h2 {
          font-family: var(--font-display);
          font-size: clamp(1.4rem, 2.5vw, 1.8rem);
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 1.5rem;
          color: #ffffff;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          padding-bottom: 0.5rem;
        }

        .card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 4px;
          padding: 1.8rem;
          backdrop-filter: blur(10px);
        }

        .section-reveal {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.7s var(--transition-snap),
                      transform 0.7s var(--transition-snap);
        }
        .section-reveal.revealed {
          opacity: 1;
          transform: translateY(0);
        }

        /* ── Identity card ──────────── */
        .identity-card { margin-top: 1rem; }

        .id-accent {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 1.2rem;
        }

        .id-tag {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          letter-spacing: 2px;
          padding: 0.25rem 0.7rem;
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
          font-size: clamp(1.1rem, 1.8vw, 1.35rem);
          color: var(--neon-cyan);
          margin-bottom: 1rem;
          font-family: var(--font-display);
          font-weight: 700;
          letter-spacing: 0.5px;
          line-height: 1.4;
        }

        .body-narrative {
          font-size: clamp(0.95rem, 1.4vw, 1.05rem);
          line-height: 1.85;
          color: var(--text-muted);
          text-align: justify;
        }

        /* ── Skill bars ─────────────── */
        .skill-bars-card { margin-top: 1rem; display: flex; flex-direction: column; gap: 1.6rem; }

        .skill-bar-wrap { animation: fadeInLeft 0.5s var(--transition-snap) both; }

        .skill-bar-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.5rem;
        }

        .skill-bar-name {
          font-family: var(--font-display);
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--text-main);
        }

        .skill-bar-pct {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--neon-cyan);
        }

        .skill-bar-track {
          position: relative;
          height: 4px;
          background: rgba(255,255,255,0.06);
          border-radius: 2px;
        }

        .skill-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--neon-cyan), var(--martial-crimson));
          border-radius: 2px;
          transition: width 1.2s var(--transition-snap);
          position: relative;
        }

        .skill-bar-glow {
          position: absolute;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--neon-cyan);
          box-shadow: 0 0 10px var(--neon-cyan);
          transition: left 1.2s var(--transition-snap);
        }

        /* ── Arsenal grid ───────────── */
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 1.5rem;
          margin-top: 1rem;
        }

        .skill-node {
          border-left: 3px solid var(--martial-crimson);
          animation: fadeInUp 0.6s var(--transition-snap) both;
        }

        .skill-node:hover { border-left-color: var(--neon-cyan); }

        .node-header {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-bottom: 1.2rem;
        }

        .node-icon {
          font-size: 1.1rem;
          color: var(--neon-cyan);
        }

        .node-title {
          color: #ffffff;
          font-family: var(--font-display);
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          display: block;
        }

        .tag-cloud {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tech-tag {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          padding: 0.3rem 0.65rem;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.06);
          color: var(--text-muted);
          transition: all 0.2s ease;
          cursor: default;
        }

        .tech-tag:hover {
          border-color: var(--neon-cyan);
          color: var(--neon-cyan);
          background: rgba(0,245,212,0.04);
          transform: translateY(-1px);
        }

        /* ── Academic Tracks Timeline ── */
        .education-timeline {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-top: 1rem;
        }

        .edu-card {
          border-left: 3px solid rgba(255, 255, 255, 0.1);
          animation: fadeInUp 0.6s var(--transition-snap) both;
          transition: border-left-color 0.3s ease;
        }

        .edu-card:hover {
          border-left-color: var(--neon-cyan);
        }

        .edu-header {
          margin-bottom: 0.75rem;
          position: relative;
        }

        .edu-timeline {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--martial-crimson);
          font-weight: 600;
          display: block;
          margin-bottom: 0.25rem;
        }

        .edu-degree {
          font-family: var(--font-display);
          font-size: 1.1rem;
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 0.2rem 0;
        }

        .edu-institution {
          font-family: var(--font-display);
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--neon-cyan);
          margin: 0;
          opacity: 0.9;
        }

        .edu-details {
          font-size: 0.9rem;
          line-height: 1.6;
          color: var(--text-muted);
          margin: 0;
        }

        /* ── Keyframes ── */
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* ── Mobile Responsive ───────── */
        @media (max-width: 600px) {
          .about-view { gap: 2.5rem; padding: 1.5rem; }
          .skills-grid { grid-template-columns: 1fr; }
          .card { padding: 1.3rem; }
        }
      `}</style>
    </div>
  );
};

export default About;
