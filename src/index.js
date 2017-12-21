import React from 'react';
import ReactDom from 'react-dom';

// new component that produces some html
const App = () => {
	return <div>hi!</div>; // jsx right here baby
};

// take this component's html and put it on the page
// (in the DOM)
ReactDom.render(<App/>, document.querySelector('.container'));
