import React, { useState, createContext } from 'react';
import { Route } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Landing from '../Landing/Landing';
import Collections from '../Collections/Collections';
import Search from '../Search/Search';
import './App.css';

export const DataContext = createContext();

function App() {
	const [ breweryData, setBreweryData ] = useState([]);
	const [ faves, setFaves ] = useState([]);
	const [ wishlist, setWishlist ] = useState([]);
	const [ visited, setVisited ] = useState([]);
	const [ filter, setFilter ] = useState([]);
	const [ city, setCity ] = useState('');

	console.log('App breweryData', breweryData);
	console.log('App faves', faves);
	console.log('App wishlist', wishlist);
	console.log('App visited', visited);
	console.log('filter', filter);

	return (
		<div className="App">
			<DataContext.Provider
				value={{
					faves,
					setFaves,
					wishlist,
					setWishlist,
					visited,
					setVisited,
					breweryData,
					setBreweryData,
					filter,
					setFilter,
					city,
					setCity
				}}
			>
				<NavBar />
				<Route exact path="/" component={Landing} />
				<Route exact path="/collections" component={Collections} />
			</DataContext.Provider>
		</div>
	);
}

export default App;
