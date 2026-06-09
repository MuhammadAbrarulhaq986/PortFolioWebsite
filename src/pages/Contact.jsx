import React, { useEffect, useState } from "react";

const ContactRow = ({ label, value, href, delay }) => (
  <div className="data-row" style={{ animationDelay: `${delay}s` }}>
    <span className="label">
      <span className="label-bracket">[</span>
      {label}
      <span className="label-bracket">]</span>
    </span>
    {href ? (
      <a
        href={href}
        className="value value--link"
        target="_blank"
        rel="noreferrer"
      >
        {value}
        <span className="row-arrow">↗</span>
      </a>
    ) : (
      <span className="value">{value}</span>
    )}
  </div>
);

const Contact = () => {
  const [visible, setVisible] = useState(false);
  const [cursor, setCursor] = useState(true);

  useEffect(() => {
    setTimeout(() => setVisible(true), 80);
    const t = setInterval(() => setCursor((v) => !v), 600);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="container contact-view">
      <section
        className={`contact-viewport section-reveal ${visible ? "revealed" : ""}`}
      >
        <h2>Contact link's</h2>

        <p className="contact-subtitle">
          Transmission channel open. Whether it's a project, collaboration, or
          just a sparring session — establish your connection below.
        </p>

        {/* ── Main terminal card ── */}
        <div className="card terminal-contact-card">
          {/* Terminal title bar */}
          <div className="terminal-header">
            <div className="terminal-dots">
              <span className="dot dot--red" />
              <span className="dot dot--yellow" />
              <span className="dot dot--green" />
            </div>
            <span className="terminal-title">
              domain-protocol://secure-channel
            </span>
            <span className="terminal-status">
              <span className="status-pulse" />
              LIVE
            </span>
          </div>

          {/* Terminal top row — typed prompt */}
          <div className="terminal-prompt-row">
            <span className="prompt-symbol">▶</span>
            <span className="prompt-cmd">
              ./establish_connection --target="Abrar" --priority=HIGH
            </span>
            <span
              className="terminal-cursor"
              style={{ opacity: cursor ? 1 : 0 }}
            >
              |
            </span>
          </div>

          {/* Contact data rows */}
          <div className="terminal-body-content">
            <ContactRow
              label="OPERATOR"
              value="Muhammad Abrar ul haq"
              delay={0.3}
            />
            <ContactRow
              label="EMAIL"
              value="ulhaqabrar106@gmail.com"
              href="mailto:ulhaqabrar106@gmail.com"
              delay={0.4}
            />
            <ContactRow
              label="GITHUB"
              value="github.com/abrar"
              href="https://github.com/MuhammadAbrarulhaq986"
              delay={0.5}
            />
            <ContactRow
              label="LINKEDIN"
              value="linkedin.com/in/abrar"
              href="https://www.linkedin.com/feed/"
              delay={0.6}
            />
            {/*<ContactRow
              label="DISCIPLINE"
              value="Full Stack Development"
              delay={0.7}
            />*/}
          </div>

          {/* Response time footer */}
          {/*<div className="terminal-footer">
            <span className="footer-tag">AVG_RESPONSE_TIME</span>
            <span className="footer-val">&lt; 24 HOURS</span>
          </div>*/}
        </div>

        {/* ── Availability banner ── */}
        <div className="availability-banner">
          <span className="avail-dot" />
          <span className="avail-text">
            Currently looking for an intership/Job opportunitie.
          </span>
        </div>
      </section>

      <style>{`
        /* ── Layout ─────────────────── */
        .section-reveal {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.7s var(--transition-snap), transform 0.7s var(--transition-snap);
        }
        .section-reveal.revealed { opacity: 1; transform: translateY(0); }

        .contact-view {
          display: flex;
          justify-content: center;
          align-items: flex-start;
        }

        .contact-viewport {
          max-width: 700px;
          width: 100%;
        }

        .contact-subtitle {
          font-size: clamp(0.95rem, 1.4vw, 1.1rem);
          color: var(--text-muted);
          margin-bottom: 2.5rem;
          line-height: 1.8;
        }

        /* ── Terminal card ──────────── */
        .terminal-contact-card {
          padding: 0;
          overflow: hidden;
          background: #080b12;
          border-left: 3px solid var(--martial-crimson);
        }

        /* Title bar */
        .terminal-header {
          background: rgba(255,255,255,0.03);
          padding: 0.75rem 1.5rem;
          display: flex;
          align-items: center;
          gap: 0.8rem;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }

        .terminal-dots { display: flex; gap: 0.4rem; }
        .dot {
          width: 10px; height: 10px;
          border-radius: 50%;
        }
        .dot--red    { background: var(--martial-crimson); box-shadow: 0 0 6px var(--martial-crimson); }
        .dot--yellow { background: #ffb800; box-shadow: 0 0 6px rgba(255,184,0,0.5); }
        .dot--green  { background: var(--neon-cyan); box-shadow: 0 0 6px var(--neon-cyan); }

        .terminal-title {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--text-dim);
          letter-spacing: 1px;
          flex: 1;
          text-align: center;
        }

        .terminal-status {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          color: var(--neon-cyan);
          letter-spacing: 2px;
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .status-pulse {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: var(--neon-cyan);
          animation: pulseGlow 1.5s ease infinite;
          box-shadow: 0 0 6px var(--neon-cyan);
        }

        /* Typed prompt row */
        .terminal-prompt-row {
          padding: 1rem 1.5rem;
          border-bottom: 1px dashed rgba(255,255,255,0.05);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-wrap: wrap;
          gap-y: 0;
        }

        .prompt-symbol { color: var(--neon-cyan); font-family: var(--font-mono); font-size: 0.8rem; }
        .prompt-cmd {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--text-muted);
          word-break: break-all;
        }
        .terminal-cursor {
          color: var(--neon-cyan);
          font-family: var(--font-mono);
          transition: opacity 0.1s;
        }

        /* Data rows */
        .terminal-body-content {
          padding: 1.8rem 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.4rem;
        }

        .data-row {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          animation: fadeInLeft 0.5s var(--transition-snap) both;
        }

        .label {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--text-dim);
          min-width: 110px;
          letter-spacing: 1.5px;
          padding-top: 0.15rem;
          flex-shrink: 0;
        }

        .label-bracket { color: var(--martial-crimson); opacity: 0.6; }

        .value {
          font-family: var(--font-body);
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-main);
        }

        .value--link {
          color: var(--neon-cyan);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          transition: color 0.2s ease, gap 0.2s ease;
        }

        .row-arrow {
          font-size: 0.8rem;
          transition: transform 0.3s var(--transition-bounce);
          opacity: 0.6;
        }

        .value--link:hover { color: #fff; }
        .value--link:hover .row-arrow { transform: translate(2px, -2px); opacity: 1; }

        /* Footer */
        .terminal-footer {
          padding: 0.9rem 2rem;
          background: rgba(255,255,255,0.02);
          border-top: 1px solid rgba(255,255,255,0.04);
          display: flex;
          gap: 1rem;
          align-items: center;
        }

        .footer-tag {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          color: var(--text-dim);
          letter-spacing: 2px;
        }

        .footer-val {
          font-family: var(--font-display);
          font-size: 0.7rem;
          font-weight: 700;
          color: var(--neon-cyan);
          letter-spacing: 2px;
        }

        /* ── Availability banner ────── */
        .availability-banner {
          margin-top: 1.5rem;
          display: flex;
          align-items: center;
          gap: 0.8rem;
          padding: 1rem 1.5rem;
          border: 1px solid rgba(0,245,212,0.15);
          background: rgba(0,245,212,0.03);
          animation: fadeIn 0.6s ease 0.9s both;
        }

        .avail-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: var(--neon-cyan);
          animation: pulseGlow 2s ease infinite;
          box-shadow: 0 0 8px var(--neon-cyan);
          flex-shrink: 0;
        }

        .avail-text {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          color: var(--text-muted);
          letter-spacing: 1px;
        }

        /* ── Mobile ─────────────────── */
        @media (max-width: 540px) {
          .terminal-body-content { padding: 1.2rem 1.2rem; gap: 1.2rem; }
          .terminal-title { display: none; }
          .data-row { flex-direction: column; gap: 0.2rem; }
          .label { min-width: unset; }
          .terminal-prompt-row { padding: 0.8rem 1.2rem; }
          .terminal-footer { padding: 0.7rem 1.2rem; }
        }
      `}</style>
    </div>
  );
};

export default Contact;
