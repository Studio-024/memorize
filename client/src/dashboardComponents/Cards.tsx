import { useState, useEffect } from 'react';
import { getCard } from '../service/api-data';
import { ICardOrdered } from '../domain/useCase/orderCard';
import { OrderCardService } from '../service/OrderCardService';

export default function Cards() {
    const [index, setIndex] = useState(0);
    const [question, setQuestion] = useState('');
    const [response, setResponse] = useState('');
    const [card, setCard] = useState<ICardOrdered[]>([]);

    useEffect(() => {
        // Get the cards from db in first render
        async function execute() {
            const orderObj = new OrderCardService();
            const data = await orderObj.order(getCard());
            
            setCard(data);
            console.log("Getting cards");
        }

        execute()
    }, [])

    useEffect(() => {     //Criar função do back-end para evitar request atoa
        // Whenever 'index' has a modification, this content will be rendered
        if (card.length && index <= card.length) {
            // Check if 'card' exists and 'index' is smaller than 'card.length'
            setQuestion(card[index - 1].question);
            setResponse(card[index - 1].response);
        }
        else {
            setQuestion("Não há mais cards.");
            setResponse("Não há mais cards.");
        }
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
    );
}