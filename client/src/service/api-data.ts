import Axios from 'axios';

export const getCard = async() => {
	try {
		const {data} = await Axios.get('http://localhost:3001/card')
		
		console.log({data}.data[1]);
		console.log("{data}.data", {data}.data); // Retorna uma array 
		//console.log("{data}", {data}) 		// Retorna um objeto
	}
	catch (error) {
		console.error(error);
	}
}
