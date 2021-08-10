import '../css/AddCard.css'
import { Link } from 'react-router-dom'

interface Props{
    add: string
}

const Add = (Props: Props) => {
    let side  = Props.add
    console.log(side)
    return(
        <>
        <div className="AddCard">
            { side === 'front' && <div id="AddContainer_title">
                <h1 contentEditable="true"  spellCheck={true} className="AddCard_title" placeholder="Digite aqui o titulo"></h1>
            </div>}
            <div id="AddContainer_quest">
            { side === 'front' && <p contentEditable="true" spellCheck={true} className="AddCard_quest" placeholder={"Digite aqui a pergunta"}></p>}
            { side === 'back' && <p contentEditable="true" spellCheck={true} className="AddCard_quest" placeholder={"Digite aqui a resposta"}></p>}
            </div>
            { side === 'front' && <div style={{height: "3rem", margin: "1rem"}}/>}
        </div>
        <div className="AddCard_missAndHit">
            {side === 'front' && 
            <Link to={"/addCard/back"}><button className="AddButton_staps">Próximo</button></Link>
            || side === 'back' && 
            <button className="AddButton_staps">Salvar Card</button>
            }    
        </div>
        </>
    )
}
export default Add;