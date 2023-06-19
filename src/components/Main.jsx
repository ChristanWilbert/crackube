import React, { Component } from "react";
import Header from "./Header";
import "../styles/header.css";
import List from "./Filter";
import Cards from "./Cards";
import "../styles/cards.css";
import Banner from "./Banner";
class Main extends Component {
  render() {
    return (
      <>
        <Header />
        <Banner />
        <List />
        <Cards />
      </>
    );
  }
}

export default Main;
