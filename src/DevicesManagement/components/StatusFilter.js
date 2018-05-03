import React, { Component } from "react";

class StatusFilter extends Component {
  onStatusFilterClick(status) {
    this.props.updateSelectedFilter(status);
  }

  render() {
    const { filteredData } = this.props;
    return (
      <div>
        {Object.keys(filteredData).map(status => {
          let style = {};
          if (this.props.selectedFilter === status) {
            style = { color: "blue" };
          }
          return (
            <div
              key={status}
              style={style}
              onClick={() => {
                this.onStatusFilterClick(status);
              }}
            >
              {status} ({filteredData[status].length})
            </div>
          );
        })}
      </div>
    );
  }
}

export default StatusFilter;
