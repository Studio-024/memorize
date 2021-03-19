import React, { ReactNode } from 'react';
interface Props {
    quest: string;
    response: string;
}
export default function Cards({quest, response}: Props){
    return(
        <div className="cards">
            <div className="quests"> 
                <p className="text">{quest}</p>
            </div>
            <div className="quests">
                <p className="text">{response}</p>
            </div>
            
            <div className="acertos">
                <div id="acerto">Acertei</div>
                <div id="erro">Errei</div>
            </div>
        </div>
    )
}