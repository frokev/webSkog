import React, { Component } from "react";
import "./_navbar.scss";

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <div className="content">
          <div className="left">
            <p>Aktiviteter</p>
            <p>Kontakt</p>
            <p>Bilder</p>
            <p>Siste Nyheter</p>
          </div>
          <div className="right">
            <p>Logg inn</p>
            <p>Booking</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
