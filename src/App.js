import React from 'react';
import logo from './logo.svg';
import Home from './Home.js';
import ClickPage from './clickPage';
import Music from './Music';
import './App.css';
import Layout from './Layout';

function App() {
	return (
		<div className="App">
			<div className="App-header">
				<Home />
			</div>
			<div className="App-body">
				<ClickPage />
			</div>
		</div>
	);
}

export default App;
