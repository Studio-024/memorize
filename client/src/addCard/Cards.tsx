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
    
    function resetNewCard(){
        document.getElementById("dashboard__content__response");
        
        console.log("Oi");

    }
    return(
        <>
        <section className="dashboard__content__cards">
            
                <div className="dashboard__content__questFlex"  id="dashboard__content__quest_input">
                    <textarea id="dashboard__New_content__quest_textArea" onClick={resetNewCard} placeholder="Digite a pergunda do seu novo card aqui!" ></textarea>
                </div>
            
                <div className="dashboard__content__questFlex" id="dashboard__content__response_input" onReset={resetNewCard} >
                    <textarea id="dashboard__New_content__response_textArea" placeholder="Digite a resposta do seu novo card aqui!" ></textarea>
                </div>
            
        </section>
        </>
    );
}