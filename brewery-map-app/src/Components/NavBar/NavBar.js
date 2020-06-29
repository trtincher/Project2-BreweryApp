import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
	return (
		<div className="NavBar">
			<nav>
				<Link to="/">Map</Link>
				<Link to="/collections">Collections</Link>
				<Link to="/search">Search</Link>
			</nav>
		</div>
	);
}

export default NavBar;
