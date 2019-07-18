import React from 'react';
import Lottie from 'react-lottie';
import { bounce } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import musicbg from './musicbg.mp4';

export default function Music() {
	return (
		<header class="v-header container">
			<div class="fullscreen-video-wrap">
				<div class="fullscreen-video-wrap">
					<video playsInline src={musicbg} class="videoInsert" autoplay="true" loop="true" muted="true">
						{' '}
					</video>
				</div>
			</div>
			<div class="header-overlay" />
			<div class="header-content" />
		</header>
	);
}
