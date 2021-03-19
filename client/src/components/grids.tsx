import React, { ReactNode } from 'react';
import Status from './Status';
import Cards from './Cards';
import New from './New';



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
                <p className="text" id="print_question">{quest}</p>
            </div>
            <div className="quests">
                <p className="text" id="print_response">{response}</p>
            </div>
            
            <div className="acertos">
                <div id="acerto">Acertei</div>
                <div id="erro">Errei</div>
            </div>
        </div>
        <div className="new">
            {/*Printa o cod*/}
            <div className="three" id="print_cod"></div>
        </div>
    </div>


    );
}
