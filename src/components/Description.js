import React, { Component } from "react";
import LinesEllipsis from "react-lines-ellipsis";

class Description extends Component {
  render() {
    return (
      <LinesEllipsis
        text={this.props.ReadMore}
        maxLine="10"
        ellipsis="..."
        trimRight
        basedOn="words"
      />
    );
  }
}

export default Description;