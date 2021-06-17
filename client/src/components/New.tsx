// import ReturnCards from './ReturnCards'
// import ReturnC from './ReturnCards'

export default function New() {
    
    function newFlashCard() {
        const NewCard = document.getElementById('containerCard')!.style.display = "none"
        const flashCards = document.getElementById('containerNewCard')!.style.display = "flex"
    }
    
    return (

        <section className="dashboard__footer__new">
            <button id="dashboard__footer__NewCard" onClick={newFlashCard}>Criar Flashcard</button>
        </section>

    )
}