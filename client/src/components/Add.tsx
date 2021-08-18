import '../css/AddCard.css'
import { saveCard } from '../service/api'
import { ErrorHandler } from '../utils/ErrorHandler'
import backSVG from  '../assets/back.svg'
import { useHistory } from 'react-router'

const Add = () => {
    let history = useHistory();
    function handleGoBack(){
        history.goBack();
    }
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
        <div id="AddBackground" onClick={handleGoBack}/>
        <div className="AddCard">
            <div id="AddBack" onClick={handleGoBack}><img src={backSVG} alt="" /></div><h1>Novo Card</h1>
                <p contentEditable="true" spellCheck={true} className="AddCard_TextInput" placeholder="Titulo"></p>
                <p contentEditable="true" spellCheck={true} className="AddCard_TextInput" placeholder={"Pergunta"}></p>
                <p contentEditable="true" spellCheck={true} className="AddCard_TextInput" placeholder={"Resposta"}></p>
                <button id='AddCreateCard_button'>Criar Card</button>
        </div>
        </>
    )
}
export default Add;