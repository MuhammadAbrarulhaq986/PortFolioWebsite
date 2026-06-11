//import GitHubCalendar from "react-github-calendar"; /* Typing effect hook */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function useTypewriter(words, speed = 80, pause = 2000) {
  const [display, setDisplay] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    let timeout;

    if (!deleting && charIdx <= current.length) {
      timeout = setTimeout(() => setCharIdx((c) => c + 1), speed);
      setDisplay(current.slice(0, charIdx));
    } else if (!deleting && charIdx > current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx >= 0) {
      timeout = setTimeout(() => setCharIdx((c) => c - 1), speed / 2);
      setDisplay(current.slice(0, charIdx));
    } else {
      setDeleting(false);
      setWordIdx((i) => (i + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return display;
}

const roles = ["Full Stack Developer"];

const Home = () => {
  const role = useTypewriter(roles);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  // Theme for the GitHub calendar — matches neon cyan/crimson palette
  const calendarTheme = {
    dark: [
      "rgba(255,255,255,0.05)", // level 0 — empty
      "rgba(0,245,212,0.25)", // level 1
      "rgba(0,245,212,0.50)", // level 2
      "rgba(0,245,212,0.75)", // level 3
      "#00f5d4", // level 4 — full
    ],
  };

  return (
    <div className="container hero-layout">
      {/* Floating background energy orbs */}
      <div className="hero-orb hero-orb--1" />
      <div className="hero-orb hero-orb--2" />
      <div className="hero-orb hero-orb--3" />

      <section className={`hero-viewport ${visible ? "hero-visible" : ""}`}>
        {/* Rank badge */}
        <div className="rank-badge">
          <span className="rank-dot" />
          <span>[ DOMAIN ONLINE ]</span>
          <span className="rank-dot rank-dot--right" />
        </div>

        {/* Glitch title */}
        <div className="title-wrapper">
          <h1 className="martial-title" data-text="Muhammad Abrar ul haq">
            Muhammad Abrar ul haq
          </h1>
        </div>

        {/* Animated role typewriter */}
        <div className="role-line">
          <span className="role-prompt">$ </span>
          <span className="role-text">{role}</span>
          <span className="cursor-blink">_</span>
        </div>

        {/* Description */}
        <p className="hero-description">
          Balancing technical execution with creative intent. Building robust
          &amp; responsive architectures shaped by continuous learning.
        </p>

        {/* CTA row — uncomment when ready */}
        <div className="cta-row">
          {/*<Link to="/contact" className="btn btn--primary">Initiate Contact</Link>*/}
          {/*<Link to="/projects" className="btn btn--ghost">View Arsenal</Link>*/}
        </div>

        {/* Stats strip */}
        <div className="stats-strip">
          {[
            { label: "Projects", val: "100+" },
            { label: "Libraries_&_Frameworks", val: "12" },
            { label: "Languages", val: "6" },
            { label: "Tools_&_Systems", val: "11" },
          ].map(({ label, val }) => (
            <div className="stat-item" key={label}>
              <span className="stat-val">{val}</span>
              <span className="stat-label">{label}</span>
            </div>
          ))}
        </div>

        {/* Terminal strip */}
        <div className="status-terminal">
          <span className="terminal-prompt">▶</span>
          <p className="terminal-line">
            Active Arc:{" "}
            <span className="highlight-cyan">Refining Performance Systems</span>
          </p>
          <p className="terminal-quote">
            "Knowledge is limitless — become a student of it."
          </p>
        </div>

        {/* ── GitHub Calendar ── */}
        {/*/////////////////////////////////////////////////////////////////////////////////////////////*/}
        {/* ── GitHub Calendar ── */}
        <div className="calendar-wrapper">
          <div className="calendar-header">
            <span className="calendar-dot" />
            <span className="calendar-title">COMMIT ACTIVITY</span>
            <span className="calendar-tag">
              github.com/muhammadabrarulhaq986
            </span>
          </div>
          <div className="calendar-body">
            <img
              src="https://ghchart.rshah.org/ff0055/muhammadabrarulhaq986"
              alt="GitHub Contribution Chart"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                filter:
                  "invert(1) sepia(2) saturate(5) hue-rotate(130deg) brightness(1.9) contrast(1.9)",
              }}
            />{" "}
          </div>
        </div>
      </section>

      <style>{`
        /* ── Layout ── */
        .hero-layout {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        .hero-viewport {
          text-align: center;
          width: 100%;
          max-width: 900px;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s ease, transform 0.8s var(--transition-snap);
        }

        .hero-viewport.hero-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* ── Floating orbs ── */
        .hero-orb {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          filter: blur(60px);
        }
        .hero-orb--1 {
          width: 400px; height: 400px;
          background: radial-gradient(circle, rgba(0,245,212,0.07) 0%, transparent 70%);
          top: -100px; left: -150px;
          animation: orb 20s ease-in-out infinite;
        }
        .hero-orb--2 {
          width: 350px; height: 350px;
          background: radial-gradient(circle, rgba(255,0,85,0.07) 0%, transparent 70%);
          bottom: -80px; right: -100px;
          animation: orb 25s ease-in-out infinite reverse;
        }
        .hero-orb--3 {
          width: 200px; height: 200px;
          background: radial-gradient(circle, rgba(0,245,212,0.04) 0%, transparent 70%);
          top: 50%; right: 5%;
          animation: float 12s ease-in-out infinite;
        }

        /* ── Rank badge ── */
        .rank-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--neon-cyan);
          letter-spacing: 3px;
          text-transform: uppercase;
          margin-bottom: 2rem;
          padding: 0.4rem 1rem;
          border: 1px solid rgba(0,245,212,0.2);
          background: rgba(0,245,212,0.04);
          clip-path: polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%);
          animation: fadeIn 1s ease 0.3s both;
        }

        .rank-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: var(--neon-cyan);
          animation: pulseGlow 2s ease infinite;
          box-shadow: 0 0 8px var(--neon-cyan);
        }
        .rank-dot--right {
          background: var(--martial-crimson);
          box-shadow: 0 0 8px var(--martial-crimson);
        }

        /* ── Glitch title ── */
        .title-wrapper {
          position: relative;
          margin-bottom: 1.5rem;
          animation: fadeInUp 0.8s var(--transition-snap) 0.2s both;
        }

        .martial-title {
          font-family: var(--font-display);
          font-size: clamp(2rem, 5.5vw, 4rem);
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 1px;
          line-height: 1.1;
          background: linear-gradient(135deg, #ffffff 0%, #c0cfe8 50%, var(--neon-cyan) 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          position: relative;
        }

        .martial-title::before,
        .martial-title::after {
          content: attr(data-text);
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #ffffff 0%, #c0cfe8 50%, var(--neon-cyan) 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .martial-title::before {
          left: 2px;
          text-shadow: -2px 0 var(--martial-crimson);
          animation: glitch 8s infinite linear;
          animation-delay: 1s;
          opacity: 0.7;
        }
        .martial-title::after {
          left: -2px;
          text-shadow: 2px 0 var(--neon-cyan);
          animation: glitch 8s infinite linear;
          animation-delay: 2s;
          opacity: 0.5;
        }

        /* ── Role typewriter ── */
        .role-line {
          font-family: var(--font-mono);
          font-size: clamp(1rem, 2vw, 1.25rem);
          color: var(--martial-crimson);
          margin-bottom: 1.8rem;
          letter-spacing: 2px;
          animation: fadeIn 0.6s ease 0.5s both;
          min-height: 2rem;
        }
        .role-prompt { color: var(--text-dim); margin-right: 0.2rem; }
        .role-text   { color: var(--martial-crimson); }
        .cursor-blink {
          color: var(--neon-cyan);
          animation: blinkCursor 0.8s step-end infinite;
          margin-left: 2px;
        }

        /* ── Description ── */
        .hero-description {
          font-size: clamp(1rem, 1.6vw, 1.15rem);
          color: var(--text-muted);
          max-width: 620px;
          margin: 0 auto 2.5rem;
          line-height: 1.8;
          animation: fadeInUp 0.7s var(--transition-snap) 0.6s both;
        }

        /* ── CTA row ── */
        .cta-row {
          display: flex;
          gap: 1.2rem;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 3.5rem;
          animation: fadeInUp 0.7s var(--transition-snap) 0.7s both;
        }
        .btn--ghost {
          border-color: rgba(255,0,85,0.5);
          color: var(--martial-crimson);
        }
        .btn--ghost:hover { box-shadow: 0 0 25px var(--crimson-glow-strong); color: #fff; }
        .btn--ghost::before { background: linear-gradient(135deg, var(--martial-crimson), var(--neon-cyan)); }

        /* ── Stats strip ── */
        .stats-strip {
          display: flex;
          justify-content: center;
          gap: clamp(2rem, 6vw, 5rem);
          margin-bottom: 3rem;
          padding: 1.5rem 0;
          border-top: 1px solid var(--border-subtle);
          border-bottom: 1px solid var(--border-subtle);
          animation: fadeIn 0.8s ease 0.9s both;
          flex-wrap: wrap;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.2rem;
        }

        .stat-val {
          font-family: var(--font-display);
          font-size: clamp(1.3rem, 3vw, 2rem);
          font-weight: 900;
          background: linear-gradient(135deg, var(--neon-cyan), #fff);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .stat-label {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: var(--text-muted);
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        /* ── Terminal strip ── */
        .status-terminal {
          padding: 1.5rem 2rem;
          background: rgba(0,0,0,0.3);
          border: 1px solid var(--border-subtle);
          border-left: 3px solid var(--neon-cyan);
          text-align: left;
          animation: fadeIn 0.8s ease 1.1s both;
          margin-bottom: 2.5rem;
        }

        .terminal-prompt {
          color: var(--neon-cyan);
          font-family: var(--font-mono);
          margin-right: 0.5rem;
          font-size: 0.8rem;
        }

        .terminal-line {
          font-family: var(--font-mono);
          font-size: 0.95rem;
          color: var(--text-main);
          display: inline;
        }

        .highlight-cyan { color: var(--neon-cyan); font-weight: 700; }

        .terminal-quote {
          font-style: italic;
          color: var(--text-dim);
          margin-top: 0.6rem;
          font-size: 0.9rem;
          font-family: var(--font-mono);
          padding-left: 1.2rem;
          border-left: 2px solid var(--martial-crimson);
        }

        /* ── GitHub Calendar ── */
        .calendar-wrapper {
          border: 1px solid var(--border-subtle);
          border-left: 3px solid var(--martial-crimson);
          background: rgba(0,0,0,0.25);
          animation: fadeIn 0.8s ease 1.3s both;
          overflow: hidden;
        }

        .calendar-header {
          display: flex;
          align-items: center;
          gap: 0.7rem;
          padding: 0.8rem 1.5rem;
          border-bottom: 1px solid var(--border-subtle);
          background: rgba(255,255,255,0.02);
          flex-wrap: wrap;
        }

        .calendar-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: var(--martial-crimson);
          box-shadow: 0 0 8px var(--martial-crimson);
          animation: pulseGlow 2s ease infinite;
          flex-shrink: 0;
        }

        .calendar-title {
          font-family: var(--font-display);
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 3px;
          color: var(--text-main);
          text-transform: uppercase;
        }

        .calendar-tag {
          font-family: var(--font-mono);
          font-size: 0.68rem;
          color: var(--text-dim);
          letter-spacing: 1px;
          margin-left: auto;
        }

        .calendar-body {
          padding: 1.5rem 1.5rem 1.2rem;
          overflow-x: auto;
          /* Style the calendar's own text labels */
          color: var(--text-muted);
        }

        /* Override react-github-calendar internal text colors */
        .calendar-body text {
          fill: var(--text-dim) !important;
          font-family: var(--font-mono) !important;
          font-size: 11px !important;
        }

        /* ── Mobile ── */
        @media (max-width: 600px) {
          .stats-strip { gap: 1.5rem; }
          .status-terminal { padding: 1rem 1.2rem; }
          .title-wrapper { margin-bottom: 1rem; }
          .calendar-header { padding: 0.7rem 1rem; }
          .calendar-body { padding: 1rem 0.8rem; }
          .calendar-tag { display: none; }
        }

        @media (max-width: 400px) {
          .stats-strip { flex-direction: column; gap: 1rem; align-items: center; }
          .cta-row { flex-direction: column; align-items: center; }
          .rank-badge { font-size: 0.65rem; }
        }
      `}</style>
    </div>
  );
};

export default Home;
