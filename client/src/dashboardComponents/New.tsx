// import ReturnCards from './ReturnCards';
// import ReturnC from './ReturnCards';

export default function New(){
    
    function NewCards(){
        document.getElementById("dashbord__content__quest_output")!.style.display = "none";
        document.getElementById("dashbord__content__response_output")!.style.display = "none";
        
        document.getElementById("dashbord__content__quest_input")!.style.display = "flex";
        document.getElementById("dashbord__content__response_input")!.style.display = "flex";

        
    
    }
    return(
    <section className="dashboard__footer__new">
            <button id="dashboard__footer__NewCard" onClick={NewCards}>Criar Flashcard</button>
    </section>


    );
}