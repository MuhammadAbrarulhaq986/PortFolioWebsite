import React, { useEffect, useRef, useState } from "react";
import { projects } from "../constants/projects";

const ProjectCard = ({ proj, index }) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`card arc-card ${visible ? "arc-card--visible" : ""}`}
      style={{ transitionDelay: `${index * 0.12}s` }}
    >
      {/* Card index label */}
      <div className="arc-index">
        <span className="arc-num">0{index + 1}</span>
        <div className="arc-num-bar" />
      </div>

      <div className="arc-body">
        <h3 className="arc-title">{proj.title}</h3>
        <p className="arc-description">{proj.description}</p>
      </div>

      <div className="arc-footer">
        <div className="badge-wrapper">
          {proj.tech.map((tech) => (
            <span key={tech} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>

        <a
          href={proj.link}
          target="_blank"
          rel="noreferrer"
          className="arc-link-action"
        >
          <span>Inspect System</span>
          <span className="link-arrow">→</span>
        </a>
      </div>
    </div>
  );
};

const Projects = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => setVisible(true), 80);
  }, []);

  return (
    <div className="container">
      <header
        className={`projects-header section-reveal ${visible ? "revealed" : ""}`}
      >
        <h2>Active Arcs</h2>
        <p className="projects-sub">
          Systems designed, battles fought, domains conquered.
        </p>
      </header>

      <div className="portfolio-project-grid">
        {projects.map((proj, i) => (
          <ProjectCard key={proj.id} proj={proj} index={i} />
        ))}
      </div>

      <style>{`
        /* ── Header ─────────────────── */
        .section-reveal {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.7s var(--transition-snap), transform 0.7s var(--transition-snap);
        }
        .section-reveal.revealed { opacity: 1; transform: translateY(0); }

        .projects-header { margin-bottom: 0.5rem; }

        .projects-sub {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          color: var(--text-muted);
          letter-spacing: 1px;
          margin-top: -1rem;
          margin-bottom: 2.5rem;
        }

        /* ── Grid ───────────────────── */
        .portfolio-project-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 1.8rem;
        }

        /* ── Cards ──────────────────── */
        .arc-card {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
          min-height: 300px;
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s var(--transition-snap),
                      transform 0.6s var(--transition-snap),
                      box-shadow 0.4s ease,
                      border-color 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .arc-card--visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Energy slash on hover */
        .arc-card::after {
          content: "";
          position: absolute;
          top: -50%;
          right: -60%;
          width: 100%;
          height: 200%;
          background: linear-gradient(
            105deg,
            transparent 40%,
            rgba(0,245,212,0.04) 50%,
            transparent 60%
          );
          transform: skewX(-10deg);
          transition: right 0.6s var(--transition-snap);
          pointer-events: none;
        }

        .arc-card:hover::after { right: -10%; }

        /* ── Card index ─────────────── */
        .arc-index {
          display: flex;
          align-items: center;
          gap: 0.8rem;
        }

        .arc-num {
          font-family: var(--font-display);
          font-size: 2rem;
          font-weight: 900;
          background: linear-gradient(135deg, var(--neon-cyan), transparent);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          opacity: 0.3;
          line-height: 1;
        }

        .arc-num-bar {
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, var(--border-cyan), transparent);
        }

        /* ── Card body ──────────────── */
        .arc-body { flex: 1; }

        .arc-title {
          font-family: var(--font-display);
          color: var(--text-main);
          font-size: clamp(1rem, 1.8vw, 1.2rem);
          text-transform: uppercase;
          margin-bottom: 0.7rem;
          letter-spacing: 1.5px;
        }

        .arc-description {
          font-size: 1rem;
          color: var(--text-muted);
          line-height: 1.7;
        }

        /* ── Card footer ────────────── */
        .arc-footer {
          border-top: 1px solid var(--border-subtle);
          padding-top: 1rem;
        }

        .badge-wrapper {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin-bottom: 1rem;
        }

        .tech-badge {
          background: rgba(0,245,212,0.04);
          border: 1px solid rgba(0,245,212,0.15);
          padding: 0.2rem 0.55rem;
          font-size: 0.7rem;
          font-family: var(--font-mono);
          color: var(--neon-cyan);
          letter-spacing: 0.5px;
          transition: background 0.2s, border-color 0.2s;
        }

        .tech-badge:hover {
          background: rgba(0,245,212,0.1);
          border-color: var(--neon-cyan);
        }

        .arc-link-action {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-muted);
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 0.8rem;
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          transition: color 0.25s ease, gap 0.25s ease;
          padding: 0.5rem 0;
        }

        .link-arrow {
          transition: transform 0.3s var(--transition-bounce);
          font-size: 1rem;
        }

        .arc-link-action:hover {
          color: var(--neon-cyan);
        }
        .arc-link-action:hover .link-arrow {
          transform: translateX(6px);
        }

        /* ── Mobile ─────────────────── */
        @media (max-width: 700px) {
          .portfolio-project-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 400px) {
          .arc-card { min-height: unset; }
        }
      `}</style>
    </div>
  );
};

export default Projects;
