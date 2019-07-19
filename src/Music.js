import React from 'react';
import Lottie from 'react-lottie';
import MusicBody from './MusicBody';
import { bounce } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import musicbg from './musicbg.mp4';

export default function Music() {
	const styles = {
		bounce: {
			animation: 'x 1s',
			animationName: Radium.keyframes(bounce, 'bounce')
		}
	};
	return (
		<ul class="flex-container">
  <li class="flex-item">1</li>
  <li class="flex-item">2</li>
  <li class="flex-item">3</li>
  <li class="flex-item">4</li>
  <li class="flex-item">5</li>
  <li class="flex-item">6</li>
</ul>
	);
}
