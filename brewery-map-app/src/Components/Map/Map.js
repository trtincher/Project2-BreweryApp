import React, { useState, useContext } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import './Map.css';
import { DataContext } from '../App/App';
import testData from './data';

function Map() {
	const [ viewport, setViewport ] = useState({
		latitude: 39.82817,
		longitude: -98.5795,
		width: '100vw',
		height: '100vh',
		zoom: 3.6
	});
	const dataContext = useContext(DataContext);

	dataContext.visited.map((brewery) => {
		console.log('visited brewery', brewery.longitude);
	});

	return (
		<div>
			<ReactMapGL
				{...viewport}
				mapboxApiAccessToken={
					'pk.eyJ1IjoidHJ0aW5jaGVyIiwiYSI6ImNrYzIzbmYzczA4emszMm81dXExODlmbHMifQ.ck6na7AaOXJKl3xfNfOXEQ'
				}
				mapStyle="mapbox://styles/trtincher/ckc3sob4r00rd1ipi2cpy5qgr"
				onViewportChange={(viewport) => {
					setViewport(viewport);
				}}
			>
				{dataContext.visited.map((brewery, i) => (
					<Marker
						key={i}
						latitude={brewery.latitude === null ? 0 : parseInt(brewery.latitude)}
						longitude={brewery.longitude === null ? 0 : parseInt(brewery.longitude)}
					>
						<i class="fas fa-check-circle" />
					</Marker>
				))}
			</ReactMapGL>
		</div>
	);
}

export default Map;
