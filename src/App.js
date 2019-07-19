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
  <article class="main">
    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>  
  </article>
  <aside class="aside aside-1">Aside 1</aside>
  <aside class="aside aside-2">Aside 2</aside>
  <footer class="footer">Footer</footer>
</div>
	);
}

export default App;
