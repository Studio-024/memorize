import React, { ReactNode } from 'react';

interface Props {
    quest: string;
    response: string;
}
export default function grids({quest, response}: Props){
    return(
    <div className="conteiner">

        <div className="status">
        
            <div className="left">
                <div>Revisado: </div>
            </div>
        
            <div className="right">
                <div>Falta: </div>  
                <div>Total: </div>
            </div>
        
        </div>
        
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
        <div className="new">
            <div className="three"></div>
        </div>

    </div>
    );
}