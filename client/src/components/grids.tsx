import React from 'react';
export default function grids(){
    return(
    <div className="conteiner">

        <div className="status">
        
            <div className="direita">
                <div>Revisado: </div>
            </div>
        
            <div className="esquerda">
                <div>Falta: </div>  
                <div>Total: </div>
            </div>
        
        </div>
        
        <div className="cards">
            <div className="quests"> 
                <p className="text">Por que a visão da idade média do renascimento, não é igual do iluminismo, que não é igual ao da era industrial. mesmo sendo sobre o mesmo assunto?</p>
            </div>
            <div className="quests">
                <p className="text">pois esses períodos são mais antigos portanto menos informados e "ignorantes".</p>
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