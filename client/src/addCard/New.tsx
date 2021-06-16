// import ReturnCards from './ReturnCards';
// import ReturnC from './ReturnCards';

export default function New() {
    
    function backCard() {
        document.getElementById('containerCard')!.style.display = "flex";
        document.getElementById('containerNewCard')!.style.display = "none";
    }
    return(
        <section className="dashboard__footer__new">
            <button id="dashboard__footer__Cards" onClick={backCard}>Voltar aos Flashcard</button>
        </section>
    );
}