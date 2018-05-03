import React, { Component } from "react";
import styled from "styled-components";

class SearchInput extends Component {
  onInputChange(term) {
    this.props.updateSearchTerm(term);
  }

  render() {
    return (
      <div className={this.props.className}>
        <input
          type="text"
          value={this.props.term}
          onChange={event => this.onInputChange(event.target.value)}
          placeholder="Search"
        />
      </div>
    );
  }
}

const StyledSearchInput = styled(SearchInput)`
border: none;
height: 75%;

  input {
    width: 100%
    height: 100%
    border: 1px solid #d7dbdd;
    padding-left: 0.35rem;
    font-size: 0.75em;
  }

  input:focus {
    border-color: black;
    outline: none;
  }

  input::-webkit-input-placeholder { /* Chrome */
    color: #d7dbdd;
  }
`;

export default StyledSearchInput;
