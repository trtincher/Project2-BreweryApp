import React from 'react';
import Map from '../Map/Map';
import About from '../About/About';

function Landing() {
	return (
		<div className="Landing">
			<h1>Your Breweries</h1>
			<Map />
			<About />
		</div>
	);
}

export default Landing;
