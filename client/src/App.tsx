import './App.css';
import Dashboard from './dashboardComponents/Dashboard';
import AddCard from './addCard/Dashboard';
import {getCard} from './service/apiData';
import { createContext, useContext, useState } from 'react';



export default function App() {
	let cenario = 0;
	const cenarioContext =  createContext(cenario+1);
	console.log(cenarioContext);
	console.log(cenarioContext);

	return(
		<>
			<Dashboard/>

			
			<AddCard/>
		</>
	);
}