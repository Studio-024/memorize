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
                <div  className="next" >
                    <button className="buttons" id="SeeResponse" >Resposta</button>    
                </div>     
            </div>
            
            <div className="next">
                <button className="buttons" id="erro">Errei</button>
                <button className="buttons" id="acerto">Acertei</button>
            </div>
        </div>
    )
}