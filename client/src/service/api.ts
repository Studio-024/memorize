import Axios from 'axios'
import { ICard } from '../domain/entities/Card'

export const getCard = async() => {
	try {
		const {data} = await Axios.get<ICard[]>('http://localhost:3001/card')

		return data
	}
	
	catch (error) {
		console.error(error)
		throw new Error(error)
	}
}

export const saveCard = async(front:string, back:string) => {
	try {
		const res = await Axios.post<ICard[]>('http://localhost:3001/card', {
			front: front,
			back: back
		})
	}
	
	catch (error) {
		console.log(error)
		throw new Error(error)
	}
}
