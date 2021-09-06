import '../css/AddCard.css';
import { loginUser, saveCard } from '../service/api';
import { ErrorHandler } from '../utils/ErrorHandler';
import backSVG from  '../assets/back.svg';

const Add = () => {
    function handleGoBack(){
        document.getElementById('AddCard')!.style.display = 'none';
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
        <>
        <div id="AddCard">
            <div id="AddCard_background" onClick={handleGoBack}/>
            <main className="AddCard_main">
                <div className="AddCard_main_header" >
                    <img id="AddCard_arrowBack" src={backSVG} alt="Voltar" onClick={handleGoBack} />
                    <h1 className="AddCard_main_header_title">Novo Card</h1>
                </div>
                <form className="AddCard_main_form">
                    <span contentEditable={true} spellCheck={true} className="AddCard_main_form_input" id='title' placeholder={"Titulo"}/>
                    <span contentEditable={true} spellCheck={true} className="AddCard_main_form_input" id='front' placeholder={"Pergunta"}/>
                    <span contentEditable={true} spellCheck={true} className="AddCard_main_form_input" id='back' placeholder={"Resposta"}/>                    
                    <button className='AddCard_main_form_submit' onClick={create}>Criar Card</button>
                </form>
            </main>
        </div>
        </>
    )
}
export default Add;