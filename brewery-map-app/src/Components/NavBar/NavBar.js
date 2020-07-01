import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const NavMain = styled.nav`
	display: flex;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 10;
	.up {
		top: -200vh;
		transition: 300ms ease;
	}
	.dropdown {
		display: block;
		top: 0;
		transition: 300ms ease;
	}
`;

const NavLinks = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	background: grey;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	width: 100%;
	top: 40px;
	a {
		text-decoration: none;
		color: white;
		margin: 0 1rem;
		padding: 1rem 3rem;
		font-size: 2rem;
		display: flex;
	}
`;

const Burger = styled.button`
	background-color: transparent;
	display: none;
	margin: 1rem;
	outline: 0;
	border: 0;
	span {
		height: 2px;
		width: 20px;
		margin: 4px 0;
		background-color: black;
		display: block;
	}
`;

function NavBar() {
	const [ open, setOpen ] = useState(false);

	const toggle = () => {
		console.log('toggle clicked');
		setOpen(!open);
		console.log('open =', open);
	};

	return (
		<div className="NavBar">
			<NavMain>
				<Burger className={open ? '' : 'dropdown'} onClick={toggle}>
					<span />
					<span />
					<span />
				</Burger>
				<NavLinks className={open ? 'dropdown' : 'up'} onClick={toggle}>
					<Link to="/">Map</Link>
					<Link to="/collections">Collections</Link>
					<Link to="/search">Search</Link>
				</NavLinks>
			</NavMain>
		</div>
	);
}

export default NavBar;
