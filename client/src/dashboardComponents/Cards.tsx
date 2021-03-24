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
        <div className="dashboard__content__cards">
            <div className="dashboard__content__questFlex" id="dashboard__content__quest"> 
                <p className="dashboard__content__text">{question}</p>
            </div>
            
            <div className="dashboard__content__questFlex" id="dashboard__content__response">
                <div  className="dashboard__content__see" >
                    {response}
                    <button className="buttons" id="dashboard__content__SeeResponse" >resposta</button>    
                </div>     
            </div>
             
            <div className="dashboard__content__next">
                <button className="buttons" id="dashboard__content__erro" onClick={()=>{
                    setIndex(index + 1)
                }}>Errei</button>
                <button className="buttons" id="dashboard__content__acerto" onClick={()=>{
                    setIndex(index + 1)
                }}>Acertei</button>
            </div>
        </div>
    );
}