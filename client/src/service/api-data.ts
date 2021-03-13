import React from 'react';
import Axios from 'axios';

async function getCard() {
	try {
		const {data} = await Axios.get('http://localhost:3001/card')
		Axios.get('http://localhost:3001/card')
	}
	catch (error) {
		console.error(error);
	}
}

export default getCard;