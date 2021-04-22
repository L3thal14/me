import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.css";
import Profile from "../../assets/img/profile/profile.jpeg";
import Image from "react-bootstrap/Image";
const About = () => {
  return (
    <div id="about">
      <div className="about">
        <h1
          className="pt-3 text-center font-details pb-3"
          style={{ color: "#C0CAE9" }}
        >
          About Me
        </h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className=" align-items-start p-2 my-details rounded">
                I love making and breaking things from applications to
                electronic circuit boards. My passion lies in Web Application
                and Network security which involves finding and fixing
                vulnerabilities to secure apps and products used by millions of
                people. I like editing videos and playing competitive games in
                my leisure time and have recently ventured into dronography. I
                am always on the lookout for new technologies, their approach
                towards problem-solving and how I can use them to build better
                and scalable products.
                <br /> <br />
                <button className="button-newer" style={{ padding: "4px" }}>
                  <a
                    href="/karthik-resume.pdf"
                    className="resume font-details"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Resume
                  </a>
                </button>
              </Row>
            </Col>

            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image
                  className="profile justify-content-end"
                  alt="profile"
                  src={Profile}
                  fluid
                  rounded
                />
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
