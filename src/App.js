import React, { Component } from "react";
import ReactGA from "react-ga";
import Hero from "./components/hero";
import About from "./components/about";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Experience from "./components/experience";
import Footer from "./components/footer";

class App extends Component {
  componentDidMount() {
    ReactGA.initialize("UA-169824403-1");
  }
  render() {
    return (
      <>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Footer />
      </>
    );
  }
}

export default App;
