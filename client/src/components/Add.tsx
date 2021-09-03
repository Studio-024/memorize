import '../css/AddCard.css';
import { loginUser, saveCard } from '../service/api';
import { ErrorHandler } from '../utils/ErrorHandler';
import backSVG from  '../assets/back.svg';

const Add = () => {
    function handleGoBack(){
        document.getElementById('AddContainer')!.style.display = 'none';
    }
    function create() {
        loginUser({email: 'teste2@teste.com', password: '1234'}) //4debug
        const front = document.getElementById('front')!.innerHTML;
        const back = document.getElementById('back')!.innerHTML;

        if (front && back) {
            saveCard({front, back})
            document.getElementById('front')!.innerHTML = '';
            document.getElementById('back')!.innerHTML = '';
        } else {
            new ErrorHandler(422).Post();
        }
    }

    return(
        <div id="AddContainer" style={{display:'none'}}>
            <div id="AddBackground" onClick={handleGoBack}/>
            <div className="AddCard">
                <div id="AddBack" onClick={handleGoBack}>
                    <img src={backSVG} alt="" />
                </div>
                <h1>Novo Card</h1>
                <p contentEditable="true" id='title' spellCheck={true} className="AddCard_TextInput" placeholder={"Titulo"}></p>
                <p contentEditable="true" id='front' spellCheck={true} className="AddCard_TextInput" placeholder={"Pergunta"}></p>
                <p contentEditable="true" id='back' spellCheck={true} className="AddCard_TextInput" placeholder={"Resposta"}></p>                    
                <button id='AddCreateCard_button' onClick={create}>Criar Card</button>
            </div>
        </div>
    )
}
export default Add;