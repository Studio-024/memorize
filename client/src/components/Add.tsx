import { Link } from 'react-router-dom'
import '../css/AddCard.css'

interface Props{
    add: string
}

const Add = (Props: Props) => {
    let side  = Props.add
    console.log(side)
    return(
        <>
        <div className="card">
            { side === 'front' && <div id="container_title">
                <h1 contentEditable="true"  spellCheck={true} className="card_title" placeholder="Digite aqui o titulo"></h1>
            </div>}
            <div id="container_quest">
            { side === 'front' && <p contentEditable="true" spellCheck={true} className="card_quest" placeholder={"Digite aqui a pergunta"}></p>}
            { side === 'back' && <p contentEditable="true" spellCheck={true} className="card_quest" placeholder={"Digite aqui a resposta"}></p>}
            </div>
            <div style={{height: "3rem", margin: "1rem"}}/>
        </div>
            <div className="card_missAndHit">
            {side === 'front' && 
            <Link to={"/addCard/back"}><button className="button_staps">Próximo</button></Link>
            || side === 'back' && 
            <button className="button_staps">Salvar Card</button>
            }
            
        </div>
        </>
    )
}
export default Add;