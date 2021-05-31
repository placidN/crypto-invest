import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import './css/Style.css';
import './css/FormStyle.css';

// Components
import SignUp from './components/SignUp';
import Login from './components/Login';
import Reset from './components/Reset';
import Validate from './components/Validate';
import Dashboard from './components/Dashboard';

function App() {
	return (
		<Router >
			<Switch >
				<Route path="/reset" component={ Reset } />
				<Route path="/validate/:client" component={ Validate } />
				<Route path="/signup/:referrer" component={ SignUp } />
				<Route path="/signup" component={ SignUp } />
				<Route path="/dashboard" component={ Dashboard } />
				<Route path="/" component={ Login } />
			</Switch>
		</Router>
	);
}

export default App;
