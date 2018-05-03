import React, { Component } from "react";

class SearchInput extends Component {
  onInputChange(term) {
    this.props.updateSearchTerm(term);
  }

  render() {
    return (
      <input
        type="text"
        value={this.props.term}
        onChange={event => this.onInputChange(event.target.value)}
      />
    );
  }
}

export default SearchInput;
