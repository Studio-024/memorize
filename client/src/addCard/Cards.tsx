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
    const [areaQuest, setAreaQuest] = useState('');
    const [areaResponse, setAreaResponse] = useState('');
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
    
   
    
    function reset(){
        setAreaQuest('')
        setAreaResponse('')
    }
    return(
        <>
        <section className="dashboard__content__cards">
            
                <div className="dashboard__content__questFlex"  id="dashboard__content__quest_input">
                    <textarea id="dashboard__New_content__quest_textArea" onChange={(e)=>{setAreaQuest(e.target.value)}} value={areaQuest} placeholder="Digite a pergunda do seu novo card aqui!"></textarea>
                </div>
                <div className="dashboard__content__questFlex" id="dashboard__content__response_input" >
                    <textarea id="dashboard__New_content__response_textArea" onChange={(e)=>{setAreaResponse(e.target.value)}} value={areaResponse} placeholder="Digite a resposta do seu novo card aqui!" />
                </div>
            
        </section>
        <section className="dashboard__content__next">
                <button className="buttons" id="dashboard__content__saveCard" onClick={reset}>Salvar Card</button>

            </section>
        </>
    );
}