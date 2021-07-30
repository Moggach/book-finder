import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";

export class navbar extends Component {
  render() {
    return (
      <div
        className="navbar">
        <FontAwesomeIcon
          className="icons"
          icon={faBookOpen}
          size="4x"
          color="#8A2BE2"
        />
        <div className="logo-text">
          BookFinder
        </div>
      </div>
    );
  }
}

export default navbar;
