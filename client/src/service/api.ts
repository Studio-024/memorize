import Axios from 'axios'
import { ICard } from '../domain/entities/Card'
import { ErrorHandler } from '../utils/ErrorHandler'

export const getCard = async() => {
	try {
		const {data} = await Axios.get<ICard[]>('http://localhost:3001/card')

		return data
	}
	
	catch (err) {
		throw new ErrorHandler(err.request.status).Get()
	}
}

export const saveCard = async(front:string, back:string) => {
	try {
		const res = await Axios.post<ICard[]>('http://localhost:3001/card', {
			front: front,
			back: back
		})
	}
	
	catch (err) {
		throw new ErrorHandler(err.request.message).Post()
	}
}
