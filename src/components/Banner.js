import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";

const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
const period = 2000;

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    const tick = () => {
      const i = loopNum % toRotate.length;
      const fullText = toRotate[i];

      if (isDeleting) {
        setText(fullText.substring(0, text.length - 1));
      } else {
        setText(fullText.substring(0, text.length + 1));
      }

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), period);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const typingTimeout = setTimeout(tick, isDeleting ? 100 : 200);
    return () => clearTimeout(typingTimeout);
  }, [text, isDeleting, loopNum]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center gy-3 gy-lg-5">
          {/* Text Column - appears first in DOM so it shows first on mobile */}
          <Col xs={12} lg={6} xl={7} className="text-center text-lg-start">
            <TrackVisibility once>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">
                    <span className="pulse-dot"></span> Welcome to Graffix
                  </span>
                  <h2 className="h2-typing">
                    {`Hey! We're Team Graffix `}
                    <br />
                    <span className="txt-rotate">
                      <span className="wrap">{text}</span>
                    </span>
                  </h2>
                  <p className="hero-subtitle">
                    Empowering Brands through Infinite Digital Architecture
                  </p>
                  <p className="hero-description">
                    Graffix Innovation specializes in website development, Android applications, UX/UI design, and digital marketing. We craft custom solutions designed to scale.
                  </p>
                  
                  {/* Statistics Counter Grid */}
                  <div className="hero-stats">
                    <div className="stat-item">
                      <h3>150+</h3>
                      <p>Projects Completed</p>
                    </div>
                    <div className="stat-item">
                      <h3>99%</h3>
                      <p>Client Satisfaction</p>
                    </div>
                    <div className="stat-item">
                      <h3>8+</h3>
                      <p>Domain Experts</p>
                    </div>
                  </div>

                  {/* Dual Actions */}
                  <div className="hero-actions">
                    <button className="btn-primary-glow" onClick={() => {
                      const anchor = document.querySelector("#contact");
                      if (anchor) anchor.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}>
                      <span>Let's Connect</span> <ArrowRightCircle size={22} className="ms-2" />
                    </button>
                    <button className="btn-secondary-glass" onClick={() => {
                      const anchor = document.querySelector("#projects");
                      if (anchor) anchor.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}>
                      <span>View Showcase</span>
                    </button>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>

          {/* Code Window Column - appears second on mobile */}
          <Col xs={12} lg={6} xl={5} className="d-flex justify-content-center justify-content-lg-end">
            <TrackVisibility once>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""} style={{ width: "100%", maxWidth: "480px" }}>
                  <div className="hero-img-wrapper">
                    {/* Glowing Tech Code Window Mockup */}
                    <div className="hero-code-window glass-card">
                      <div className="code-window-header">
                        <div className="window-dots">
                          <span className="dot dot-red"></span>
                          <span className="dot dot-yellow"></span>
                          <span className="dot dot-green"></span>
                        </div>
                        <div className="window-title">graffix.config.js</div>
                      </div>
                      <div className="code-window-body">
                        <pre>
                          <code>
                            <span className="code-keyword">const</span> <span className="code-variable">graffix</span> = {'{'}
                            {'\n  '}
                            <span className="code-key">mission</span>: <span className="code-string">"Empowering Brands"</span>,
                            {'\n  '}
                            <span className="code-key">techStack</span>: [
                            {'\n    '}
                            <span className="code-string">"React"</span>, <span className="code-string">"Next.js"</span>, <span className="code-string">"AI Automations"</span>, <span className="code-string">"Cloud"</span>
                            {'\n  '}],
                            {'\n  '}
                            <span className="code-key">value</span>: <span className="code-string">"Infinite Digital Architecture"</span>,
                            {'\n  '}
                            <span className="code-key">status</span>: <span className="code-string">"Scaling"</span>
                            {'\n'}
                            {'};'}
                          </code>
                        </pre>
                      </div>
                    </div>
                    
                    {/* Floating glass badges - only visible on desktop */}
                    <div className="floating-badge badge-top-right d-none d-lg-flex">
                      <div className="badge-glow"></div>
                      <div className="badge-content">
                        <span className="badge-icon">🚀</span>
                        <div>
                          <h4>1.2M+</h4>
                          <p>Active Automations</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="floating-badge badge-bottom-left d-none d-lg-flex">
                      <div className="badge-glow"></div>
                      <div className="badge-content">
                        <span className="badge-icon">⚡</span>
                        <div>
                          <h4>99.9%</h4>
                          <p>Uptime Guaranteed</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
