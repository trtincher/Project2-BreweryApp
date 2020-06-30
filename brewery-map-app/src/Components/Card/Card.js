import React, { useContext, useEffect, useState } from 'react';
import './Card.css';
import { DataContext } from '../App/App';

function Card({ brewery, inFaves, inWishlist, inVisited }) {
	const dataContext = useContext(DataContext);
	//console.log('dataContext', dataContext);
	//console.log('brewery Card', brewery);
	//console.log('dataContext.faves in Card', dataContext.faves);
	const [ favFilter, setFaveFilter ] = useState('far');
	const [ wishFilter, setWishFilter ] = useState('far');
	const [ visitFilter, setVisitFilter ] = useState('far');

	const handleFaveToggle = () => {
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

	const handleWishlistToggle = () => {
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

	const handleVisitedToggle = () => {
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
		!!inFaves ? setFaveFilter('far') : setFaveFilter('fas');
		!!inWishlist ? setWishFilter('far') : setWishFilter('fas');
		!!inVisited ? setVisitFilter('far') : setVisitFilter('fas');
	});

	return (
		<div className="Card">
			<h3>{brewery.name}</h3>
			<div className="iconDiv">
				<div className="toggleDiv">
					<i className={`${favFilter} fa-heart`} id="fav-icon" onClick={handleFaveToggle} />
					<i className={`${wishFilter} fa-star`} id="fav-icon" onClick={handleWishlistToggle} />
					<i className={`${visitFilter} fa-check-circle`} id="fav-icon" onClick={handleVisitedToggle} />
				</div>
				<div className="lableDiv">
					<span>Favorites</span>
					<span>Wishlist</span>
					<span>Visited</span>
				</div>
			</div>
		</div>
	);
}

export default Card;
