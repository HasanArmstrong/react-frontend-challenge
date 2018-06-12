import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to Device Insight</h1>
				</header>
				<div className="App-intro">
					<Form />
				</div>
			</div>
		);
	}
}

export default App;
