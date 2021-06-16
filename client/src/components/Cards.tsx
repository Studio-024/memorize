import { useState, useEffect, FocusEventHandler } from 'react';
import { ICardOrdered } from '../domain/useCase/orderCard';

export interface Props{
    dataCards: ICardOrdered[]
    buttonIndex: number
}

export default function Cards({dataCards, buttonIndex}: Props) {
    const [question, setQuestion] = useState('');
    const [response, setResponse] = useState('');
    const [card, setCard] = useState<ICardOrdered[]>([]);
    useEffect(()=>{ 
        setCard(dataCards)
    }, [dataCards])

    useEffect(() => {
        if (card.length && buttonIndex <= card.length) {
            setQuestion(card[buttonIndex - 1].question);
            setResponse(card[buttonIndex - 1].response);
        }
        else {
            setQuestion("Não há mais cards.");
            setResponse("Não há mais cards.");
        }
    }, [buttonIndex]);
    
    function handleClick(){
        document.getElementById("dashboard__content__SeeResponse")!.style.display = "none";
        document.getElementById("dashboard__content__response")!.style.display = "inline";
     
    }
    return(
        <>
        <section className="dashboard__content__cards">
            
            <section className="dashboard__content__questFlex" id="dashboard__content__quest"> 
                <div id="dashboard__content__quest_output">
                    <p className="dashboard__content__flexText">{question}</p>
                </div>
            </section> 
            
            <section className="dashboard__content__questFlex" id="dashboard__content__section_response">
                <div id="dashboard__content__response_output">
                    <p id="dashboard__content__response" style={{display: "none"}}>{response}</p>
                    <div  className="dashboard__content__see" >                    
                        <button className="buttons" id="dashboard__content__SeeResponse" onClick={handleClick}>Resposta</button>    
                    </div>   
                </div>
            </section>
            
        </section>
        </>
    );
}