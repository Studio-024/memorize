import Axios from 'axios';

export const getCard = async() => {
	try {
		const {data} = await Axios.get('http://localhost:3001/card')

		return data;
		// document.getElementById('print_cod')!.innerHTML = {data}.data[0].cod;
		// document.getElementById('print_question')!.innerHTML = {data}.data[0].question;
		// document.getElementById('print_response')!.innerHTML =  {data}.data[0].response;
	}
	catch (error) {
		console.error(error);
	}
}