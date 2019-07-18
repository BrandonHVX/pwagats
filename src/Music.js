import React from 'react';
import Lottie from 'lottie-react-web';
import animation from './data4.json';
import musicbg from './musicbg.mp4';

export default function Music() {
	return (
		<header class="v-header container">
			<div class="fullscreen-video-wrap">
				<div class="fullscreen-video-wrap">
					<video src={musicbg} class="videoInsert" autoplay="true" loop="true" muted="true">
						{' '}
					</video>
				</div>
			</div>
			<div class="header-overlay" />
			<div class="header-content">
				<Lottie
					options={{
						animationData: animation
					}}
				/>
			</div>
		</header>
	);
}
