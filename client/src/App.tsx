import React from 'react';
import './App.css';
import Dashboard from './dashboardComponents/Dashboard';
import {getCard} from './service/api-data';

export default function App() {

	return(
		<>
			<div className="App">
			</div>
			<Dashboard/>

			<button onClick={getCard}>Button</button>			
		</>
	);
}