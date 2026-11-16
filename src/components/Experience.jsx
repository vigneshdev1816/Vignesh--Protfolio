import { useEffect, useRef, useState } from "react";

const projects = [
  {
    title: "Expense Tracker – Money Management",
    description: "A practical web application designed to help users monitor and manage their daily finances efficiently. The system allows users to track income and expenses, categorize transactions, and maintain a clear overview of their financial status. It includes real-time balance updates, simple data visualization, and an intuitive interface for seamless user experience.",
    tech: ["Finance", "Expense Tracking", "JavaScript", "UI/UX"],
    color1: "#3b82f6",
    color2: "#06b6d4",
    year: "2026",
  },
  {
    title: "AI-Powered Knowledge Management",
    description: "A sophisticated system leveraging NLP and Knowledge Graphs to organize and retrieve information efficiently. Features semantic search, automatic categorization, and intelligent recommendations.",
    tech: ["NLP", "Knowledge Graphs", "Python"],
    color1: "#7c3aed",
    color2: "#a855f7",
    year: "2024",
  },
  {
    title: "Criminal Face Detection",
    description: "Real-time face detection system using computer vision for security applications. Integrates Flask backend with PostgreSQL for face matching and database management.",
    tech: ["OpenCV", "Flask", "PostgreSQL"],
    color1: "#ef4444",
    color2: "#f97316",
    year: "2024",
  },
  {
    title: "Data Science Internship",
    description: "Comprehensive data analysis pipeline using Pandas and NumPy for processing, scikit-learn for ML models, and Tableau for visualization and reporting.",
    tech: ["Pandas", "NumPy", "scikit-learn", "Tableau"],
    color1: "#10b981",
    color2: "#14b8a6",
    year: "2023",
  },
];

const certifications = [
  { name: "Machine Learning", org: "Vcodez Innovating Ideas" },
  { name: "Data Science", org: "Prodigy Infotech" },
  { name: "Python, C++", org: "Cybernaut" },
  { name: "Smart India Hackathon", org: "Sathyabama University" },
];

export default function Experience() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

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

  return (
    <section id="projects" className="section" ref={ref}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, transparent, rgba(236, 72, 153, 0.05), transparent)",
        }}
      />

      <div className="container">
        <div className={`section-header${visible ? " visible" : ""}`}>
          <div className="section-tag" style={{ color: "#f472b6" }}>
            My work
          </div>
          <h2 className="section-title">
            Projects & <span className="gradient-text">Experience</span>
          </h2>
        </div>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="fade-in"
              style={{
                transitionDelay: visible ? `${i * 150}ms` : "0ms",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(40px)",
                transition: "all 0.7s ease",
              }}
            >
              <div className="project-card">
                <div
                  className="project-card-glow"
                  style={{
                    background: `linear-gradient(to right, ${project.color1}, ${project.color2})`,
                  }}
                />
                <div className="project-card-inner">
                  <div className="project-header">
                    <div
                      className="project-icon-box"
                      style={{
                        background: `linear-gradient(135deg, ${project.color1}, ${project.color2})`,
                      }}
                    >
                      <svg width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <span className="project-year">{project.year}</span>
                  </div>

                  <h3 className="project-title">{project.title}</h3>

                  <p className="project-desc">{project.description}</p>

                  <div className="project-tags">
                    {project.tech.map((t) => (
                      <span key={t} className="project-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`cert-wrapper${visible ? " visible" : ""}`}
        >
          <div className="cert-glow" />

          <div className="cert-card">
            <div className="cert-header">
              <div className="cert-icon-box">
                <svg width="28" height="28" className="cert-item-icon-inner" fill="none" stroke="#f59e0b" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <div className="cert-title-group">
                <h3>Certifications</h3>
                <p>Achievements and professional certifications</p>
              </div>
            </div>

            <div className="cert-grid">
              {certifications.map((cert, i) => (
                <div key={i} className="cert-item">
                  <div className="cert-item-icon">
                    <svg width="24" height="24" fill="none" stroke="#f59e0b" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <div>
                    <p className="cert-item-name">{cert.name}</p>
                    <p className="cert-item-org">{cert.org}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
