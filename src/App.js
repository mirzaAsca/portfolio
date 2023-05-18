// src/App.js
import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Biz from "./components/Biz";
import Tech from "./components/Tech";
import Contacts from "./components/Contacts";
import Loading from "./components/Loading";
import $ from "jquery";
import { loadHome } from "./components/loadComponents";

class App extends React.Component {
  state = {
    isLoading: true,
    Home: null,
  };

  componentDidMount() {
    Promise.all([loadHome()]).then(([Home]) => {
      this.setState({ Home, isLoading: false });
    });
  }

  scrollToAbout = () => {
    const aboutSection = $("#about-section");
    $("html, body").animate(
      {
        scrollTop: aboutSection.offset().top,
      },
      2000
    );
  };

  render() {
    const { isLoading, Home } = this.state;
    const HomeComponent = Home ? (
      <Home scrollToAbout={this.scrollToAbout} />
    ) : null;

    if (isLoading) {
      return <Loading />;
    } else {
      return (
        <div className="App">
          <Navbar />
          {HomeComponent}
          <About />
          <Projects />
          <Tech />
          <Biz />
          <Contacts />
        </div>
      );
    }
  }
}

export default App;
