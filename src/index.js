import _ from 'lodash';
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/searchBar';
import VideoList from './components/videoList';
import VideoDetail from './components/videoDetail';

const API_KEY = 'AIzaSyC-SOc0Fz13PNhOsvIOyfAF7BLBdmSsV2c';


class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			videos: [],
			selectedVideo: null
		};

		this.videoSearch('lonzo ingram');

	}

	videoSearch(term) {
		YTSearch({ key: API_KEY, term }, videos => {
			this.setState({
				videos,
				selectedVideo: videos[0]
			});
		});
	}

	render() {

		const videoSearch = _.debounce(term => {
			this.videoSearch(term)
		}, 300);

		return (
			<div>
				<SearchBar
					onSearchTermChange={ videoSearch }/>
				<VideoDetail
					video={ this.state.selectedVideo }/>
				<VideoList
					onVideoSelect={ selectedVideo => this.setState({ selectedVideo }) }
					videos={ this.state.videos }/>
			</div>
		);
	}
}

// take this component's html and put it on the page
// (in the DOM)
ReactDom.render(<App/>, document.querySelector('.container'));
