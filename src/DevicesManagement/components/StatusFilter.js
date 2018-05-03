import React, { Component } from "react";
import Wrapper from "./StatusFilter.style";

class StatusFilter extends Component {
  onStatusFilterClick(status) {
    this.props.updateSelectedFilter(status);
  }

  render() {
    const { filteredData } = this.props;
    return (
      <Wrapper>
        {Object.keys(filteredData).map((status, index) => {
          let className = "filterOption";
          if (this.props.selectedFilter === status) {
            className += " selected";
          }
          if (index === 0) {
            className += " start";
          }
          if (index === filteredData.length - 1) {
            className += " end";
          }
          return (
            <div
              key={status}
              className={className}
              onClick={() => {
                this.onStatusFilterClick(status);
              }}
            >
              <span>
                {status} ({filteredData[status].length})
              </span>
            </div>
          );
        })}
      </Wrapper>
    );
  }
}

export default StatusFilter;
