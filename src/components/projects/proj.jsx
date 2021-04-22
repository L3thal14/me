import React, { Component } from "react";
import "./proj.css";
import Container from "react-bootstrap/Container";
import ProjectCard from "./projectCards";
class Projects extends Component {
  render() {
    return (
      <>
        <div id="projects" style={{ backgroundColor: "#051424" }}>
          <h1 className="pt-3 text-center font-details-b pb-3 project-text">
            {" "}
            Projects
          </h1>
          <Container fluid={true} className="align-content-center">
            <ProjectCard />
          </Container>
        </div>
      </>
    );
  }
}

export default Projects;
