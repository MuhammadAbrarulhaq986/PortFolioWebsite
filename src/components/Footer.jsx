import React from "react";

const Footer = () => {
  return (
    <footer className="site-footer">
      {/* Decorative top border with gradient */}
      <div className="footer-line" />

      <div className="footer-inner">
        {/* Left: Branding */}
        <div className="footer-brand">
          <span className="footer-logo">[ ABRAR'S DOJO ]</span>
          <span className="footer-tagline">Driven by discipline.</span>
        </div>

        {/* Center: Status */}
        <div className="footer-status">
          <span className="status-dot" />
          <span className="status-text">All systems operational</span>
        </div>

        {/* Right: Copy */}
        <div className="footer-copy">
          <span>© {new Date().getFullYear()}</span>
          <span className="copy-sep">•</span>
          <span>Muhammad Abrar ul haq</span>
        </div>
      </div>

      <style>{`
        .site-footer {
          position: relative;
          background: var(--bg-dark);
          margin-top: 6rem;
        }

        .footer-line {
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            var(--neon-cyan) 20%,
            var(--martial-crimson) 80%,
            transparent
          );
          opacity: 0.3;
        }

        .footer-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1.8rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .footer-brand {
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
        }

        .footer-logo {
          font-family: var(--font-display);
          font-size: 0.78rem;
          font-weight: 900;
          letter-spacing: 2px;
          background: linear-gradient(90deg, var(--neon-cyan), var(--martial-crimson));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .footer-tagline {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          color: var(--text-dim);
          letter-spacing: 2px;
        }

        .footer-status {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: var(--text-dim);
          letter-spacing: 1.5px;
        }

        .status-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: var(--neon-cyan);
          animation: pulseGlow 2.5s ease infinite;
          box-shadow: 0 0 6px var(--neon-cyan);
        }

        .footer-copy {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: var(--text-dim);
          letter-spacing: 1px;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .copy-sep { color: var(--martial-crimson); opacity: 0.5; }

        @media (max-width: 600px) {
          .footer-inner {
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 1rem;
            padding: 1.5rem 1.2rem;
          }
          .footer-status { display: none; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
