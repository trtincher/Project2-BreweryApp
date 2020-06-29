import React, { useContext, useEffect } from 'react';
import './Card.css';
import { DataContext } from '../App/App';

function Card({ brewery }) {
	const dataContext = useContext(DataContext);
	//console.log('dataContext', dataContext);

	let favFilter = dataContext.faves.indexOf(brewery) === -1 ? 'far' : 'fas';
	let wishFilter = dataContext.wishlist.indexOf(brewery) === -1 ? 'far' : 'fas';
	let visitFilter = dataContext.visited.indexOf(brewery) === -1 ? 'far' : 'fas';

	const handleFaveToggle = (brewery) => {
		const favesArray = [ ...dataContext.faves ];
		const breweryIndex = favesArray.indexOf(brewery);
		console.log('handleFaveToggle brewery', brewery);

		breweryIndex === -1 ? favesArray.push(brewery) : favesArray.splice(breweryIndex, 1);

		dataContext.setFaves(favesArray);
	};

	const handleWishlistToggle = (brewery) => {
		const wishlistArray = [ ...dataContext.wishlist ];
		const breweryIndex = wishlistArray.indexOf(brewery);

		breweryIndex === -1 ? wishlistArray.push(brewery) : wishlistArray.splice(breweryIndex, 1);

		dataContext.setWishlist(wishlistArray);
	};

	const handleVisitedToggle = (brewery) => {
		const visitedArray = [ ...dataContext.visited ];
		const breweryIndex = visitedArray.indexOf(brewery);

		breweryIndex === -1 ? visitedArray.push(brewery) : visitedArray.splice(breweryIndex, 1);

		dataContext.setVisited(visitedArray);
	};

	return (
		<div className="Card">
			<h3>{brewery.name}</h3>
			<div className="iconDiv">
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
