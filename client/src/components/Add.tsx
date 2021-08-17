import '../css/AddCard.css'
import { Link } from 'react-router-dom'


const Add = () => {
    return(
        <>
        <div id="AddBackground"/>
        <div className="AddCard">
            <h1>Novo Card</h1>
                <p contentEditable="true" spellCheck={true} className="AddCard_TextInput" placeholder="Titulo"></p>
                <p contentEditable="true" spellCheck={true} className="AddCard_TextInput" placeholder={"Pergunta"}></p>
                <p contentEditable="true" spellCheck={true} className="AddCard_TextInput" placeholder={"Resposta"}></p>
                <button id='AddCreateCard_button'>Criar Card</button>
        </div>
        </>
    )
}
export default Add;