import { useState } from 'react';

export default function Cards() {
    const [areaQuest, setAreaQuest] = useState('');
    const [areaResponse, setAreaResponse] = useState('');
    
    function saveCards() {
        setAreaQuest('');
        setAreaResponse('');
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
                <button className="buttons" id="dashboard__content__saveCard" onClick={saveCards}>Salvar Card</button>

            </section>
        </>
    );
}