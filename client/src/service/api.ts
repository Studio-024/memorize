import Axios from 'axios'
import { ICard, ICardUser } from '../domain/entities/Card'
import { IUser, IUserLogin } from '../domain/entities/User'
import { ErrorHandler } from '../utils/ErrorHandler'
import { getToken, setToken, logout} from './auth'

Axios.interceptors.response.use(response => {
	return response;
 }, error => {
   if (error.response.status === 401) {
	logout()
   }
   return error;
 });

export const getCard = async() => {
	try {
		const {data} = await Axios.get<ICard[]>('http://localhost:3001/card', {
			headers: {
				'x-access-token': getToken(),
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
				'x-access-token': getToken()
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
		setToken(token)
	}
	catch (err: any) {
		throw new ErrorHandler(err.response)
	}
}

export const reviewCard = async(userGrade: number, review_cod: number) => {
	try {
		await Axios.put('http://localhost:3001/card/review', {
			
			userGrade: userGrade
		}, {
			headers: {
				'x-access-token': getToken()
			}, params: {
				'cod': review_cod
			}
		})
	}
	catch (err: any) {
		throw new ErrorHandler(err.response)
	}
}