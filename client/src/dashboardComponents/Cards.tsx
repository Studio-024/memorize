import { useState, useEffect } from 'react';
import { ICardOrdered } from '../domain/useCase/orderCard';

interface Props{
    dataCards: ICardOrdered[]
}

export default function Cards({dataCards}: Props) {
    const [index, setIndex] = useState(0);
    const [question, setQuestion] = useState('');
    const [response, setResponse] = useState('');
    const [card, setCard] = useState<ICardOrdered[]>([]);

    useEffect(()=>{ 
        setCard(dataCards)
    }, [dataCards])

    useEffect(() => {
        if (card.length && index <= card.length) {
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