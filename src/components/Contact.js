import { useState } from "react";  
import { Container, Row, Col } from "react-bootstrap";
import emailjs from 'emailjs-com';
import './Contact.css'; 

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send Message');
  const [status, setStatus] = useState({});
  const [copySuccess, setCopySuccess] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    
    emailjs.send(
      'service_mh8a683', 
      'template_ed42v6c', 
      {
        firstName: formDetails.firstName,
        lastName: formDetails.lastName,
        email: formDetails.email,
        phone: formDetails.phone,
        message: formDetails.message
      },
      'PvjEJ5xYydvHCF_jy' 
    ).then((response) => {
      setButtonText("Send Message");
      setFormDetails(formInitialDetails);
      setStatus({ success: true, message: 'Message sent successfully!' });
      setTimeout(() => {
        setStatus({}); // Clear the message after 3 seconds
      }, 3000);
    }).catch((error) => {
      setButtonText("Send Message");
      setStatus({ success: false, message: 'Something went wrong. Please try again.' });
      setTimeout(() => {
        setStatus({}); // Clear the message after 3 seconds
      }, 3000);
    });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("hello@graffixinnovation.com");
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "What is your turnaround time for a custom website?",
      a: "Typically 3-6 weeks depending on requirements, complexities, and third-party integrations."
    },
    {
      q: "Do you sign non-disclosure agreements (NDAs)?",
      a: "Yes, we protect all client intellectual property and sign NDAs prior to discovery sessions."
    },
    {
      q: "Can you help migrate our legacy systems to the cloud?",
      a: "Yes! Our cloud architects specialize in AWS, GCP, and Kubernetes migrations for scale and reliability."
    }
  ];

  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="gy-5">
          {/* Left Column: Contact Info Hub */}
          <Col size={12} lg={5}>
            <div>
              <span className="contact-tag">GET IN TOUCH</span>
              <h2 className="contact-heading">Let's Build Something Great Together</h2>
              <p className="contact-subtext">
                Have a project in mind, or want to discuss a partnership? Drop us a line and let our experts guide you.
              </p>

              <div className="contact-cards-container mt-4">
                {/* Email Card */}
                <div className="contact-info-card glass-card">
                  <div className="card-icon"><i className="fas fa-envelope"></i></div>
                  <div className="card-details">
                    <span>Email Us</span>
                    <h5>hello@graffixinnovation.com</h5>
                  </div>
                  <button className="copy-email-btn" onClick={handleCopyEmail} aria-label="Copy Email Address">
                    {copySuccess ? <i className="fas fa-check text-success"></i> : <i className="fas fa-copy"></i>}
                  </button>
                </div>

                {/* Phone Card */}
                <div className="contact-info-card glass-card">
                  <div className="card-icon"><i className="fas fa-phone-alt"></i></div>
                  <div className="card-details">
                    <span>Call Us</span>
                    <h5>+1 (555) 019-2834</h5>
                  </div>
                </div>

                {/* Location Card */}
                <div className="contact-info-card glass-card">
                  <div className="card-icon"><i className="fas fa-map-marker-alt"></i></div>
                  <div className="card-details">
                    <span>Headquarters</span>
                    <h5>Silicon Valley Tech Center, CA</h5>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          {/* Right Column: Contact Form */}
          <Col size={12} lg={7}>
            <div>
              <form onSubmit={handleSubmit} className="contact-form">
                <h3 className="form-title mb-4">Send a Message</h3>
                
                <Row>
                  <Col size={12} sm={6}>
                    <div className="floating-label-group">
                      <input 
                        type="text" 
                        value={formDetails.firstName} 
                        placeholder=" " 
                        onChange={(e) => onFormUpdate('firstName', e.target.value)} 
                        required
                        className="form-control"
                        id="firstNameInput"
                      />
                      <label htmlFor="firstNameInput">First Name</label>
                    </div>
                  </Col>
                  <Col size={12} sm={6}>
                    <div className="floating-label-group">
                      <input 
                        type="text" 
                        value={formDetails.lastName} 
                        placeholder=" " 
                        onChange={(e) => onFormUpdate('lastName', e.target.value)}
                        required
                        className="form-control"
                        id="lastNameInput"
                      />
                      <label htmlFor="lastNameInput">Last Name</label>
                    </div>
                  </Col>
                  <Col size={12} sm={6}>
                    <div className="floating-label-group">
                      <input 
                        type="email" 
                        value={formDetails.email} 
                        placeholder=" " 
                        onChange={(e) => onFormUpdate('email', e.target.value)} 
                        required
                        className="form-control"
                        id="emailInput"
                      />
                      <label htmlFor="emailInput">Email Address</label>
                    </div>
                  </Col>
                  <Col size={12} sm={6}>
                    <div className="floating-label-group">
                      <input 
                        type="tel" 
                        value={formDetails.phone} 
                        placeholder=" " 
                        onChange={(e) => onFormUpdate('phone', e.target.value)}
                        required
                        className="form-control"
                        id="phoneInput"
                      />
                      <label htmlFor="phoneInput">Phone No.</label>
                    </div>
                  </Col>
                  <Col size={12}>
                    <div className="floating-label-group">
                      <textarea 
                        rows="5" 
                        value={formDetails.message} 
                        placeholder=" " 
                        onChange={(e) => onFormUpdate('message', e.target.value)} 
                        required
                        className="form-control"
                        id="messageInput"
                      ></textarea>
                      <label htmlFor="messageInput">Your Message</label>
                    </div>
                    
                    <div className="submit-container d-flex align-items-center justify-content-between flex-wrap gap-3">
                      <button type="submit" className="submit-btn">
                        <span>{buttonText}</span>
                      </button>
                      
                      {status.message && (
                        <p className={status.success ? "success-msg m-0" : "danger-msg m-0"}>
                          {status.message}
                        </p>
                      )}
                    </div>
                  </Col>
                </Row>
              </form>
            </div>
          </Col>
        </Row>

        {/* FAQ Section — Full Width Below */}
        <Row className="mt-5">
          <Col size={12}>
            <div className="contact-faq-section">
              <div className="text-center mb-4">
                <span className="contact-tag">GOT QUESTIONS?</span>
                <h3 className="faq-title mt-2">Frequently Asked Questions</h3>
              </div>
              <Row className="justify-content-center">
                {faqs.map((faq, index) => (
                  <Col md={6} lg={4} key={index} className="mb-3">
                    <div className={`faq-item glass-card ${activeFaq === index ? 'active' : ''}`}>
                      <button className="faq-question-btn" onClick={() => toggleFaq(index)} aria-expanded={activeFaq === index} aria-controls={`faq-answer-${index}`}>
                        <span>{faq.q}</span>
                        <span className="faq-icon"><i className="fas fa-chevron-down"></i></span>
                      </button>
                      <div id={`faq-answer-${index}`} className="faq-answer">
                        <p>{faq.a}</p>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
