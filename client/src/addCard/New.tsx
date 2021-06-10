// import ReturnCards from './ReturnCards';
// import ReturnC from './ReturnCards';

export default function New(){
    
    function backCard(){
        const NewCard = document.getElementById('containerCard')!.style.display = "flex";
        const flashCards = document.getElementById('containerNewCard')!.style.display = "none";
        
        
    }

    return(
    <section className="dashboard__footer__new">
            <button id="dashboard__footer__Cards" onClick={backCard}>Voltar aos Flashcard</button>
    </section>


    );
}