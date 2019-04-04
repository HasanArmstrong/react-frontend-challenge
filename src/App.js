import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';

class App extends Component {
	constructor() {
		super();
		this.state ={
			output: ''
		}
	}

	handleChange = (e) => {
	this.setState({
		[e.target.name]: e.target.value.split("").reverse()
	}), () => console.log(this.state)
	}
	render() {
		return (
			<div className="App">
				<h1>INPUT</h1>
				<input  onChange={this.handleChange} placeholder="Write something here" name="output"/>
				<h2>OUTPUT</h2>
				<h1>{this.state.output}</h1>
			</div>
		);
	}
}

export default App;
