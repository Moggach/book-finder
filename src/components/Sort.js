import React from "react";
import { render } from "react-dom";
import Datasort from "react-data-sort";

class MyTable extends React.Component {
  state = {
    sortBy: "name",
    direction: "asc",
   
  };
  setSortBy = sortBy => {
    this.setState({ sortBy });
  };
  toggleDirection = () => {
    this.setState({
      direction: this.state.direction === "asc" ? "desc" : "asc"
    });
  }

