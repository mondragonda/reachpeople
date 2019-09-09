import React from 'react';
import './index.scss';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase/app';

const firebaseConfig = {
	apiKey: 'AIzaSyB7k4p7RjmU6NwR42jYF_LJj1b2v-4iVk0',
	authDomain: 'reach-people-57d26.firebaseapp.com',
	databaseURL: 'https://reach-people-57d26.firebaseio.com',
	projectId: 'reach-people-57d26',
	storageBucket: 'reach-people-57d26.appspot.com',
	messagingSenderId: '671659808528',
	appId: '1:671659808528:web:0a02dc4854be83f260f795'
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

export default firebase;
