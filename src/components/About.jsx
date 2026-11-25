import { useEffect, useRef, useState } from "react";

const education = [
  {
    institution: "Kings Engineering College",
    degree: "B.Tech AI & DS",
    score: "CGPA 7.90",
    year: "2021 - 2025",
  },
  {
    institution: "Sriram Matric Hr Sec School",
    degree: "Higher Secondary",
    score: "74.2%",
    year: "2019 - 2021",
  },
  {
    institution: "Oxford Matriculation School",
    degree: "Secondary Education",
    score: "52.8%",
    year: "2019",
  },
];

const typeText = `vignesh@portfolio ~ % whoami
vignesh

vignesh@portfolio ~ % cat about.txt
I'm a passionate Full Stack Developer with a keen eye for
design and a love for creating seamless user experiences.
My journey in web development started with curiosity and has
evolved into a deep appreciation for clean, efficient code.

I specialize in building responsive web applications using
modern technologies. When I'm not coding, you'll find me
exploring new technologies, contributing to open-source
projects, or honing my skills through continuous learning.

vignesh@portfolio ~ % echo $LOCATION
Dharmapuri, India

vignesh@portfolio ~ % echo $EDUCATION
B.Tech AI & DS at Kings Engineering College (CGPA 7.90)

vignesh@portfolio ~ % _`;

export default function About() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const [typingDone, setTypingDone] = useState(false);
  const indexRef = useRef(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible || typingDone) return;
    indexRef.current = 0;
    setDisplayedText("");

    const interval = setInterval(() => {
      indexRef.current++;
      setDisplayedText(typeText.slice(0, indexRef.current));
      if (indexRef.current >= typeText.length) {
        clearInterval(interval);
        setTypingDone(true);
      }
    }, 15);

    return () => clearInterval(interval);
  }, [visible, typingDone]);

  return (
    <section id="about" className="section" ref={ref}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, transparent, rgba(16, 185, 129, 0.05), transparent)",
        }}
      />

      <div className="container">
        <div className={`section-header${visible ? " visible" : ""}`}>
          <div className="section-tag" style={{ color: "#34d399" }}>
            ~/about.sh
          </div>
          <h2 className="section-title" style={{ fontFamily: "'Courier New', monospace" }}>
            <span style={{ color: "#34d399" }}>~/</span>About{" "}
            <span className="gradient-text">Me</span>
          </h2>
        </div>

        <div className="lg-grid about-grid">
          <div className={`fade-left${visible ? " visible" : ""}`}>
            <div style={{ position: "relative" }}>
              <div
                style={{
                  position: "absolute",
                  inset: -4,
                  background: "rgba(16, 185, 129, 0.15)",
                  borderRadius: 16,
                  filter: "blur(12px)",
                }}
              />
              <div className="about-terminal">
                <div className="about-terminal-bar">
                  <div className="terminal-dot red" />
                  <div className="terminal-dot yellow" />
                  <div className="terminal-dot green" />
                  <span className="terminal-title">
                    vignesh — bash — 80×24
                  </span>
                </div>
                <div className="terminal-body-wrap">
                  <pre className="terminal-body terminal-body-sizer" aria-hidden="true">
                    {typeText}
                  </pre>
                  <pre className="terminal-body terminal-body-typed">
                    {displayedText}
                    <span
                      className={`terminal-cursor${typingDone ? " blink" : ""}`}
                    />
                  </pre>
                </div>
              </div>
            </div>
          </div>

          <div className={`fade-right${visible ? " visible" : ""}`}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 32,
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  minWidth: 40,
                  borderRadius: 8,
                  background: "rgba(16, 185, 129, 0.2)",
                  border: "1px solid rgba(52, 211, 153, 0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "'Courier New', monospace",
                  color: "#34d399",
                  fontSize: "1.25rem",
                }}
              >
                ~
              </div>
              <h3
                style={{
                  fontSize: "clamp(1.1rem, 5vw, 1.5rem)",
                  fontWeight: 700,
                  color: "white",
                  fontFamily: "'Courier New', monospace",
                  overflowWrap: "anywhere",
                }}
              >
                $ education --list
              </h3>
            </div>

            <div className="education-list">
              <div className="education-line" />

              {education.map((edu, i) => (
                <div
                  key={i}
                  className="education-item"
                  style={{
                    transitionDelay: visible ? `${i * 150}ms` : "0ms",
                  }}
                >
                  <div className="education-dot">
                    <div className="education-dot-inner" />
                  </div>

                  <div className="education-card">
                    <div className="education-header">
                      <h4 className="education-institution">
                        * {edu.institution}
                      </h4>
                      <span className="education-badge-year">{edu.year}</span>
                    </div>
                    <p className="education-degree">{edu.degree}</p>
                    <div className="education-score">
                      <span className="education-score-prompt">$</span>{" "}
                      {edu.score}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
          align-items: start;
        }
        @media (min-width: 768px) {
          .about-grid { gap: 48px; }
        }
        @media (min-width: 1024px) {
          .about-grid { grid-template-columns: 1fr 1fr; gap: 64px; }
        }
        .education-list { position: relative; }
        .fade-left, .fade-right { transition: all 0.7s ease; opacity: 0; }
        .fade-left.visible, .fade-right.visible { opacity: 1; transform: translateX(0); }
        .fade-left:not(.visible) { transform: translateX(-40px); }
        .fade-right:not(.visible) { transform: translateX(40px); }
      `}</style>
    </section>
  );
}
