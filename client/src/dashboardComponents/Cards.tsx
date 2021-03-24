import React, { ReactNode } from 'react';
interface Props {
    quest: string;
    response: string;
}
export default function Cards({quest, response}: Props){
    return(
        <section className="dashboard__content__cards">
            
            <section className="dashboard__content__questFlex" id="dashboard__content__quest"> 
                <p className="dashboard__content__flexText">{quest}</p>
            </section>
            
            <section className="dashboard__content__questFlex" id="dashboard__content__response">
                <div  className="dashboard__content__see" >
                    <button className="buttons" id="dashboard__content__SeeResponse" >Resposta</button>    
                </div>     
                <p className="dashboard__content__flexText">{response}</p>
            </section>
            
        </section>
    )
}