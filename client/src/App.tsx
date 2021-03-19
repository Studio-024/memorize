import React from 'react';
import './App.css';
import Grids from './components/grids';
import {getCard} from './service/api-data';

export default function App() {
  return (
	<>
	<div className="App">
    </div>
		<Grids quest="oi" response="oi"/>
		<button onClick={getCard}>Button</button>			
	</>
  );
}
