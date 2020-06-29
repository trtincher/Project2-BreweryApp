import React, { useContext } from 'react';
import './Card.css';
import { DataContext } from '../App/App';

function Card({ brewery }) {
	const dataContext = useContext(DataContext);
	//console.log('dataContext', dataContext);

	const handleFaveToggle = (brewery) => {
		const favesArray = [ ...dataContext.faves ];
		const breweryIndex = favesArray.indexOf(brewery);

		breweryIndex === -1 ? favesArray.push(brewery) : favesArray.splice(breweryIndex, 1);

		dataContext.setFaves(favesArray);
	};

	return (
		<div key={brewery.id} className="Card">
			<h3>{brewery.name}</h3>
			<form>
				<div className="toggleDiv">
					<label className="switch">
						<input type="checkbox" name="filter" value="visited" />
						<span className="slider round" />
					</label>
					<label className="switch">
						<input type="checkbox" name="filter" value="wishlist" />
						<span className="slider round" />
					</label>
					<label className="switch">
						<input
							type="checkbox"
							name="filter"
							value="favorite"
							onClick={() => handleFaveToggle(brewery)}
						/>
						<span className="slider round" />
					</label>
				</div>
				<div className="lableDiv">
					<span>Visited</span>
					<span>Wishlist</span>
					<span>Favorites</span>
				</div>
			</form>
		</div>
	);
}

export default Card;
