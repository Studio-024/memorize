import { useState, useEffect } from 'react';
import { getCard } from '../service/api-data';
import { ICard } from '../domain/entities/Card';
import { ICardOrdered } from '../domain/useCase/orderCard';
import { OrderCardService } from '../service/OrderCardService';

export default function Cards() {

    const [question, setQuestion] = useState('');
    const [response, setResponse] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        
        async function cardsHandler() {
            const orderObj = new OrderCardService();
            const data = await orderObj.order(getCard());

            setQuestion(data[index].question);
            setResponse(data[index].response);
        }

        cardsHandler();
    }, [index]);
    
    return(
        <section className="dashboard__content__cards">
            
            <section className="dashboard__content__questFlex" id="dashboard__content__quest"> 
                <p className="dashboard__content__flexText">{quest}</p>
            </section>
            
            <section className="dashboard__content__questFlex" id="dashboard__content__response">
                <div  className="dashboard__content__see" >
                    {response}
                    <button className="buttons" id="dashboard__content__SeeResponse" >resposta</button>    
                </div>     
                <p className="dashboard__content__flexText">{response}</p>
            </section>
            
        </section>
    )
}