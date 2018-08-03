import React, { Component } from 'react';
import logo from './logo.svg';
import './main.sass';
import Header from "./components/header";
import Navbar from "./components/navbar";
import ImageCarousel from "./components/imageCarousel";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
          <Navbar/>
          <ImageCarousel/>
      </div>
    );
  }
}

export default App;
