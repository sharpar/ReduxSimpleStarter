import React, { Component } from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/searchBar';

const API_KEY = 'AIzaSyC-SOc0Fz13PNhOsvIOyfAF7BLBdmSsV2c';


class App extends Component {

	constructor(props) {
		super(props);

		this.state = { videos: [] };

		YTSearch({ key: API_KEY, term: 'lakers' }, videos => {
			this.setState({ videos });
		});
	}

	render() {
		return <div>
			<SearchBar/>
		</div>;
	}
}

// take this component's html and put it on the page
// (in the DOM)
ReactDom.render(<App/>, document.querySelector('.container'));
