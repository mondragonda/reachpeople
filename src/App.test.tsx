import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
const document = window.document;
it('renders without crashing', () => {
	const div = document.createElement('<section></section>');
	ReactDOM.render(<App />, div);
	ReactDOM.unmountComponentAtNode(div);
});
