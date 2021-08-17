import '../css/AddCard.css'
import { Link } from 'react-router-dom'
import { saveCard } from '../service/api'
import { ErrorHandler } from '../utils/ErrorHandler'

const Add = () => {
    function create() {
        const front = document.getElementById('front')!.innerHTML
        const back = document.getElementById('back')!.innerHTML

        if (front && back) {
            saveCard(front, back)
            document.getElementById('front')!.innerHTML = ''
            document.getElementById('back')!.innerHTML = ''
        } else {
            new ErrorHandler(422).Post()
        }
    }

    return(
        <>
        <div className="AddCard">
            <h1>Novo Card</h1>
            <div id="AddContainer_quest">
                <h1 contentEditable="true" spellCheck={true} className="AddCard_title" placeholder="Titulo"></h1>
                <p contentEditable="true" spellCheck={true} id="front" className="AddCard_quest" placeholder={"Pergunta"}></p>
                <p contentEditable="true" spellCheck={true} id="back" className="AddCard_quest" placeholder={"Resposta"}></p>
                <button onClick={create}>Criar Card</button>
            </div>
        </div>
        </>
    )
}
export default Add;