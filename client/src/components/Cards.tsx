import React, { ReactNode } from 'react';
interface Props {
    quest: string;
    response: string;
}
export default function Cards({quest, response}: Props){
    return(
        <div className="cards">
            <div className="quests" id="quest"> 
                <p className="text">{quest}</p>
            </div>
            
            <div className="quests" id="response">
                <div className="buttons">
                    <div id="SeeResponse">Resposta</div>    
                </div>                
            </div>
            
            <div className="buttons">
                <div id="acerto">Acertei</div>
                <div id="erro">Errei</div>
            </div>

            <div className="buttons">
                <div id="addCard">Adicionar Card</div>
            </div>
        </div>
    )
}