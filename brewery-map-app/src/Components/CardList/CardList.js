import React from 'react';
import Card from '../Card/Card';

function CardList({ breweryData }) {
	const breweryArr = breweryData ? breweryData : [];

	const breweries = breweryArr.map((brewery) => <Card brewery={brewery} />);

	return <div className="CardList">{breweries}</div>;
}

export default CardList;
