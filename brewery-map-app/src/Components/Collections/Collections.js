import React, { useContext, useEffect } from 'react';
import CardList from '../CardList/CardList';
import Dropdown from 'react-bootstrap/Dropdown';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import { DataContext } from '../App/App';

function Collections() {
	const dataContext = useContext(DataContext);
	//console.log('dataContext', dataContext);

	useEffect(() => {
		dataContext.setFilter('VISITED');
	}, []);

	const handleFilterClick = (e) => dataContext.setFilter(e.target.innerText);
	console.log('dataContext', dataContext.filter);

	return (
		<div className="Collections">
			<Card>
				<Card.Header>
					<Nav variant="tabs" defaultActiveKey="#first">
						<Nav.Item>
							<Dropdown.Item onClick={handleFilterClick}>VISITED</Dropdown.Item>
						</Nav.Item>
						<Nav.Item>
							<Dropdown.Item onClick={handleFilterClick}>WISHLIST</Dropdown.Item>
						</Nav.Item>
						<Nav.Item>
							<Dropdown.Item onClick={handleFilterClick}>FAVES</Dropdown.Item>
						</Nav.Item>
					</Nav>
				</Card.Header>
				<Card.Body>
					<Card.Title>{dataContext.filter}</Card.Title>
					<Card.Text>
						<CardList />
					</Card.Text>
				</Card.Body>
			</Card>
		</div>
	);
}

export default Collections;
