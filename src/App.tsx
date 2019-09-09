import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import { AppState, appReducer, AppAction } from './App.reducer';
import Auth from './Auth/Auth';
import Hero from './Hero/Hero';
import Main from './Main/Main';
import ReachPeopleInfo from './ReachPeopleInfo/ReachPeopleInfo';
import Prices from './Prices/Prices';
import FAQ from './FAQ/FAQ';
import Footer from './Footer/Footer';

import AppStyles from './App.module.scss';

const App: React.FC = (): JSX.Element => {
	const [ state, dispatch ]: [AppState, React.Dispatch<AppAction>] = React.useReducer(appReducer, {
		searchTerm: '',
		searchTermChanged: false
	});

	return (
		<Router>
			<section className={AppStyles.app}>
				<header className={AppStyles.appHeader}>
					<nav className="navbar is-cyan is-bold">
						<div className="navbar-menu">
							<Link className="navbar-item" to="/">
								<strong>Inicio</strong>
							</Link>
							<Link className="navbar-item" to="/reachpeople">
								<strong>¿Qué es Reach People?</strong>
							</Link>
							<Link className="navbar-item" to="/costos">
								<strong>Costos</strong>
							</Link>
							<Link className="navbar-item" to="/faq">
								<strong>FAQ</strong>
							</Link>
						</div>
						<div className="navbar-end">
							<div className="navbar-item">
								<Auth />
							</div>
						</div>
					</nav>
					<Hero dispatch={dispatch} />
				</header>
				<Switch>
					<Route
						exact
						path="/"
						render={(props) => <Main {...props} updatedSearchTerm={state.searchTerm} />}
					/>
					<Route path="/reachpeople" component={ReachPeopleInfo} />
					<Route path="/costos" component={Prices} />
					<Route path="/faq" component={FAQ} />
				</Switch>
				<Footer />
			</section>
		</Router>
	);
};

export default App;
