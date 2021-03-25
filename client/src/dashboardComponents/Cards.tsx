import { useState, useEffect } from 'react';
import { getCard } from '../service/api-data';
import { OrderCardService } from '../service/OrderCardService';

export default function Cards() {

    const [question, setQuestion] = useState('');
    const [response, setResponse] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {

        async function cardsHandler() {
            const orderObj = new OrderCardService();
            const data = await orderObj.order(getCard());

            // Criar função do back-end para evitar request atoa
            if (index < data.length) {
                setQuestion(data[index].question);
                setResponse(data[index].response);
            }
            else {
                setQuestion("Não há mais cards.");
                setResponse("Não há mais cards.");
            }
        }

        cardsHandler();
    }, [index]);
    
    return(
        <>
        <section className="dashboard__content__cards">
            
            <section className="dashboard__content__questFlex" id="dashboard__content__quest"> 
                <p className="dashboard__content__flexText">{question}</p>
            </section>
            
            <section className="dashboard__content__questFlex" id="dashboard__content__response">
                <div  className="dashboard__content__see" >
                    
                    <button className="buttons" id="dashboard__content__SeeResponse" >resposta</button>    
                </div>     
                <p className="dashboard__content__flexText">{response}</p>
            </section>
            
        </section>

        <section className="dashboard__content__next">
            <button className="buttons" id="dashboard__content__erro" onClick={() => {
                setIndex(index + 1)
            }}>Errei</button>
            <button className="buttons" id="dashboard__content__acerto" onClick={() => {
                setIndex(index + 1)
            }}>Acertei</button>
        </section>
        </>
    )
}