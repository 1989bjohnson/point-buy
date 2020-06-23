import React, { Component, useState } from "react";
import "./App.css";
import "./css/main.css";
import PointBuy from "./components/PointBuy";
import Header from "./components/Header";
import Footer from "./components/Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      light: true,
    };
  }
  render() {
    const toggleTheme = () => {
      this.setState({
        light: !this.state.light,
      });
    };
    return (
      <div className={`App ${this.state.light ? "light" : "dark"}`}>
        <Header />
        {/* <button onClick={toggleTheme}>
          {`${this.state.light ? "light" : "dark"} theme`}
        </button> */}
        <PointBuy />
        <Footer />
      </div>
    );
  }
}

export default App;
