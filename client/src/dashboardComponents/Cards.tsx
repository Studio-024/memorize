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
        document.getElementById("resposta")!.style.display = "inline";
     
    }
    function a(){
        var a = document.getElementById("dashbord__content__quest_input")!.textContent;
        var b = document.getElementById("dashbord__content__response_input")!.textContent;
        if(a == "Digite a pergunta do seu novo card aqui!"){
            document.getElementById("dashbord__content__quest_input")!.nodeValue = "oi";
        }
        console.log(a);
        console.log(b);

    }
    
    return(
        <>
        <section className="dashboard__content__cards">
            
            <section className="dashboard__content__questFlex" id="dashboard__content__quest"> 
                <div id="dashbord__content__quest_output">
                    <p className="dashboard__content__flexText">{question}</p>
                </div>
                <div id="dashbord__content__quest_input">
                    <textarea id="dashborad__New_content__quest_textArea" > Digite a pergunta do seu novo card aqui! </textarea>
                </div>
            </section> 
            
            <section className="dashboard__content__questFlex" id="dashboard__content__response">
                <div id="dashbord__content__response_output">
                    <p className="dashboard__content__flexText" id="resposta" style={{display: "none"}}>{response}</p>
                    <div  className="dashboard__content__see" >                    
                        <button className="buttons" id="dashboard__content__SeeResponse" onClick={handleClick}>resposta</button>    
                    </div>    
                </div> 
                <div id="dashbord__content__response_input" >
                    <textarea id="dashborad__New_content__response_textArea" onClick={a}>Digite a resposta do seu novo card aqui! </textarea>
                </div>
            </section>
            
        </section>
        </>
    );
}