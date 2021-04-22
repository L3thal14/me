import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
const Experience = () => {
  return (
    <div id="contact">
      <div className="about">
        <h1
          className="pt-3 text-center font-details pb-3"
          style={{ color: "#C0CAE9" }}
        >
          Get in Touch
        </h1>
        <Container>
          <Col xs={12} md={12}>
            <p>
              I am always up for collaborating on projects. <br /> You can
              connect with me through any of the following links.
            </p>
            <button className="button-new" style={{ padding: "4px" }}>
              <a
                href="mailto:karthikramakrishnan14@gmail.com"
                className="email"
              >
                Contact Me
              </a>
            </button>

            <div className="social-container">
              <a
                href="https://www.linkedin.com/in/karthikr1406/"
                className="linkedin social"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
              <a
                href="https://github.com/L3thal14"
                className="github social"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
              <a
                href="https://twitter.com/karthik_geek14"
                className="twitter social"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              <a
                href="https://www.instagram.com/that_soberguy_/"
                className="instagram social"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
            </div>
          </Col>
        </Container>
      </div>
    </div>
  );
};

export default Experience;
