import Axios from 'axios';

export const getCard = async() => {
    try {
        const {data} = await Axios.get('http://localhost:3001/card')
        console.log({data})
    }
    catch (error) {
        console.error(error);
    }
}