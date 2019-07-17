import React from 'react';
import styled from 'styled-components';
import { FaInstagram, FaBehance, FaDribbble } from 'react-icons/fa';
import mdgblack from './mdgblack.png';

const Wrapper = styled.header`
	align-items: center;
	display: flex;
	padding: 1rem 0 1rem 0;
	position: relative;
	z-index: 1000;
	a {
		color: black;
		text-decoration: none;
		transition: all 0.3s ease-in-out;
		z-index: 100;
		&:hover {
			color: white;
		}
	}
	@media (max-width: '600px') {
		padding: 1rem 0 1rem 0;
		flex-wrap: wrap;
	}
`;

const Nav = styled.nav`
	display: flex;
	flex: 1;
	justify-content: flex-start;
	padding: 2rem;
	a:not(:first-child) {
		margin-left: 1rem;
	}
	@media (max-width: '600px') {
		padding: 0 1rem;
	}
	@media (max-width: '400px') {
		order: 2;
	}
`;

const Name = styled.div`
	display: flex;
	flex: 1;
	justify-content: center;
	a {
		font-size: 1.25rem;
		font-family: 'Merriweather', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
		font-weight: 700;
		&:hover,
		&:focus {
			color: #444;
			text-decoration: none;
		}
	}
	@media (max-width: '400px') {
		order: 1;
		flex: 1 0 100%;
		margin-bottom: 0.75rem;
	}
`;

const SocialMedia = styled.div`
	display: flex;
	flex: 1;
	justify-content: flex-end;
	padding: 2rem;
	a {
		font-size: 1.25rem;
		line-height: 20px;
	}
	a:not(:first-child) {
		margin-left: 1rem;
	}
	@media (max-width: '600px') {
	}
	@media (max-width: '400px') {
		order: 3;
	}
`;

const styles = {
	width: '90px'
};

export default function Home() {
	return (
		<Wrapper>
			<Nav>HELLO</Nav>

			<img src={mdgblack} style={styles} />

			<SocialMedia>
				<a
					href="https://www.instagram.com/lekoarts.de"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Instagram"
				>
					<FaInstagram />
				</a>
				<a
					href="https://www.behance.net/lekoarts"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Behance"
				>
					<FaBehance />
				</a>
				<a href="https://dribbble.com/LeKoArts" target="_blank" rel="noopener noreferrer" aria-label="Dribbble">
					<FaDribbble />
				</a>
			</SocialMedia>
		</Wrapper>
	);
}
