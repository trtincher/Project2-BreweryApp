import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../App/App';
import Card from 'react-bootstrap/Card';
import './BrewCard.css';

function BrewCard({ brewery, inFaves, inWishlist, inVisited }) {
	const dataContext = useContext(DataContext);
	//console.log('dataContext', dataContext);
	//console.log('brewery Card', brewery);
	//console.log('dataContext.faves in Card', dataContext.faves);
	const [ favFilter, setFaveFilter ] = useState('far');
	console.log('favFilter :', favFilter);
	const [ wishFilter, setWishFilter ] = useState('far');
	const [ visitFilter, setVisitFilter ] = useState('far');

	const handleFaveToggle = (brewery) => {
		const favesArray = [ ...dataContext.faves ];
		const breweryIndex = favesArray.findIndex((el) => el.name === brewery.name);

		if (breweryIndex === -1) {
			favesArray.push(brewery);
			setFaveFilter('fas');
		} else {
			favesArray.splice(breweryIndex, 1);
			setFaveFilter('far');
		}

		dataContext.setFaves(favesArray);
	};

	const handleWishlistToggle = (brewery) => {
		const wishlistArray = [ ...dataContext.wishlist ];
		const breweryIndex = wishlistArray.findIndex((el) => el.name === brewery.name);

		if (breweryIndex === -1) {
			wishlistArray.push(brewery);
			setWishFilter('fas');
		} else {
			wishlistArray.splice(breweryIndex, 1);
			setWishFilter('far');
		}

		dataContext.setWishlist(wishlistArray);
	};

	const handleVisitedToggle = (brewery) => {
		const visitedArray = [ ...dataContext.visited ];
		const breweryIndex = visitedArray.findIndex((el) => el.name === brewery.name);

		if (breweryIndex === -1) {
			visitedArray.push(brewery);
			setVisitFilter('fas');
		} else {
			visitedArray.splice(breweryIndex, 1);
			setVisitFilter('far');
		}

		dataContext.setVisited(visitedArray);
	};

	useEffect(() => {
		inFaves === -1 ? setFaveFilter('far') : setFaveFilter('fas');
		inWishlist === -1 ? setWishFilter('far') : setWishFilter('fas');
		inVisited === -1 ? setVisitFilter('far') : setVisitFilter('fas');
	}, []);

	return (
		<Card style={{ width: '18rem' }}>
			<Card.Img
				variant="top"
				src="https://res.cloudinary.com/dugmhtotn/image/upload/v1593620446/roberta-keiko-kitahara-santana-RfL3l-I1zhc-unsplash_lb639l.jpg"
			/>
			<Card.Body>
				<Card.Title>{brewery.name}</Card.Title>
				<div className="toggleDiv">
					<i className={`${favFilter} fa-heart`} id="fav-icon" onClick={() => handleFaveToggle(brewery)} />
					<i
						className={`${wishFilter} fa-star`}
						id="fav-icon"
						onClick={() => handleWishlistToggle(brewery)}
					/>
					<i
						className={`${visitFilter} fa-check-circle`}
						id="fav-icon"
						onClick={() => handleVisitedToggle(brewery)}
					/>
				</div>
			</Card.Body>
		</Card>
	);
}

export default BrewCard;
