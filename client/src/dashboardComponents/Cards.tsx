import React, { ReactNode } from 'react';
interface Props {
    quest: string;
    response: string;
}
export default function Cards({quest, response}: Props){
    return(
        <div className="dashboard__content__cards">
            <div className="dashboard__content__questFlex" id="dashboard__content__quest"> 
                <p className="dashboard__content__text">{quest}</p>
            </div>
            
            <div className="dashboard__content__questFlex" id="dashboard__content__response">
                <div  className="dashboard__content__next" >
                    <button className="buttons" id="dashboard__content__SeeResponse" >Resposta</button>    
                </div>     
            </div>
            
            <div className="dashboard__content__next">
                <button className="buttons" id="dashboard__content__erro">Errei</button>
                <button className="buttons" id="dashboard__content__acerto">Acertei</button>
            </div>
        </div>
    )
}