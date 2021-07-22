import { useState, useEffect } from 'react'
import { ICardOrdered } from '../domain/useCase/orderCard'
import '../css/Revision.css'

export interface Props{
    dataCards: ICardOrdered[]
    buttonIndex: number
}

export default function Revision({dataCards, buttonIndex}: Props) {
    const [question, setQuestion] = useState('')
    const [response, setResponse] = useState('')
    const [card, setCard] = useState<ICardOrdered[]>([])

    useEffect(() => {
        setCard(dataCards)
    }, [dataCards])

    useEffect(() => {
        if (card.length && buttonIndex <= card.length) {
            setQuestion(card[buttonIndex - 1].question)
            setResponse(card[buttonIndex - 1].response)
        }
        else {
            setQuestion("Não há mais cards.")
            setResponse("Não há mais cards.")
        }
    }, [buttonIndex])
    return(
        <>
        <div className="card">
            <h1 className="card_title">Title</h1>
            <p className="card_quest">{question}</p>
            <div className="card_footer">
                <span>Total:&nbsp;<a>2/11</a></span> 
                <div> Virar Card</div>
            </div>
        </div>
            <div className="card_missAndHit">
            <button id="card_missed">Errei</button>
            <button id="card_hit" >Acertei</button>
        </div>
        </>
    )
}