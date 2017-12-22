import React, { Component } from "react";

//react class based component
class SearchBar extends Component {
	render() {
		return <input onChange={this.onInputChange} />;
	}

	onInputChange() {
		
	}
}

export default SearchBar;

