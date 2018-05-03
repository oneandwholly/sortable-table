import React, { Component } from "react";

class SortableTable extends Component {
  onSortOrderClick(columnName, order) {
    this.props.updateSortOrder(columnName, order);
  }
  render() {
    console.log(this.props.sortOrder);
    const columnNames = [
      "image",
      "status",
      "name",
      "version",
      "model",
      "ipAddress"
    ];

    const compareIpAddress = (a, b) => {
      let lower, higher;
      if (this.props.sortOrder[1] === "ASC") {
        lower = a[this.props.sortOrder[0]];
        higher = b[this.props.sortOrder[0]];
      } else {
        higher = a[this.props.sortOrder[0]];
        lower = b[this.props.sortOrder[0]];
      }

      lower = lower.split(".");
      higher = higher.split(".");
      for (var i = 0; i < lower.length; i++) {
        if ((lower[i] = parseInt(lower[i])) < (higher[i] = parseInt(higher[i])))
          return -1;
        else if (lower[i] > higher[i]) return 1;
      }
      return 0;
    };

    const compare = (a, b) => {
      let lower, higher;
      if (typeof a[this.props.sortOrder[0]] === "string") {
        if (this.props.sortOrder[1] === "ASC") {
          lower = a[this.props.sortOrder[0]].toLowerCase();
          higher = b[this.props.sortOrder[0]].toLowerCase();
        } else {
          higher = a[this.props.sortOrder[0]].toLowerCase();
          lower = b[this.props.sortOrder[0]].toLowerCase();
        }
      } else if (typeof a[this.props.sortOrder[0]] === "number") {
        if (this.props.sortOrder[1] === "ASC") {
          lower = a[this.props.sortOrder[0]];
          higher = b[this.props.sortOrder[0]];
        } else {
          higher = a[this.props.sortOrder[0]];
          lower = b[this.props.sortOrder[0]];
        }
      }
      if (lower < higher) {
        return -1;
      }
      if (lower > higher) {
        return 1;
      }
      // a must be equal to b
      return 0;
    };
    let tableData = this.props.tableData;

    if (this.props.sortOrder[0] === "ipAddress") {
      tableData = tableData.sort(compareIpAddress);
    } else {
      tableData = tableData.sort(compare);
    }
    return (
      <table>
        <thead>
          <tr>
            {columnNames.map(cn => {
              if (this.props.sortOrder[0] === cn) {
                if (this.props.sortOrder[1] === "ASC") {
                  return (
                    <th
                      key={cn}
                      onClick={() => {
                        this.onSortOrderClick(cn, "DESC");
                      }}
                    >
                      {cn} ↑
                    </th>
                  );
                } else {
                  return (
                    <th
                      key={cn}
                      onClick={() => {
                        this.onSortOrderClick(cn, "ASC");
                      }}
                    >
                      {cn} ↓
                    </th>
                  );
                }
              }
              return (
                <th
                  key={cn}
                  onClick={() => {
                    this.onSortOrderClick(cn, "ASC");
                  }}
                >
                  {cn}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={row.ipAddress + index}>
              <td>{row.imageUrl}</td>
              <td>{row.status}</td>
              <td>{row.name}</td>
              <td>{row.version}</td>
              <td>{row.model}</td>
              <td>{row.ipAddress}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default SortableTable;
