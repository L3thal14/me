import React, { useState, useEffect } from "react";
import MyNavbar from "./components/navbar/navbar";
import MyCarousal from "./components/title-bg/titlebg";
import MyTitleMessage from "./components/title/title";
import About from "./pages/about/about";
import Experience from "./pages/Experience/experience";
import Contact from "./pages/contact/contact";
import Projects from "./components/projects/proj";
import Reveal from "react-reveal/Reveal";
import Fade from "react-reveal/Fade";
import splashscreen from "./assets/splashscreen/splashscreen.gif";
import FooterPanel from "./components/footer/footer.component";
import "./App.css";
const App = () => {
  const [display, setDisplay] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setDisplay(true);
    }, 3000);
  }, []);
  if (display) {
    return (
      <div className="app">
        <MyNavbar />
        <Reveal duration={3500}>
          <MyTitleMessage />
        </Reveal>
        <MyCarousal />
        <Reveal duration={500}>
          <About />
        </Reveal>
        <Fade duration={500}>
          <Experience />
        </Fade>
        <Projects />

        <Fade duration={500}>
          <Contact />
        </Fade>
        <FooterPanel />
      </div>
    );
  } else {
    return (
      <div className="d-block w-100 custom-div splashscreen">
        <img src={splashscreen} alt="" />
      </div>
    );
  }
};

export default App;
