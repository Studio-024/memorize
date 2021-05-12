// import ReturnCards from './ReturnCards';
// import ReturnC from './ReturnCards';

export default function New(){
    
    function NewCards(){
        document.getElementById("dashboard__content__quest_output")!.style.display = "none";
        document.getElementById("dashboard__content__response_output")!.style.display = "none";
        document.getElementById("dashboard__footer__NewCard")!.style.display = "none";
        document.getElementById("dashboard__content__acerto")!.style.display = "none";
        document.getElementById("dashboard__content__erro")!.style.display = "none";
    
        document.getElementById("dashboard__content__saveCard")!.style.display = "initial";
        document.getElementById("dashboard__content__quest_input")!.style.display = "flex";
        document.getElementById("dashboard__content__response_input")!.style.display = "flex";
        document.getElementById("dashboard__footer__Cards")!.style.display = "initial";        
    }
    function Cards(){
        document.getElementById("dashboard__content__quest_input")!.style.display = "none";
        document.getElementById("dashboard__content__response_input")!.style.display = "none";
        document.getElementById("dashboard__footer__Cards")!.style.display = "none";
        document.getElementById("dashboard__content__saveCard")!.style.display = "none";
        
        document.getElementById("dashboard__content__acerto")!.style.display = "initial";
        document.getElementById("dashboard__content__erro")!.style.display = "initial";
        document.getElementById("dashboard__content__quest_output")!.style.display = "initial";
        document.getElementById("dashboard__content__response_output")!.style.display = "initial";
        document.getElementById("dashboard__footer__NewCard")!.style.display = "initial";
    }
    return(
    <section className="dashboard__footer__new">
            <button id="dashboard__footer__NewCard" onClick={NewCards}>Criar Flashcard</button>
            <button id="dashboard__footer__Cards" style={{display: 'none'}} onClick={Cards}>Voltar aos Flashcard</button>
    </section>


    );
}