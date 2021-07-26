import { useState, useEffect } from 'react'
import { ICardOrdered } from '../domain/useCase/orderCard'
import '../css/Revision.css'

export interface Props {
    dataCards: ICardOrdered[]
    buttonIndex: number
}

export default function Revision({dataCards, buttonIndex}: Props) {
    const [front, setFront] = useState('')
    const [back, setBack] = useState('')
    const [card, setCard] = useState<ICardOrdered[]>([])

    useEffect(() => {
        setCard(dataCards)
    }, [dataCards])

    useEffect(() => {
        if (card.length && buttonIndex <= card.length) {
            setFront(card[buttonIndex - 1].front)
            setBack(card[buttonIndex - 1].back)
        }
        else {
            setFront("Não há mais cards.")
            setBack("Não há mais cards.")
        }
    }, [buttonIndex])

    return(
        <>
        <div className="card">
            <h1 className="card_title">Title</h1>
            <p className="card_quest">{front}</p>
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