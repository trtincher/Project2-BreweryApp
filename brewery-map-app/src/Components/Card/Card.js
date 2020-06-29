import React, { useContext, useState } from 'react';
import './Card.css';
import { DataContext } from '../App/App';

function Card({ brewery }) {
	const dataContext = useContext(DataContext);
	const [ favStatus, setFavStatus ] = useState(false);
	const [ visitedStatus, setVisitedStatus ] = useState(false);
	const [ wishlistStatus, setWishlistStatus ] = useState(false);
	//console.log('dataContext', dataContext);

	const handleFaveToggle = (brewery) => {
		const favesArray = [ ...dataContext.faves ];
		const breweryIndex = favesArray.indexOf(brewery);
		console.log('handleFaveToggle brewery', brewery);

		breweryIndex === -1 ? favesArray.push(brewery) : favesArray.splice(breweryIndex, 1);

		setFavStatus(!favStatus);

		dataContext.setFaves(favesArray);
	};

	const handleWishlistToggle = (brewery) => {
		const wishlistArray = [ ...dataContext.wishlist ];
		const breweryIndex = wishlistArray.indexOf(brewery);

		breweryIndex === -1 ? wishlistArray.push(brewery) : wishlistArray.splice(breweryIndex, 1);

		setWishlistStatus(!wishlistStatus);

		dataContext.setWishlist(wishlistArray);
	};

	const handleVisitedToggle = (brewery) => {
		const visitedArray = [ ...dataContext.visited ];
		const breweryIndex = visitedArray.indexOf(brewery);

		breweryIndex === -1 ? visitedArray.push(brewery) : visitedArray.splice(breweryIndex, 1);

		setVisitedStatus(!visitedStatus);

		dataContext.setVisited(visitedArray);
	};

	return (
		<div key={brewery.id} className="Card">
			<h3>{brewery.name}</h3>
			<form>
				<div className="toggleDiv">
					<i
						className={`${favStatus ? 'fas' : 'far'} fa-heart`}
						id="fav-icon"
						onClick={() => handleFaveToggle(brewery)}
					/>
					<i
						className={`${wishlistStatus ? 'fas' : 'far'} fa-star`}
						id="fav-icon"
						onClick={() => handleWishlistToggle(brewery)}
					/>
					<i
						className={`${visitedStatus ? 'fas' : 'far'} fa-check-circle`}
						id="fav-icon"
						onClick={() => handleVisitedToggle(brewery)}
					/>
				</div>
				<div className="lableDiv">
					<span>Favorites</span>
					<span>Wishlist</span>
					<span>Visited</span>
				</div>
			</form>
		</div>
	);
}

export default Card;
