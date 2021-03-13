import React from 'react';
import Axios from 'axios';
import Cors from 'cors';

export const getCard = async() => {
    try {
        const {data} = await Axios.get('http://localhost:3001/card')
        //Axios.get('http://localhost:3001/card')
        console.log({data})
    }
    catch (error) {
        console.error(error);
    }
}