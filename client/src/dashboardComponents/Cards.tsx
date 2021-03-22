import { useState } from 'react';


interface Props {
    quest: string;
    response: string;
}
export default function Cards({quest, response}: Props){
    const [count, setCount] = useState(0)

    return(
        <div className="dashboard__content__cards">
            <div className="dashboard__content__questFlex" id="dashboard__content__quest"> 
                <p className="dashboard__content__text">{count}</p>
            </div>
            
            <div className="dashboard__content__questFlex" id="dashboard__content__response">
                <div  className="dashboard__content__see" >
                    <button className="buttons" id="dashboard__content__SeeResponse" >Resposta</button>    
                </div>     
            </div>
            
            <div className="dashboard__content__next">
                <button className="buttons" id="dashboard__content__erro" onClick={()=>{
                    setCount(count + 1)
                }}>Errei</button>
                <button className="buttons" id="dashboard__content__acerto">Acertei</button>
            </div>
        </div>
    )
}