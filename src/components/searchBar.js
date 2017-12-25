import React, { Component } from "react";

//react class based component
class SearchBar extends Component {

	constructor(props) {
		super(props); // calling the parent function 

		this.state = {
			term: ''
		}
		                           
	}

	render() {
		return (
			<div className='search-bar'>
				<input
					placeholder="Search"
					onChange={ event => this.setState({ term: event.target.value }) } />
				{/*{this.state.term}*/}
			</div>
		);
		// always use set state to manupilate the state 
	}
}

export default SearchBar;

