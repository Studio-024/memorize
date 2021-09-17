import { errorHelper } from '../utils/errorHelper'
import '../css/AddCard.css'
import { saveCard } from '../service/api'
import backSVG from  '../assets/back.svg'

const Add = () => {
    function handleGoBack(){
        document.getElementById('AddCard')!.style.display = 'none'
    }
    function create(event: any) {
        event.preventDefault();

        const front = document.getElementById('front')!.innerHTML
        const back = document.getElementById('back')!.innerHTML

        if (front && back) {
            saveCard({front, back})
                .then(()=> errorHelper.sucess('criado'))
                .then(() => {
                    document.getElementById('front')!.innerHTML = ''
                    document.getElementById('back')!.innerHTML = ''
                })
                .catch(err => errorHelper.apiError(err.response.statusCode))           
        } else {
            errorHelper.missingParameter('campos')

        }
    }

    return (
        <>
        <div id='AddCard'>
            <div id='AddCard_background' onClick={handleGoBack} />
            <main className='AddCard_main'>
                <div className='AddCard_main_header'>
                    <img id='AddCard_arrowBack' src={backSVG} alt='Voltar' onClick={handleGoBack} />
                    <h1 className='AddCard_main_header_title'>Novo Card</h1>
                </div>
                <form className='AddCard_main_form' onSubmit={create}>
                    <span contentEditable={true} id='front' spellCheck={true} className='AddCard_main_form_input' placeholder={'Pergunta'} />
                    <span contentEditable={true} id='back' spellCheck={true} className='AddCard_main_form_input' placeholder={'Resposta'} />                    
                    <button className='AddCard_main_form_submit' >Criar Card</button>
                </form>
            </main>
        </div>
        </>
    )
}

export default Add