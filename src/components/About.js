import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './AboutUs.css';

export const About = () => {
  return (
    <section className="about-us" id="about">
      <Container>
        {/* Split Introduction Layout */}
        <Row className="align-items-center mb-5 gy-4">
          <Col lg={6}>
            <div className="about-intro-left animate__animated animate__fadeInLeft">
              <span className="about-tag">WHO WE ARE</span>
              <h2 className="section-heading text-start">Crafting the Future of Digital Experiences</h2>
              <p className="lead-text">
                At Graffix Innovation, we are passionate about transforming ideas into impactful visuals. We combine software development, UX/UI design, and creative branding into a unified digital strategy that empowers businesses to dominate their markets.
              </p>
            </div>
          </Col>
          <Col lg={6}>
            <div className="about-intro-right glass-card p-4 animate__animated animate__fadeInRight">
              <h3 className="section-subheading mb-3">Our Core Focus</h3>
              <ul className="core-focus-list">
                <li>
                  <span className="focus-icon-wrap"><i className="fas fa-check-circle"></i></span>
                  <div>
                    <h5>High-Fidelity UI/UX</h5>
                    <p>Interfaces built to captivate users and maximize engagement.</p>
                  </div>
                </li>
                <li>
                  <span className="focus-icon-wrap"><i className="fas fa-check-circle"></i></span>
                  <div>
                    <h5>Scalable Software Engineering</h5>
                    <p>Clean code architecture optimized for speed, security, and growth.</p>
                  </div>
                </li>
                <li>
                  <span className="focus-icon-wrap"><i className="fas fa-check-circle"></i></span>
                  <div>
                    <h5>Data-Driven Marketing</h5>
                    <p>Strategies built to drive traffic, capture leads, and scale revenue.</p>
                  </div>
                </li>
              </ul>
            </div>
          </Col>
        </Row>

        {/* Bento Grid */}
        <h3 className="section-heading text-center mb-5 mt-5">Why Choose Graffix</h3>
        
        <div className="bento-grid">
          {/* Card 1: Creative Expertise (Large) */}
          <div className="bento-item bento-large glass-card">
            <div className="bento-glow"></div>
            <div className="bento-content">
              <div className="bento-icon-box">
                <i className="fas fa-lightbulb"></i>
              </div>
              <h4>Creative Expertise</h4>
              <p>
                Our team comprises seasoned design professionals who thrive on creative boundaries. We stay ahead of design trends, merging neon gradients and sharp glassmorphism layouts to ensure your brand remains fresh, modern, and engaging.
              </p>
              <div className="bento-creative-deco">
                <span className="deco-dot"></span>
                <span className="deco-dot"></span>
                <span className="deco-dot"></span>
              </div>
            </div>
          </div>

          {/* Card 2: Customized Solutions (Medium) */}
          <div className="bento-item bento-medium glass-card">
            <div className="bento-glow"></div>
            <div className="bento-content">
              <div className="bento-icon-box">
                <i className="fas fa-cogs"></i>
              </div>
              <h4>Customized Solutions</h4>
              <p>
                We understand that every client is unique. Our services are tailored to meet your exact specifications, ensuring zero compromise on quality.
              </p>
              <div className="bento-code-box">
                <code>{`const graffix = { client: "Unique", solution: "Tailored" };`}</code>
              </div>
            </div>
          </div>

          {/* Card 3: Collaborative Process (Medium) */}
          <div className="bento-item bento-medium glass-card">
            <div className="bento-glow"></div>
            <div className="bento-content">
              <div className="bento-icon-box">
                <i className="fas fa-handshake"></i>
              </div>
              <h4>Collaborative Process</h4>
              <p>
                We work side-by-side with your team. Your feedback drives our iterations, ensuring alignment at every major milestone.
              </p>
              <div className="bento-process-dots">
                <div className="dot active"></div>
                <div className="line"></div>
                <div className="dot"></div>
                <div className="line"></div>
                <div className="dot"></div>
              </div>
            </div>
          </div>

          {/* Card 4: Comprehensive Tech Stack (Large) */}
          <div className="bento-item bento-large glass-card">
            <div className="bento-glow"></div>
            <div className="bento-content">
              <div className="bento-icon-box">
                <i className="fas fa-briefcase"></i>
              </div>
              <h4>Comprehensive Tech Stack</h4>
              <p>
                From front-end web interfaces and native mobile apps to AI automation and cloud services, we leverage state-of-the-art technologies to build robust digital solutions.
              </p>
              <div className="tech-badge-cloud">
                <span className="tech-badge">React</span>
                <span className="tech-badge">Node.js</span>
                <span className="tech-badge">UI/UX</span>
                <span className="tech-badge">Figma</span>
                <span className="tech-badge">AWS</span>
                <span className="tech-badge">Python</span>
                <span className="tech-badge">Docker</span>
                <span className="tech-badge">Next.js</span>
              </div>
            </div>
          </div>
        </div>

        {/* Workflow Timeline Section */}
        <div className="about-roadmap mt-5 pt-5">
          <h3 className="section-heading text-center mb-5">How We Deliver Results</h3>
          
          <div className="roadmap-timeline">
            <div className="roadmap-line d-none d-lg-block"></div>
            <Row className="gy-5">
              <Col xs={12} md={6} lg={3}>
                <div className="roadmap-step glass-card">
                  <div className="step-number">01</div>
                  <h5 className="step-title">Discovery</h5>
                  <p className="step-desc">
                    We deep-dive into your business, research competitors, and define precise target personas.
                  </p>
                </div>
              </Col>
              <Col xs={12} md={6} lg={3}>
                <div className="roadmap-step glass-card">
                  <div className="step-number">02</div>
                  <h5 className="step-title">Strategy</h5>
                  <p className="step-desc">
                    We architect a detailed roadmap covering user journeys, wireframes, and technology choices.
                  </p>
                </div>
              </Col>
              <Col xs={12} md={6} lg={3}>
                <div className="roadmap-step glass-card">
                  <div className="step-number">03</div>
                  <h5 className="step-title">Development</h5>
                  <p className="step-desc">
                    Our team designs and builds high-fidelity code bases in short agile sprints with constant review.
                  </p>
                </div>
              </Col>
              <Col xs={12} md={6} lg={3}>
                <div className="roadmap-step glass-card">
                  <div className="step-number">04</div>
                  <h5 className="step-title">Launch</h5>
                  <p className="step-desc">
                    We conduct thorough QA testing, deploy to staging/production, and track post-launch KPIs.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </section>
  );
};
