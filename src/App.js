import React from 'react';
import logo from './logo.svg';
import Home from './Home.js';
import ClickPage from './clickPage';
import Music from './Music';
import   { BrowserRouter as Router, Route, Link } from "react-router-dom";
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

  <div class="img-container">
      <img class="item" src="https://source.unsplash.com/random/320x240" alt="Example image"/> <div class="centered"><h1>MUSIC</h1></div> 
</div>

  <div class="img-container">

      <img class="item" src="https://source.unsplash.com/random/320x240" alt="Example image"/><div class="centered"><h1>FILM</h1></div> 
</div>

<div class="img-container">
      <img class="item" src="https://source.unsplash.com/random/320x240" alt="Example image"/><div class="centered"><h1>MANAGEMENT</h1></div> 
</div>

<div class="img-container">
      <img class="item" src="https://source.unsplash.com/random/320x240" alt="Example image"/> <div class="centered"><h1>MARKETING</h1></div> 
</div>
    
   </div>


{/* <Route exact path="/" component={Home} />
<Route path="/music" component={About} />
<Route path="/film" component={Topics} />
<Route path="/marketing" component={Topics} />
<Route path="/managment" component={Topics} /> */}
</div>


	);
}

export default App;
