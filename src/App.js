import React from 'react';
import logo from './logo.svg';
import Home from './Home.js';
import ClickPage from './clickPage';
import Music from './Music';
import './App.css';
import './style.css';

import mdglogo from "./mdgblack.png";

function App() {
	return (

<div class="wrapper">
		<header class="header">             

		<Home />
		</header>
   <div class="container">
      <img class="item" src="https://source.unsplash.com/random/320x240" alt="Example image"/>
      <img class="item" src="https://source.unsplash.com/random/320x240" alt="Example image"/>
      <img class="item" src="https://source.unsplash.com/random/320x240" alt="Example image"/>
      <img class="item" src="https://source.unsplash.com/random/320x240" alt="Example image"/> 
    
   </div>

</div>
	);
}

export default App;
