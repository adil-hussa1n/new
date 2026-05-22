import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { PackageCard } from "./PackageCard";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import './Packages.css'; 

export const Packages = () => {
  const packages = [
    // Web Solutions (0, 1, 2)
    {
      title: "Basic Web",
      price: "Starting from $99",
      features: [
        "✅ 1 Page Responsive Website",
        "✅ Custom UI Design Mockup",
        "✅ Contact Form Integration",
        "✅ Basic Speed Optimization",
        "❌ Content Management System (CMS)",
        "❌ E-commerce / Online Store",
        "❌ SEO & Analytics Setup",
        "✅ Delivery Timeline 1 Week"
      ],
    },
    {
      title: "Advanced Web",
      price: "Starting from $349",
      popular: true,
      features: [
        "✅ Up to 5 Pages Modern Website",
        "✅ Fully Responsive & Mobile-friendly",
        "✅ CMS Integration (WordPress/React)",
        "✅ Contact & Inquiry Forms",
        "✅ Standard SEO & Analytics Setup",
        "❌ Custom E-commerce Store",
        "❌ Advanced Security Protocols",
        "✅ Delivery Timeline 2 Weeks"
      ],
    },
    {
      title: "Premium Web",
      price: "Starting from $999",
      features: [
        "✅ Unlimited Pages / Complex Web App",
        "✅ Advanced E-commerce Store Integration",
        "✅ Custom Database & API Integrations",
        "✅ Advanced SEO & Speed Optimization",
        "✅ Premium Security & Backups",
        "✅ 3 Months Dedicated Tech Support",
        "✅ Delivery Timeline 4-6 Weeks"
      ],
    },

    // Design Packages (3, 4, 5)
    {
      title: "Basic Design",
      price: "$99",
      features: [
        "✅ 2 Logo Design Concepts",
        "❌ PowerPoint Presentation Theme",
        "❌ Social media cover pages design",
        "❌ Slogans and taglines",
        "✅ 1 Flyer Designs",
        "✅ Business Card Design",
        "✅ Letterhead Design",
        "✅ Envelope Design",
        "❌ Book cover/Writing Pad/Dairy",
        "❌ T-shirts/Caps",
        "❌ Mug/Bottle Design",
        "❌ Product label",
        "❌ Stationery Design",
        "❌ Brochure Design",
        "✅ Full copyright ownership",
        "✅ Delivery Timeline 1 Weeks"
      ],
    },
    {
      title: "Advanced Design",
      price: "$199",
      popular: true,
      features: [
        "✅ 3 Logo Design Concepts",
        "✅ PowerPoint Presentation Theme",
        "✅ Social media cover pages design",
        "✅ Slogans and taglines",
        "✅ 2 Flyer Designs",
        "✅ Business Card Design",
        "✅ Letterhead Design",
        "✅ Envelope Design",
        "✅ Book cover/Writing Pad/Dairy",
        "❌ T-shirts/Caps",
        "❌ Mug/Bottle Design",
        "✅ Product label",
        "✅ Stationery Design",
        "✅ Brochure Design",
        "✅ Full copyright ownership",
        "✅ Delivery Timeline 2 Weeks"
      ],
    },
    {
      title: "Premium Design",
      price: "$249",
      features: [
        "✅ 5 Logo Design Concepts",
        "✅ PowerPoint Presentation Theme",
        "✅ Social media cover pages design",
        "✅ Slogans and taglines",
        "✅ 3 Flyer Designs",
        "✅ Business Card Design",
        "✅ Letterhead Design",
        "✅ Envelope Design",
        "✅ Book cover/Writing Pad/Dairy",
        "✅ T-shirts/Caps",
        "✅ Mug/Bottle Design",
        "✅ Product label",
        "✅ Stationery Design",
        "✅ Brochure Design",
        "✅ Full copyright ownership",
        "✅ Delivery Timeline 3-4 Weeks"
      ],
    },

    // AI & Automation (6, 7, 8)
    {
      title: "Basic Automation",
      price: "Starting from $199",
      features: [
        "✅ 1 Custom AI Chatbot Integration",
        "✅ Simple Zapier/Make Automation Flow",
        "✅ API Connection for 1 External Service",
        "✅ Basic Automation Strategy Session",
        "❌ Custom LLM Fine-tuning & Training",
        "❌ Dedicated AI Agent Model Hosting",
        "❌ Vector Database Setup",
        "✅ Delivery Timeline 2 Weeks"
      ],
    },
    {
      title: "Advanced Automation",
      price: "Starting from $599",
      popular: true,
      features: [
        "✅ Up to 3 AI integrations / workflows",
        "✅ Custom Chatbot with Custom Knowledge Base",
        "✅ Automated Business Reporting Pipelines",
        "✅ OpenAI / Claude API Orchestrations",
        "✅ Mid-tier Vector Database Integration",
        "❌ Proprietary Model Training",
        "❌ 24/7 AI System Monitoring",
        "✅ Delivery Timeline 3-4 Weeks"
      ],
    },
    {
      title: "Enterprise AI Solution",
      price: "$ Negotiable Price",
      features: [
        "✅ Custom Tailored AI Agent Ecosystems",
        "✅ Proprietary LLM Fine-tuning & Hosting",
        "✅ End-to-end Operations Workflow Automation",
        "✅ Advanced Vector Databases (Pinecone/Milvus)",
        "✅ Custom Dashboard for Automation Controls",
        "✅ 24/7 Dedicated AI Maintenance",
        "✅ Unlimited API Integrations"
      ],
    },

    // Cloud & DevOps (9, 10, 11)
    {
      title: "Infrastructure Setup",
      price: "Starting from $249",
      features: [
        "✅ Cloud Deployment (AWS, GCP, or Azure)",
        "✅ Docker Containerization of Main App",
        "✅ Standard SSL & Server Security Hardening",
        "✅ Basic System Monitoring Alerts",
        "❌ Fully Automated CI/CD Deployments",
        "❌ Multi-region Server Redundancy",
        "❌ Infrastructure as Code (IaC)",
        "✅ Delivery Timeline 1 Week"
      ],
    },
    {
      title: "Advanced Cloud",
      price: "Starting from $699",
      popular: true,
      features: [
        "✅ Fully Automated CI/CD Deployment Pipeline",
        "✅ Kubernetes / Docker Swarm Container Hosting",
        "✅ Infrastructure as Code (IaC) via Terraform",
        "✅ Automated Cloud Backup & Failover System",
        "✅ Cloud Budget & Resource Optimization",
        "❌ 24/7 Site Reliability Engineer (SRE)",
        "❌ Multi-cloud Orchestration Setup",
        "✅ Delivery Timeline 2-3 Weeks"
      ],
    },
    {
      title: "Enterprise Cloud",
      price: "$ Negotiable Price",
      features: [
        "✅ Global Multi-region Server Redundancy",
        "✅ Zero-downtime Cloud High Availability",
        "✅ Advanced Security Audits (SOC2 compliance)",
        "✅ 24/7 Dedicated SRE Support & On-Call",
        "✅ Multi-cloud Setup (Hybrid AWS/GCP)",
        "✅ Custom Server Performance Optimization",
        "✅ High-bandwidth CDN Configuration"
      ],
    },

    // Marketing Strategies (12, 13, 14)
    {
      title: "Starter Marketing",
      price: "$149 / mo",
      features: [
        "✅ On-page SEO Audit & Setup",
        "✅ 3 Custom Social Media Posts/week",
        "✅ Basic Keyword Research (up to 20)",
        "✅ Monthly Progress & Traffic Reports",
        "❌ Google & Meta Ad Management",
        "❌ Custom Blog Content Creation",
        "❌ Dedicated Account Manager"
      ],
    },
    {
      title: "Growth Marketing",
      price: "$399 / mo",
      popular: true,
      features: [
        "✅ Comprehensive SEO & Competitor Analysis",
        "✅ 5 Custom Social Media Posts/week",
        "✅ Google & Meta PPC Ad Management",
        "✅ 2 SEO-optimized Blog Articles/month",
        "✅ Bi-weekly Strategy & Analytics Sessions",
        "❌ Dedicated 24/7 Account Manager",
        "✅ Delivery Timeline Monthly Campaign"
      ],
    },
    {
      title: "Custom Enterprise",
      price: "$ Negotiable Price",
      features: [
        "✅ Custom Tailored Digital Strategy",
        "✅ Full Scale SEO, SEM & Social Campaigns",
        "✅ Dedicated 24/7 Marketing Manager",
        "✅ Unlimited Blog and Content Writing",
        "✅ Weekly In-depth Performance Audits",
        "✅ Multi-channel Branding & Funnel Setup"
      ],
    },
  ];

  return (
    <section className="packages py-5" id="package">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility once>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2 className="text-center mb-4 text-gradient-gold">Our Packages</h2>
                  <p className="text-center text-light mb-5">Choose from our range of services designed to suit your business needs.</p>
                  <Tab.Container id="packages-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="justify-content-center mb-5 flex-wrap">
                      <Nav.Item>
                        <Nav.Link eventKey="first" className="custom-tab">Web Solutions</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second" className="custom-tab">Design Packages</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third" className="custom-tab">AI & Automation</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="fourth" className="custom-tab">Cloud & DevOps</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="fifth" className="custom-tab">Marketing Strategies</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row className="justify-content-center">
                          {packages.slice(0, 3).map((pkg, index) => (
                            <Col md={6} lg={4} key={index} className="mb-4">
                              <PackageCard {...pkg} />
                            </Col>
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row className="justify-content-center">
                          {packages.slice(3, 6).map((pkg, index) => (
                            <Col md={6} lg={4} key={index} className="mb-4">
                              <PackageCard {...pkg} />
                            </Col>
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row className="justify-content-center">
                          {packages.slice(6, 9).map((pkg, index) => (
                            <Col md={6} lg={4} key={index} className="mb-4">
                              <PackageCard {...pkg} />
                            </Col>
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="fourth">
                        <Row className="justify-content-center">
                          {packages.slice(9, 12).map((pkg, index) => (
                            <Col md={6} lg={4} key={index} className="mb-4">
                              <PackageCard {...pkg} />
                            </Col>
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="fifth">
                        <Row className="justify-content-center">
                          {packages.slice(12, 15).map((pkg, index) => (
                            <Col md={6} lg={4} key={index} className="mb-4">
                              <PackageCard {...pkg} />
                            </Col>
                          ))}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
