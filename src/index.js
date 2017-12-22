import React from 'react';
import ReactDom from 'react-dom';

import SearchBar from './components/searchBar';

const API_KEY = 'AIzaSyC-SOc0Fz13PNhOsvIOyfAF7BLBdmSsV2c';

// new component that produces some html
const App = () => {
	return <div>
		<SearchBar />
	</div>;                        
};

// take this component's html and put it on the page
// (in the DOM)
ReactDom.render(<App/>, document.querySelector('.container'));
