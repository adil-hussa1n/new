import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import './Team.css';

// Import team member avatars
import member1 from "../assets/img/team-member1.png";
import member2 from "../assets/img/team-member2.png";
import member3 from "../assets/img/team-member3.png";
import member4 from "../assets/img/team-member4.png";
import member5 from "../assets/img/team-member5.png";
import member6 from "../assets/img/team-member6.png";
import member7 from "../assets/img/team-member7.png";
import member8 from "../assets/img/team-member8.png";

export const Team = () => {
  const teamList = [
    {
      name: "John Doe",
      role: "Founder & CEO",
      imgUrl: member1,
      bio: "Tech visionary and strategist guiding company growth and client success.",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      twitter: "https://twitter.com"
    },
    {
      name: "Jane Smith",
      role: "Lead UI/UX Designer",
      imgUrl: member2,
      bio: "Creative UI/UX specialist focused on crafting user-centered interactive products.",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      twitter: "https://twitter.com"
    },
    {
      name: "Alex Rivera",
      role: "Tech Lead & Full Stack",
      imgUrl: member3,
      bio: "Full stack engineering leader transforming visual layouts into functional code.",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      twitter: "https://twitter.com"
    },
    {
      name: "Sarah Chen",
      role: "Growth Marketer",
      imgUrl: member4,
      bio: "Analytics-driven marketing expert building organic search and social growth.",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      twitter: "https://twitter.com"
    },
    {
      name: "Michael Chang",
      role: "AI Engineer & Automation Specialist",
      imgUrl: member5,
      bio: "Machine learning engineer building intelligent agents, automation bots, and LLM fine-tunes.",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      twitter: "https://twitter.com"
    },
    {
      name: "Emily Watson",
      role: "Cloud DevOps Architect",
      imgUrl: member6,
      bio: "DevOps expert automating infrastructure as code, Kubernetes deployments, and cloud networks.",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      twitter: "https://twitter.com"
    },
    {
      name: "David Kim",
      role: "Mobile App Developer",
      imgUrl: member7,
      bio: "High-performance React Native and Swift developer building interactive mobile platforms.",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      twitter: "https://twitter.com"
    },
    {
      name: "Sophia Martinez",
      role: "QA & Testing Lead",
      imgUrl: member8,
      bio: "Quality assurance lead ensuring stability, reliability, and security of all deployed platforms.",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      twitter: "https://twitter.com"
    }
  ];

  return (
    <section className="team py-5" id="team">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility once>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2 className="text-center mb-4 text-gradient-gold">Meet Our Team</h2>
                  <p className="text-center text-light mb-5">The talented creators and developers behind Graffix Innovations.</p>
                  
                  <Row className="justify-content-center">
                    {teamList.map((member, index) => (
                      <Col sm={6} md={6} lg={3} key={index} className="mb-4">
                        <div className="team-card-wrapper">
                          <div className="team-img-box">
                            <img src={member.imgUrl} alt={member.name} className="team-img" />
                          </div>
                          <div className="team-content">
                            <h4>{member.name}</h4>
                            <span className="team-role">{member.role}</span>
                            <p className="team-bio">{member.bio}</p>
                            <div className="team-socials">
                              <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${member.name} LinkedIn`}>
                                <FontAwesomeIcon icon={faLinkedin} size="lg" />
                              </a>
                              <a href={member.github} target="_blank" rel="noopener noreferrer" aria-label={`${member.name} GitHub`}>
                                <FontAwesomeIcon icon={faGithub} size="lg" />
                              </a>
                              <a href={member.twitter} target="_blank" rel="noopener noreferrer" aria-label={`${member.name} Twitter`}>
                                <FontAwesomeIcon icon={faTwitter} size="lg" />
                              </a>
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
