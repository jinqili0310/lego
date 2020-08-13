import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/home';

function App() {
	return (
		<div className="navRoute">
			<BrowserRouter>
				<Switch>
					<Route path="/" exact component={Home} />
					<Redirect to="/" />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
