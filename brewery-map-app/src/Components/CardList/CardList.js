import React, { useContext } from 'react';
import BrewCard from '../BrewCard/BrewCard';
import { DataContext } from '../App/App';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const BrewCardDiv = styled.div`
	padding: 2rem 0;
	display: flex;
	justify-content: center;
`;

function CardList() {
	const dataContext = useContext(DataContext);
	console.log('CardList.js datacontext', dataContext);

	let breweryArr = [];

	if (dataContext.filter === 'VISITED') {
		breweryArr = dataContext.visited;
	} else if (dataContext.filter === 'WISHLIST') {
		breweryArr = dataContext.wishlist;
	} else if (dataContext.filter === 'FAVES') {
		breweryArr = dataContext.faves;
	} else {
		breweryArr = dataContext.breweryData;
	}

	const breweries = breweryArr.map((brewery) => {
		let inFaves = dataContext.faves.findIndex((el) => el.name === brewery.name);
		let inWishlist = dataContext.wishlist.findIndex((el) => el.name === brewery.name);
		let inVisited = dataContext.visited.findIndex((el) => el.name === brewery.name);

		return (
			<Col md={6} lg={4}>
				<BrewCardDiv>
					<BrewCard
						key={brewery.id}
						brewery={brewery}
						inFaves={inFaves}
						inWishlist={inWishlist}
						inVisited={inVisited}
					/>
				</BrewCardDiv>
			</Col>
		);
	});

	return (
		<Container>
			<Row>{breweries}</Row>
		</Container>
	);
}

export default CardList;
