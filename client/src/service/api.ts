import Axios from 'axios'
import { toast } from 'react-toastify'
import { ICard, ICardUser } from '../domain/entities/Card'
import { IUser, IUserLogin } from '../domain/entities/User'
import { ErrorHandler } from '../utils/ErrorHandler'

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

export const saveCard = async({front, back}: ICardUser) => {
	try {
		await Axios.post<ICard[]>('http://localhost:3001/card', {
			front,
			back
		}, {
			headers: {
				'x-access-token': document.cookie.split('=')[1]
			}
		})

		toast.success('Card created!')
	}
	
	catch (err) {
		throw new ErrorHandler(err.request.message).Post()
	}
}


export const signUpUser = async({name, email, password}: IUser) => {
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

export const loginUser = async({email, password}: IUserLogin) => {
	try {
		const req = await Axios.post('http://localhost:3001/user/login', {
			email,
			password
		})
	
		const token = req.data.data
		document.cookie = 'x-access-token' + '=' + token + ';' + 'Path' + '=' + '/' + ';' + 'Domain' + '=' + 'localhost' + ';' + 'Expires' + '=' + '1m'
		toast.success('Logged!')
	}
	catch (err) {
		console.log(err.message)
	}
}

export const reviewCard = async(userGrade: string, review_cod: number) => {
	try {
		await Axios.put('http://localhost:3001/card/review', {
			userGrade
		}, {
			headers: {
				'x-access-token': document.cookie.split('=')[1]
			}, params: {
				'cod': review_cod
			}
		})

		toast.success('Reviewed!')
	}
	catch (err) {
		// revisar tratamento de erro
		console.log(err.response)
	}
}