import Axios from 'axios'
import { ICard } from '../domain/entities/Card'
import { ErrorHandler } from '../utils/ErrorHandler'

export const getCard = async() => {
	try {
		const {data} = await Axios.get<ICard[]>('http://localhost:3001/card')
		
		return data
	}
	
	catch (err: any) {
		throw new ErrorHandler(err.response)
	}
}

export const saveCard = async(front:string, back:string) => {
	try {
		await Axios.post<ICard[]>('http://localhost:3001/card', {
			front: front,
			back: back
		})
	}
	catch (err: any) {
		throw new ErrorHandler(err.response)
	}
}

export const signupUser = async({name, email, password}: User) => {
	try {
		await Axios.post<User>('http://localhost:3001/user/signup', {
			name, 
			email,
			password
		})
	}
	catch (err: any) {
		throw new ErrorHandler(err.response)
	}
}

export interface User {
	name: string
	email: string
	password: string
}