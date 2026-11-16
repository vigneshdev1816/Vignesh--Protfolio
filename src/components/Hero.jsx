import { useEffect, useState } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-bg" />

      <div className="hero-content">
        <div
          className="hero-grid"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(40px)",
          }}
        >
          <div className="hero-text">
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              <span className="hero-badge-text">
                Available for new opportunities
              </span>
            </div>

            <h1 className="hero-title">
              <span>Hi, I'm </span>
              <span className="gradient-text">Vignesh</span>
            </h1>

            <p className="hero-subtitle">
              A passionate{" "}
              <span className="gradient-text-alt" style={{ fontWeight: 600 }}>
                Full Stack Developer
              </span>{" "}
              crafting beautiful digital experiences
            </p>

            <p className="hero-desc">
              Transforming ideas into elegant, user-friendly web applications.
              Let's build something amazing together.
            </p>

            <div className="hero-buttons">
              <a href="#contact" className="btn-primary">
                <span className="btn-primary-bg animate-gradient" />
                <span className="btn-primary-inner" />
                <span className="btn-primary-text">
                  Let's Talk
                  <svg className="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </a>
              <a href="/Vignesh_Resume.pdf" download className="btn-secondary">
                <svg className="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </a>
            </div>

            <div className="hero-social">
              {[
                { name: "LinkedIn", href: "https://www.linkedin.com/in/vignesh-chinnasamy-0058a7238?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
                { name: "GitHub", href: "https://github.com/vigneshdev1816" },
                { name: "Instagram", href: "https://instagram.com/dhvi___1620" },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  title={social.name}
                >
                  <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {social.name === "LinkedIn" && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z" />
                    )}
                    {social.name === "GitHub" && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
                    )}
                    {social.name === "Instagram" && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    )}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div className="hero-image-wrapper">
            <div className="hero-image-container">
              <div className="hero-image-glow" />
              <img src="/Vignesh.png" alt="Vignesh" className="hero-image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
