import React from "react";
import "./proj.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import zeoco from "../../assets/img/projects/zeocoicon.jpg";
import chess from "../../assets/img/projects/chess-stats.png";
import commercejs from "../../assets/img/projects/commercejs.png";
import commercify from "../../assets/img/projects/commercify.png";
import stripejs from "../../assets/img/projects/stripejs.svg";
import slcm from "../../assets/img/projects/slcm.jpeg";
import restaurant from "../../assets/img/projects/restaurant.png";
import discordbot from "../../assets/img/projects/discordbot.png";
import html from "../../assets/img/projects/html5.svg";
import css from "../../assets/img/projects/css.svg";
import reacts from "../../assets/img/projects/react.svg";
import bstrap from "../../assets/img/projects/bootstrap-4.svg";
import javascript from "../../assets/img/projects/javascript.svg";
import materialui from "../../assets/img/projects/material-ui.png";
import chartjs from "../../assets/img/projects/chartjs.svg";
import flask from "../../assets/img/projects/flask.svg";
import python from "../../assets/img/projects/python.svg";
import flutter from "../../assets/img/projects/flutter.svg";
import firebase from "../../assets/img/projects/firebase.svg";
const ProjectCard = () => {
  return (
    <>
      <Row style={{ paddingTop: "40px" }}>
        <Col>
          <div className="mCard cardOverride">
            <div className="mCard-image" style={{ display: "flex" }}>
              <div
                style={{
                  flex: "1 1 auto",
                  minWidth: 400,
                  minHeight: 400,
                  backgroundImage: `url(${chess})`,
                  backgroundPosition: "center",
                  backgroundSize: "100% 100%",
                  backgroundRepeat: "no-repeat",
                }}
              />
            </div>
            <span className="mCard-title">Chess.com Stats Viewer</span>
            <Row className="d-flex justify-content-center">
              <img className="svg-icons" src={reacts} alt="flutter" />
              <img className="svg-icons" src={materialui} alt="firebase" />
              <img className="svg-icons" src={chartjs} alt="flask" />
            </Row>
            <div className="mCard-content">
              A web application to analyse and depict the performance of any
              user in games played on chess.com
            </div>

            <div className="mCard-action iconsContainer">
              <a
                href="https://github.com/L3thal14/chess-stats"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon is-large">
                  <i className="fab fa-github fa-lg colorBlack"></i>
                </span>
              </a>
              <a
                href="https://l3thal14.github.io/chess-stats/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon is-large">
                  <i className="fas fa-laptop-code fa-lg colorBlack"></i>
                </span>
              </a>
            </div>
          </div>
        </Col>
        <Col>
          <div className="mCard cardOverride">
            <div className="mCard-image" style={{ display: "flex" }}>
              <div
                style={{
                  flex: "1 1 auto",
                  minWidth: 400,
                  minHeight: 400,
                  backgroundImage: `url(${commercify})`,
                  backgroundPosition: "center",
                  backgroundSize: "100% 100%",
                  backgroundRepeat: "no-repeat",
                }}
              />
            </div>
            <span className="mCard-title">
              Commercify: A Full Stack E-Commerce Application
            </span>
            <Row className="d-flex justify-content-center">
              <img className="svg-icons" src={html} alt="html5" />
              <img className="svg-icons" src={css} alt="css3" />
              <img className="svg-icons" src={reacts} alt="react" />
              <img className="svg-icons" src={commercejs} alt="commerecejs" />
              <img className="svg-icons" src={stripejs} alt="stripejs" />
            </Row>
            <div className="mCard-content">
              A fully responsive E-Commerce Application built using React.js and
              Commerce.js with Payment Gateway Integration using Stripe.js
            </div>

            <div className="mCard-action iconsContainer">
              <a
                href="https://github.com/L3thal14/Commercify-JS"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon is-large">
                  <i className="fab fa-github fa-lg colorBlack"></i>
                </span>
              </a>
              <a
                href="https://commercify-js.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon is-large">
                  <i className="fas fa-laptop-code fa-lg colorBlack"></i>
                </span>
              </a>
            </div>
          </div>
        </Col>
        <Col>
          <div className="mCard cardOverride">
            <div className="mCard-image" style={{ display: "flex" }}>
              <div
                style={{
                  flex: "1 1 auto",
                  minWidth: 400,
                  minHeight: 400,
                  backgroundImage: `url(${restaurant})`,
                  backgroundSize: "100% 100%",
                  backgroundRepeat: "no-repeat",
                }}
              />
            </div>
            <span className="mCard-title">Restaurant UI App</span>
            <Row className="d-flex justify-content-center">
              <img className="svg-icons" src={html} alt="html5" />
              <img className="svg-icons" src={css} alt="css3" />
              <img className="svg-icons" src={bstrap} alt="bootstrap4" />
              <img className="svg-icons" src={reacts} alt="react" />
            </Row>
            <div className="mCard-content">
              A fully responsive restaurant Website UI designed with dynamic
              data served using JSON server.
            </div>

            <div className="mCard-action iconsContainer">
              <a
                href="https://github.com/L3thal14/Confusion-React"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon is-large">
                  <i className="fab fa-github fa-lg colorBlack"></i>
                </span>
              </a>
            </div>
          </div>
        </Col>
      </Row>
      <Row style={{ paddingTop: "40px" }}>
        <Col>
          <div className="mCard cardOverride">
            <div className="mCard-image" style={{ display: "flex" }}>
              <div
                style={{
                  flex: "1 1 auto",
                  minWidth: 400,
                  minHeight: 400,
                  backgroundImage: `url(${slcm})`,
                  backgroundPosition: "center",
                  backgroundSize: "100% 100%",
                  backgroundRepeat: "no-repeat",
                }}
              />
            </div>
            <span className="mCard-title">Student Management System</span>
            <Row className="d-flex justify-content-center">
              <img className="svg-icons" src={html} alt="html5" />
              <img className="svg-icons" src={css} alt="css" />
              <img className="svg-icons" src={bstrap} alt="bootstrap4" />
              <img
                className="svg-icons"
                src={javascript}
                alt="javascript(ES6)"
              />
              <img className="svg-icons" src={flask} alt="flask" />
            </Row>
            <div className="mCard-content">
              An API for Student Life Cycle Management, which fetches details
              like attendance, grades and the weekly timetable for the students
              and also includes a Frontend Website displaying the results.
            </div>

            <div className="mCard-action iconsContainer">
              <a
                href="https://github.com/L3thal14/slcm-api-v1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon is-large">
                  <i className="fab fa-github fa-lg colorBlack"></i>
                </span>
              </a>
            </div>
          </div>
        </Col>
        <Col>
          <div className="mCard cardOverride">
            <div className="mCard-image" style={{ display: "flex" }}>
              <div
                style={{
                  flex: "1 1 auto",
                  minWidth: 400,
                  minHeight: 400,
                  backgroundImage: `url(${discordbot})`,
                  backgroundPosition: "center",
                  backgroundSize: "100% 100%",
                  backgroundRepeat: "no-repeat",
                }}
              />
            </div>
            <span className="mCard-title">Discord Mania</span>
            <Row className="d-flex justify-content-center">
              <img className="svg-icons" src={python} alt="python" />
              <img className="svg-icons" src={discordbot} alt="discord" />
            </Row>
            <div className="mCard-content">
              A collection of discord bots for leveraging various
              functionalities from scraping sites for information regarding
              upcoming Hackathons to comparing the price of products across
              various e-commerce platforms.
            </div>

            <div className="mCard-action iconsContainer">
              <a
                href="https://github.com/L3thal14/Discord-Mania"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon is-large">
                  <i className="fab fa-github fa-lg colorBlack"></i>
                </span>
              </a>
            </div>
          </div>
        </Col>
        <Col>
          <div className="mCard cardOverride">
            <div className="mCard-image" style={{ display: "flex" }}>
              <div
                style={{
                  flex: "1 1 auto",
                  minWidth: 400,
                  minHeight: 400,
                  backgroundImage: `url(${zeoco})`,
                  backgroundPosition: "center",
                  backgroundSize: "100% 100%",
                  backgroundRepeat: "no-repeat",
                }}
              />
            </div>
            <span className="mCard-title">Zeoco</span>
            <Row className="d-flex justify-content-center">
              <img className="svg-icons" src={flutter} alt="flutter" />
              <img className="svg-icons" src={firebase} alt="firebase" />
              <img className="svg-icons" src={flask} alt="flask" />
            </Row>
            <div className="mCard-content">
              A full Stack App to track a user’s daily carbon footprint produce
              related to various activities ranging from electricity consumed to
              amount of fuel used during travel with a weekly reward based
              system.
            </div>

            <div className="mCard-action iconsContainer">
              <a
                href="https://github.com/L3thal14/Zeoco"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon is-large">
                  <i className="fab fa-github fa-lg colorBlack"></i>
                </span>
              </a>
              <a
                href="https://arxiv.org/abs/2102.06185"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon is-large">
                  <i className="fas fa-laptop-code fa-lg colorBlack"></i>
                </span>
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};
export default ProjectCard;
