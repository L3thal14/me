import React from "react";
import {
  Timeline,
  TextEvent,
  Events,
  themes,
  createTheme,
} from "@merc/react-timeline";
import "./experience.css";
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
    textAlign: "center",
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
  textAtom: {
    textAlign: "left",
  },
});
const Experience = () => {
  return (
    <div id="experience" className="about">
      <h1 className="pt-3 text-center font-details-b pb-3 project-text">
        Experience
      </h1>
      <Timeline theme={customTheme} opts={{ layout: "alt-evts-inline-date" }}>
        <Events>
          <TextEvent
            date="May 2021 - Present"
            text="**Global Cybersecurity Institute (Rochester Institute of Technology) - Cybersecurity Visiting Researcher**"
          />
          <TextEvent
            date="May 2021 - Present"
            text="**C3i Center, IIT Kanpur - Vulnerability Assessment and Penetration Testing(VAPT) Intern** <br/>
             "
          />
          <TextEvent
            date="March 2021 - May 2021"
            text="** Information Sharing and Analysis Center(ISAC) - Research Intern**"
          />
          <TextEvent
            date="February 2021 - May 2021"
            text="** Crime Free Bharat,National Technical Research Development Committee, NTRDC, India - Web Application Security Intern**"
          />
          <TextEvent
            date="June 2019 - July 2019"
            text="** i3indya Cyber Solutions - Cyber Security Intern**"
          />
          <TextEvent
            date="June 2018 - December 2018"
            text="** LookAtHer Org. - Co-Founder and Web Developer**"
          />
        </Events>
      </Timeline>
    </div>
  );
};

export default Experience;
