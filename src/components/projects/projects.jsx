import React from "react";
import {
  Timeline,
  Events,
  UrlButton,
  ImageEvent,
  themes,
  createTheme,
} from "@merc/react-timeline";
import Row from "react-bootstrap/Row";
import "./projects.css";
import zeoco from "../../assets/img/projects/zeocoicon.jpg";
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
import flask from "../../assets/img/projects/flask.svg";
import python from "../../assets/img/projects/python.svg";
import flutter from "../../assets/img/projects/flutter.svg";
import firebase from "../../assets/img/projects/firebase.svg";
const customTheme = createTheme(themes.default, {
  timeline: {
    backgroundColor: "transparent",
    fontSize: "1rem",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,\n  Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  },
  timelineTrack: {
    left: "50%",
    width: "2px",
    height: "100%",
    backgroundColor: "#4FC1B8",
    content: "''",
  },
  marker: {
    backgroundColor: "#4FC1B8",
    border: "2px solid #4FC1B8",
    borderRadius: "50%",
    width: "20px",
    height: "20px",
    zIndex: 100,
  },
  card: {
    borderRadius: "4px",
    backgroundColor: "#2F3C55",
    color: "#4FC1B8",
    padding: "10px",
    boxShadow: "0 4px 6px 0 hsla(0, 0%, 0%, 0.2)",
    width: "100%",
    maxWidth: "560px",
    a: {
      color: "#EC24B5",
    },
  },
  button: {
    fontSize: "14px",
    backgroundColor: "rebeccapurple",
    borderRadius: "4px",
    padding: "6px",
    color: "#fff",
    margin: "10px 5px 5px 0",
    border: "none",
    cursor: "pointer",
  },
  urlButton: {
    fontSize: "14px",
    backgroundColor: "rebeccapurple",
    borderRadius: "4px",
    padding: "6px",
    margin: "10px 5px 5px 0",
    border: "none",
    color: "#fff",
  },
  date: {
    backgroundColor: "#4FC1B8",
    padding: "8px",
    color: "#2F3C55",
    borderRadius: "4px",
    fontWeight: 500,
    fontSize: ".85rem",
  },
  imageAtom: {
    objectFit: "cover",
    overflow: "hidden",
    width: "100%",
    maxHeight: "400px",
  },
  imageCredit: {
    marginTop: "10px",
    fontSize: "1rem",
  },
  imageText: {
    marginBottom: "10px",
    fontSize: "1rem",
  },
  youTubeText: {
    marginBottom: "10px",
    fontSize: "1rem",
  },
  events: {
    padding: "10px",
  },
  event: {
    marginBottom: "20px",
  },
  textAtom: {},
});
const TimeLine = () => {
  return (
    <div id="projects" className="about">
      <h1 className="pt-3 text-center font-details-b pb-3 project-text">
        Projects
      </h1>
      <Timeline theme={customTheme} opts={{ layout: "alt-evts-inline-date" }}>
        <Events>
          <ImageEvent date="01/2021" src={commercify} alt="Commercify-JS">
            <div className="p-2 text-center">
              <strong>
                <p className="heading">
                  Commercify: A Full Stack E-Commerce Application
                </p>
              </strong>
            </div>
            <div className="d-flex justify-content-center flex-column mt-1">
              A fully responsive E-Commerce Application built using React.js and
              Commerce.js with Payment Gateway Integration using Stripe.js{" "}
              <br /> <br />
            </div>
            <Row className="d-flex justify-content-center">
              <img className="svg-icons" src={html} alt="html5" />
              <img className="svg-icons" src={css} alt="css3" />
              <img className="svg-icons" src={reacts} alt="react" />
              <img className="svg-icons" src={commercejs} alt="commerecejs" />
              <img className="svg-icons" src={stripejs} alt="stripejs" />
            </Row>
            <br />
            <div>
              <UrlButton
                href="https://github.com/L3thal14/Commercify-JS"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </UrlButton>
              <UrlButton
                href="https://commercify-js.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </UrlButton>
            </div>
          </ImageEvent>
          <ImageEvent date="10/2020" src={restaurant} alt="Restaurant">
            <div className="p-2 text-center">
              <strong>
                <p className="heading">Restaurant UI App</p>
              </strong>
            </div>
            <div className="d-flex justify-content-center flex-column mt-1">
              A fully responsive restaurant Website UI designed with dynamic
              data served using JSON server. <br /> <br />
            </div>
            <Row className="d-flex justify-content-center">
              <img className="svg-icons" src={html} alt="html5" />
              <img className="svg-icons" src={css} alt="css3" />
              <img className="svg-icons" src={bstrap} alt="bootstrap4" />
              <img className="svg-icons" src={reacts} alt="react" />
            </Row>
            <br />
            <div>
              <UrlButton
                href="https://github.com/L3thal14/Confusion-React"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </UrlButton>
            </div>
          </ImageEvent>
          <ImageEvent date="08/2020" src={slcm} alt="SLCM">
            <div className="p-2 text-center">
              <strong>
                <p className="heading">Student Management System</p>
              </strong>
            </div>
            <div className="d-flex justify-content-center flex-column mt-1">
              An API for Student Life Cycle Management, which fetches details
              like attendance, grades and the weekly timetable for the students
              and also includes a Frontend Website displaying the results.
              <br /> <br />
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
            </div>
            <br />
            <div>
              <UrlButton
                href="https://github.com/L3thal14/student-management-system"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </UrlButton>
              <UrlButton
                href="http://slcmapp.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </UrlButton>
            </div>
          </ImageEvent>
          <ImageEvent date="08/2020" src={discordbot} alt="Discord Bot">
            <div className="p-2 text-center">
              <strong>
                <p className="heading">Discord Mania</p>
              </strong>
            </div>
            <div className="d-flex justify-content-center flex-column mt-1">
              A collection of discord bots for leveraging various
              functionalities from scraping sites for information regarding
              upcoming Hackathons to comparing the price of products across
              various e-commerce platforms.
              <br /> <br />
              <Row className="d-flex justify-content-center">
                <img className="svg-icons" src={python} alt="python" />
                <img className="svg-icons" src={discordbot} alt="discord" />
              </Row>
            </div>
            <br />
            <div>
              <UrlButton
                href="https://github.com/L3thal14/Discord-Mania"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </UrlButton>
            </div>
          </ImageEvent>
          <ImageEvent date="06/2020" src={zeoco} alt="Zeoco">
            <div className="p-2 text-center">
              <strong>
                <p className="heading">Zeoco</p>
              </strong>
            </div>
            <div className="d-flex justify-content-center flex-column mt-1">
              A full Stack App to track a user’s daily carbon footprint produce
              related to various activities ranging from electricity consumed to
              amount of fuel used during travel with a weekly reward based
              system. <br /> <br />
              <Row className="d-flex justify-content-center">
                <img className="svg-icons" src={flutter} alt="flutter" />
                <img className="svg-icons" src={firebase} alt="firebase" />
                <img className="svg-icons" src={flask} alt="flask" />
              </Row>
            </div>
            <br />
            <div>
              <strong>NOT YET OPEN SOURCED</strong>
            </div>
          </ImageEvent>
        </Events>
      </Timeline>
    </div>
  );
};

export default TimeLine;
