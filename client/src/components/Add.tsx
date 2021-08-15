import '../css/AddCard.css'
import { Link } from 'react-router-dom'


const Add = () => {
    return(
        <>
        <div className="AddCard">
            <h1>Novo Card</h1>
            <div id="AddContainer_quest">
                <h1 contentEditable="true" spellCheck={true} className="AddCard_title" placeholder="Titulo"></h1>
                <p contentEditable="true" spellCheck={true} className="AddCard_quest" placeholder={"Pergunta"}></p>
                <p contentEditable="true" spellCheck={true} className="AddCard_quest" placeholder={"Resposta"}></p>
                <button>Criar Card</button>
            </div>
        </div>
        </>
    )
}
export default Add;