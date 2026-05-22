import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import bg from "../assets/img/bg.png";
import './Footer.css'; // For custom styles

export const Footer = () => {
  return (
    <footer className="footer text-white">
      <Container>
        <Row className="align-items-center">
          {/* Footer Logo Section */}
          <Col xs={12} sm={6} className="text-center text-sm-start mb-3 mb-sm-0">
            <img src={bg} alt="Logo" className="footer-logo img-fluid mb-3" />
          </Col>

          {/* Social Icons and Text */}
          <Col xs={12} sm={6} className="text-center text-sm-end">
            <p className="mb-2 text-gray-400">© 2024. All Rights Reserved</p>
            <div className="social-icon">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="mx-2 social-link">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="mx-2 social-link">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="mx-2 social-link">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
