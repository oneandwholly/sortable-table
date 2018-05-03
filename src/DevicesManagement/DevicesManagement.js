import React, { Component } from "react";
import { connect } from "react-redux";
import Wrapper from "./DevicesManagement.style";

import * as actions from "../redux/ui/actions";

import SearchInput from "./components/SearchInput";
import StatusFilter from "./components/StatusFilter";
import SortableTable from "./components/SortableTable";

class DevicesManagement extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { filteredData, selectedFilter, sortOrder } = this.props;
    console.log(
      "what will be fed to SortableTable",
      filteredData[selectedFilter]
    );
    return (
      <Wrapper>
        <div className="filterActionBar">
          <StatusFilter
            filteredData={filteredData}
            selectedFilter={selectedFilter}
            updateSelectedFilter={this.props.updateSelectedFilter}
          />
          <SearchInput
            updateSearchTerm={this.props.updateSearchTerm}
            term={this.props.ui.devices.searchTerm}
          />
        </div>
        <SortableTable
          tableData={filteredData[selectedFilter]}
          sortOrder={sortOrder}
          updateSortOrder={this.props.updateSortOrder}
        />
      </Wrapper>
    );
  }
}

export default connect(({ devices, ui }) => {
  const devicesData = filterBySearchTerm(devices.data, ui.devices.searchTerm);
  const selectedFilter = ui.devices.selectedFilter;
  const sortOrder = ui.devices.sortOrder;

  const filteredData = {
    all: devicesData,
    active: [],
    disconnected: [],
    disabled: [],
    unauthorized: [],
    unknown: []
  };

  devicesData.forEach(data => {
    switch (data.status) {
      case 0:
        filteredData.active.push(data);
        break;
      case 1:
        filteredData.disconnected.push(data);
        break;
      case 2:
        filteredData.disabled.push(data);
        break;
      case 3:
        filteredData.unauthorized.push(data);
        break;
      case -1:
        filteredData.unknown.push(data);
        break;
      default:
        filteredData.unknown.push(data);
    }
  });

  return { devicesData, ui, selectedFilter, sortOrder, filteredData };
}, actions)(DevicesManagement);

function filterBySearchTerm(dataArray, term) {
  return dataArray.filter(deviceData => {
    let searchTermExists = false;
    for (let key in deviceData) {
      if (
        typeof deviceData[key] === "string" &&
        deviceData[key].includes(term)
      ) {
        searchTermExists = true;
        break;
      }
    }
    return searchTermExists;
  });
}
