import React, { Component } from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/searchBar';
import VideoList from './components/videoList';

const API_KEY = 'AIzaSyC-SOc0Fz13PNhOsvIOyfAF7BLBdmSsV2c';


class App extends Component {

	constructor(props) {
		super(props);

		this.state = { videos: [] };

		YTSearch({ key: API_KEY, term: 'nba on tnt' }, videos => {
			console.log(videos);
			this.setState({ videos });
		});
	}

	render() {
		return <div>
			<SearchBar/>
			<VideoList videos={this.state.videos}/>
		</div>;
	}
}

// take this component's html and put it on the page
// (in the DOM)
ReactDom.render(<App/>, document.querySelector('.container'));
