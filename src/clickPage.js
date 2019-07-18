import { render } from 'react-dom';
import React, { useState, useCallback } from 'react';
import { useTransition, animated } from 'react-spring';
import './style.css';
import Music from './Music';

const pages = [
	({ style }) => (
		<animated.div style={{ ...style, color: 'black' }}>
			<Music />
		</animated.div>
	),

	({ style }) => <animated.div style={{ ...style, height: '100%', color: 'black' }}>B</animated.div>,

	({ style }) => (
		<animated.div style={{ ...style, color: 'black', background: 'red' }}>
			Position the navbar at the top of the page{' '}
		</animated.div>
	)
];

export default function Click() {
	const [ index, set ] = useState(0);
	const onClick = useCallback(() => set((state) => (state + 1) % 3), []);
	const transitions = useTransition(index, (p) => p, {
		from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
		enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
		leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' }
	});
	return (
		<div className="simple-trans-main" onClick={onClick}>
			{transitions.map(({ item, props, key }) => {
				const Page = pages[item];
				return <Page key={key} style={props} />;
			})}
		</div>
	);
}

render(<Click />, document.getElementById('root'));
