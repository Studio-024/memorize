import Axios from 'axios'
import { toast } from 'react-toastify'
import { ICard } from '../domain/entities/Card'
import { ErrorHandler } from '../utils/ErrorHandler'

export interface User {
	name: string
	email: string
	password: string
}

export const getCard = async() => {
	try {
		const {data} = await Axios.get<ICard[]>('http://localhost:3001/card', {
			headers: {
				'x-access-token': document.cookie.split('=')[1]
			}
		})

		return data
	}
	
	catch (err) {
		throw new ErrorHandler(err.request.status).Get()
	}
}

export const saveCard = async(front:string, back:string) => {
	try {
		await Axios.post<ICard[]>('http://localhost:3001/card', {
			front: front,
			back: back
		})

		toast.success('Card created!')
	}
	
	catch (err) {
		throw new ErrorHandler(err.request.message).Post()
	}
}

export const signupUser = async({name, email, password}: User) => {
	try {
		await Axios.post('http://localhost:3001/user/signup', {
			name, 
			email,
			password
		})
		toast.success('user created')
	}
	catch (err) {
		throw new ErrorHandler(err.request.message).Post()
	}
}

export const login = async() => {
	try {
		const req = await Axios.post('http://localhost:3001/user/login', {
			email: 'teste2@teste.com',
			password: '1234'
		})
	
		const token = req.data.data
		document.cookie = 'x-access-token' + '=' + token + ';' + 'Path' + '=' + '/' + ';' + 'Domain' + '=' + 'localhost' + ';' + 'Expires' + '=' + '1m'
	}
	catch (err) {}
}