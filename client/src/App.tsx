import React from 'react';
import './App.css';
import Grids from './components/grids';
import getCard from './service/api-data';

function App() {
  return (
	<>
	<div className="App">
    </div>
		<Grids quest="oi" response="oi"/>
		<button onClick={getCard}>fdgdf</button>
	</>
  );
}

export default App;
