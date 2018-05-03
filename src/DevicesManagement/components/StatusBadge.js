import React, { Component } from "react";
import styled from "styled-components";

// accepts 0,1,2,3,4 as props

class StatusBadge extends Component {
  render() {
    let message = "";
    switch (this.props.status) {
      case 0:
        message = "active";
        break;
      case 1:
        message = "disconnected";
        break;
      case 2:
        message = "disabled";
        break;
      case 3:
        message = "unauthorized";
        break;
      case 4:
        message = "unknown";
        break;
      default:
        message = "unknown";
    }
    return <div className={this.props.className}>{message}</div>;
  }
}

const StyledStatusBadge = styled(StatusBadge)`
  display: inline-block;
  position: relative;
  top: -0.3em;
  background-color: transparent;
  font-size: 0.7em;
  font-weight: 800;
  padding: 0.3em 0.6em 0.35em;
  text-transform: uppercase;
  letter-spacing: 0.07143em;
  border-radius: 0.21429rem;
  line-height: 1;
  white-space: nowrap;
  border: 1px solid rgba(0, 0, 0, 0.5);

  color: ${props => {
    switch (props.status) {
      case 0:
        return "#13bb72";
      case 1:
        return "#ff3516";
      case 2:
        return "#f09300";
      case 3:
        return "#00a0df";
      case 4:
        return "#ccc";
    }
  }};

  border-color: ${props => {
    switch (props.status) {
      case 0:
        return "#13bb72";
      case 1:
        return "#ff3516";
      case 2:
        return "#f09300";
      case 3:
        return "#00a0df";
      case 4:
        return "#ccc";
    }
  }};
`;

export default StyledStatusBadge;
