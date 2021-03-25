import { useState, useEffect } from 'react';
import { ICardOrdered } from '../domain/useCase/orderCard';
import { getCard } from '../service/api-data';
import { OrderCardService } from '../service/OrderCardService';


export default function Cards() {

    const [card, setCard] = useState<ICardOrdered[]>([])
    const [question, setQuestion] = useState('');
    const [response, setResponse] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(()=>{
        async function execute(){
            const orderObj = new OrderCardService();
            const data = await orderObj.order(getCard());
            console.log('pegando os cards')
            setCard(data)
        }

        execute()
    }, [])

    useEffect(() => {
            // Criar função do back-end para evitar request atoa
            if (index < card.length) {
                console.log('setquestion')
                setQuestion(card[index].question);
                setResponse(card[index].response);
            }
            else {
                console.log('vai toma no cu')
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
                console.log('clicado errado')
                setIndex(index + 1)
            }}>Errei</button>
            <button className="buttons" id="dashboard__content__acerto" onClick={() => {
                 console.log('clicado certo')
                setIndex(index + 1)
            }}>Acertei</button>
        </section>
        </>
    )
}