import Axios from 'axios'
import { toast } from 'react-toastify'
import { ICard } from '../domain/entities/Card'
import { ErrorHandler } from '../utils/ErrorHandler'

export interface User {
	name: string
	email: string
	password: string
}

function setCookie(name:string, value:string, expirydays:any) {
	var d = new Date()
	d.setTime(d.getTime() + (expirydays*24*60*60*1000))
	var expires = "expires="+ d.toUTCString()
	document.cookie = name + "=" + value + "; " + expires
}

function deleteCookie(name: string){
	setCookie(name,"",-1)
}

function deleteAllCookies(){
	var cookies = document.cookie.split(";")
	for (var i = 0; i < cookies.length; i++) {
		deleteCookie(cookies[i].split("=")[0])
	}
}

export const getCard = async() => {
	try {
		const {data} = await Axios.get<ICard[]>('http://localhost:3001/card', {
			withCredentials: true,
			headers: {
				// 'Content-Type': 'text/plain',
				// 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
				// 'Access-Control-Allow-Credentials': true,
				// 'Access-Control-Allow-Headers': 'Content-Type',
				'Access-Control-Allow-Origin': 'http://localhost:3000/'
				// 'Cookie': document.cookie + ';' + 'Path' + '=' + '/' + ';' + 'Domain' + '=' + 'localhost' + ';' + 'Expires' + '=' + 'null'
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
			email: "teste2@teste.com",
			password: "1234"
		})
	
		// deleteAllCookies()
		const token = req.data.data
		document.cookie = 'x-access-token' + '=' + token + ';' + 'Path' + '=' + '/' + ';' + 'Domain' + '=' + 'localhost' + ';' + 'Expires' + '=' + 'null'
		// document.cookie = "x-access-token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywibmFtZSI6InRlc3RlMiIsImlhdCI6MTYzMDQyMTExMiwiZXhwIjoxNjMwNDI0NzEyfQ.VZeemhyclLJF1e3xm_RmCaWRPIW3aRy4sBl3PC6MlOE; Path=/; Domain=localhost;"
		// document.cookie = "x-access-token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywibmFtZSI6InRlc3RlMiIsImlhdCI6MTYzMDQyMTExMiwiZXhwIjoxNjMwNDI0NzEyfQ.VZeemhyclLJF1e3xm_RmCaWRPIW3aRy4sBl3PC6MlOE; Path=/; Domain=localhost; SameSite=none; Secure;"
		console.log(document.cookie)
		toast.success('penis')
	}
	catch (err) {}
}