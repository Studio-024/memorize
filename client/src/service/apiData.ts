import Axios from 'axios';
import { ICard } from '../domain/entities/Card';

export const getCard = async() => {
	try {
		const {data} = await Axios.get<ICard[]>('http://localhost:3001/card');

		return data;
	}
	
	catch (error) {
		console.error(error);
		throw new Error(error);
	}
}

export const saveCard = async(question:string, response:string) => {
	try {
		const res = await Axios.post<ICard[]>('http://localhost:3001/card', {
			question: question,
			response: response,
			timeEnd: "2021-03-15T02:09:34.000Z",
			timeNext: "2021-03-15T02:09:34.000Z"		
		});

		console.log(res);

	}
	
	catch (error) {
		console.error(error);
		throw new Error(error);
	}
}