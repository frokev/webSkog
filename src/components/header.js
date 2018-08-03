import React, { Component } from "react";
import header from "../images/header.png";
import "./_header.scss";

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <img src={header} />
        <div className="wrapper">
          <p className="title">Skoglund Camping</p>
          <p className="subtitle">
            Bobilplass, Telt og Hytteutleie - Laksefiske, jakt og
            familieaktiviteter i Valldal
          </p>
        </div>
      </div>
    );
  }
}

export default Header;
