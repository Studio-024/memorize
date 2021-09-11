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
	
	catch (err: any) {
		throw new ErrorHandler(err.response)
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
	}
	catch (err: any) {
		throw new ErrorHandler(err.response)
	}
}


export const signUpUser = async({name, email, password}: IUser) => {
	try {
		await Axios.post('http://localhost:3001/user/signup', {
			name,
			email,
			password
		})
	}
	catch (err: any) {
		throw new ErrorHandler(err.response)
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
	catch (err: any) {
		throw new ErrorHandler(err.response)
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
	catch (err: any) {
		throw new ErrorHandler(err.response)
	}
}