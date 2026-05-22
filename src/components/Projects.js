import React, { useState } from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import './Projects.css';

// Import optimized project images (WebP)
import ecommerceImg from "../assets/img/project-ecommerce.webp";
import saasImg from "../assets/img/project-saas.webp";
import fitnessImg from "../assets/img/project-fitness.webp";
import brandingImg from "../assets/img/project-branding.webp";
import aiImg from "../assets/img/project-ai.webp";
import cloudImg from "../assets/img/project-cloud.webp";
import marketingImg from "../assets/img/project-marketing.webp";

export const Projects = () => {
  const [filter, setFilter] = useState("All");

  const projectsList = [
    {
      title: "Apex E-Commerce Store",
      category: "Development",
      imgUrl: ecommerceImg,
      description: "A fast e-commerce platform with real-time inventory management and an integrated admin analytics panel.",
      techStack: ["React", "Node.js", "MongoDB", "Redux"],
      projectUrl: "#contact"
    },
    {
      title: "SaaS Analytics Dashboard",
      category: "Development",
      imgUrl: saasImg,
      description: "A futuristic user metrics control panel featuring customizable widgets and drag-and-drop analytics components.",
      techStack: ["Next.js", "ChartJS", "TailwindCSS", "PostgreSQL"],
      projectUrl: "#contact"
    },
    {
      title: "FitFlow Mobile Companion",
      category: "Design",
      imgUrl: fitnessImg,
      description: "Complete UI/UX case study and interface prototype for a mobile-first fitness tracking application.",
      techStack: ["Figma", "UI/UX Design", "User Research", "Prototyping"],
      projectUrl: "#contact"
    },
    {
      title: "Horizon Rebranding Package",
      category: "Design",
      imgUrl: brandingImg,
      description: "A comprehensive brand identity overhaul including modern logo design, corporate guidelines, and typography kits.",
      techStack: ["Adobe Suite", "Vector Illustration", "Brand Strategy"],
      projectUrl: "#contact"
    },
    {
      title: "AI Assistant & Workflow Automator",
      category: "AI & Cloud",
      imgUrl: aiImg,
      description: "An intelligent chatbot assistant integrated with corporate ERP/CRM systems to automate daily administrative tasks.",
      techStack: ["OpenAI API", "Python", "LangChain", "FastAPI"],
      projectUrl: "#contact"
    },
    {
      title: "Kubernetes Multi-Cloud Infrastructure",
      category: "AI & Cloud",
      imgUrl: cloudImg,
      description: "A resilient multi-cloud architecture utilizing Docker, Kubernetes, and Terraform to automate continuous delivery.",
      techStack: ["AWS", "GCP", "Kubernetes", "Terraform", "CI/CD"],
      projectUrl: "#contact"
    },
    {
      title: "Omnichannel Growth Campaign",
      category: "Marketing",
      imgUrl: marketingImg,
      description: "A full-funnel digital marketing campaign boosting lead generation, search rankings, and social visibility.",
      techStack: ["SEO", "Google Ads", "Meta Ads", "Analytics"],
      projectUrl: "#contact"
    }
  ];

  const filteredProjects = filter === "All" 
    ? projectsList 
    : projectsList.filter(proj => proj.category === filter);

  return (
    <section className="project py-5" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility once>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2 className="text-center mb-4 text-gradient-gold">Our Work</h2>
                  <p className="text-center text-light mb-5">Explore our portfolio of successfully delivered digital solutions and designs.</p>
                  
                  {/* Category Filter Navigation */}
                  <Nav variant="pills" className="justify-content-center mb-5 project-nav">
                    <Nav.Item>
                      <Nav.Link 
                        active={filter === "All"} 
                        onClick={() => setFilter("All")}
                        className="project-filter-btn"
                      >
                        All Projects
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link 
                        active={filter === "Development"} 
                        onClick={() => setFilter("Development")}
                        className="project-filter-btn"
                      >
                        Development
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link 
                        active={filter === "Design"} 
                        onClick={() => setFilter("Design")}
                        className="project-filter-btn"
                      >
                        Design & Branding
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link 
                        active={filter === "AI & Cloud"} 
                        onClick={() => setFilter("AI & Cloud")}
                        className="project-filter-btn"
                      >
                        AI & Cloud
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link 
                        active={filter === "Marketing"} 
                        onClick={() => setFilter("Marketing")}
                        className="project-filter-btn"
                      >
                        Marketing
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>

                  {/* Projects Grid */}
                  <Row className="project-grid justify-content-center">
                    {filteredProjects.map((project, index) => (
                      <Col xs={6} md={6} lg={4} key={index} className="mb-4 mb-md-5 project-col">
                        <div className="project-card-wrapper">
                          <div className="project-img-box">
                            <img src={project.imgUrl} alt={project.title} className="project-img" loading="lazy" width="800" height="600" />
                            <div className="project-overlay">
                              <div className="project-overlay-content">
                                <span className="project-tag">{project.category}</span>
                                <h4>{project.title}</h4>
                                <p>{project.description}</p>
                                <div className="tech-tags mb-3">
                                  {project.techStack.map((tech, i) => (
                                    <span key={i} className="tech-tag">{tech}</span>
                                  ))}
                                </div>
                                <a href={project.projectUrl} className="btn-view-project">Inquire Now</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};