import React, { useContext, useEffect, useState } from 'react';
import './Card.css';
import { DataContext } from '../App/App';

function Card({ brewery, inFaves }) {
	const dataContext = useContext(DataContext);
	const [favFilter, setFave] = useState('far');

	// let favFilter = dataContext.faves.find((element) => element.name === brewery.name) === -1 ? 'fas' : 'far';
	let wishFilter = dataContext.wishlist.indexOf(brewery) === -1 ? 'far' : 'fas';
	let visitFilter = dataContext.visited.indexOf(brewery) === -1 ? 'far' : 'fas';

	const handleFaveToggle = async (brewery) => {
		const favesArray = [...dataContext.faves];
		const breweryIndex = favesArray.findIndex((element) => {
			return element.name === brewery.name
		});

		if (breweryIndex === -1) {
			favesArray.push(brewery)
			setFave('fas')
		} else {
			favesArray.splice(breweryIndex, 1);
			setFave('far')
		}


		await dataContext.setFaves(favesArray);
	};

	const handleWishlistToggle = (brewery) => {
		const wishlistArray = [...dataContext.wishlist];
		const breweryIndex = wishlistArray.indexOf(brewery);

		breweryIndex === -1 ? wishlistArray.push(brewery) : wishlistArray.splice(breweryIndex, 1);

		dataContext.setWishlist(wishlistArray);
	};

	const handleVisitedToggle = (brewery) => {
		const visitedArray = [...dataContext.visited];
		const breweryIndex = visitedArray.indexOf(brewery);

		breweryIndex === -1 ? visitedArray.push(brewery) : visitedArray.splice(breweryIndex, 1);

		dataContext.setVisited(visitedArray);
	};

	useEffect(() => {
		!!inFaves ? setFave('far') : setFave('fas')
	})

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
