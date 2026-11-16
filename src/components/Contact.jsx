import { useEffect, useRef, useState } from "react";

export default function Contact() {
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
    <section id="contact" className="section" ref={ref}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, transparent, rgba(99, 102, 241, 0.05), transparent)",
        }}
      />

      <div className="container">
        <div className="section-header" style={{ opacity: 1, transform: "none" }}>
          <div className="section-tag" style={{ color: "#818cf8" }}>
            Get in touch
          </div>
          <h2 className="section-title">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="section-desc">
            Have a project in mind or just want to say hi? I'd love to hear from
            you.
          </p>
        </div>

        <div className="contact-grid">
          <div
            className={`fade-left${visible ? " visible" : ""}`}
          >
              <div className="contact-info">
                <h3 className="contact-heading" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Get in Touch
                </h3>
                <p className="contact-subtext">
                  Feel free to reach out for collaborations, opportunities, or
                  just a friendly chat.
                </p>

                {[
                  { label: "Email", value: "cvvignesh1620@gmail.com", href: "mailto:cvvignesh1620@gmail.com", icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
                  { label: "Location", value: "Dharmapuri, India", icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" },
                  { label: "LinkedIn", value: "/in/vignesh-chinnasamy", href: "https://www.linkedin.com/in/vignesh-chinnasamy-0058a7238?utm_source=share_via&utm_content=profile&utm_medium=member_android", icon: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z" },
                ].map((item) =>
                  item.href ? (
                    <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className="contact-item" style={{ textDecoration: "none", display: "flex" }}>
                      <div className="contact-item-icon">
                        <svg width="20" height="20" fill="none" stroke="white" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                        </svg>
                      </div>
                      <div>
                        <p className="contact-item-label">{item.label}</p>
                        <p className="contact-item-value">{item.value}</p>
                      </div>
                    </a>
                  ) : (
                    <div key={item.label} className="contact-item">
                      <div className="contact-item-icon">
                        <svg width="20" height="20" fill="none" stroke="white" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                        </svg>
                      </div>
                      <div>
                        <p className="contact-item-label">{item.label}</p>
                        <p className="contact-item-value">{item.value}</p>
                      </div>
                    </div>
                  )
                )}
              </div>
          </div>

          <div className={`fade-right${visible ? " visible" : ""}`}>
            <div>
              <form
                className="contact-form"
                action="mailto:cvvignesh1620@gmail.com"
                method="POST"
                encType="text/plain"
              >
                <div className="form-group">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea
                    name="message"
                    placeholder="Your message..."
                    className="form-input"
                    rows={5}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="btn-submit"
                  style={{ marginTop: 8 }}
                >
                  <span
                    className="btn-primary-bg animate-gradient"
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(to right, #4f46e5, #9333ea, #db2777)",
                      backgroundSize: "200% 200%",
                    }}
                  />
                  <span
                    style={{
                      position: "absolute",
                      inset: 2,
                      background: "#030014",
                      borderRadius: 9999,
                    }}
                  />
                  <span style={{ position: "relative", zIndex: 1 }}>
                    Send Message
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
