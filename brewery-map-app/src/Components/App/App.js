import React, { useState, createContext } from 'react';
import { Route } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Landing from '../Landing/Landing';
import Collections from '../Collections/Collections';
import Search from '../Search/Search';
import './App.css';

export const DataContext = createContext();

function App() {
	const [ faves, setFaves ] = useState([]);

	console.log('faves', faves);

	return (
		<div className="App">
			<DataContext.Provider value={{ faves, setFaves }}>
				<NavBar />
				<Route exact path="/" component={Landing} />
				<Route exact path="/collections" component={Collections} />
				<Route exact path="/search" component={Search} />
			</DataContext.Provider>
		</div>
	);
}

export default App;
