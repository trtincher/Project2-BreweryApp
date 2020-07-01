import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/Nav';

const LinkDiv = styled.div`
	margin-left: 30rem;
	a {
		color: Black;
		padding: 2rem;
	}
`;

function Header() {
	return (
		<Navbar bg="light" expand="lg" sticky="top">
			<Navbar.Brand href="#home">Brewery mApp</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="justify-content-end">
					<LinkDiv>
						<Link to="/">Map</Link>
						<Link to="/collections">Collections</Link>
						<Link to="/search">Search</Link>
					</LinkDiv>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}

export default Header;
