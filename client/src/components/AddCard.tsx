import { useState, useEffect } from 'react'
import { ICardOrdered } from '../domain/useCase/orderCard'
import '../css/Revision.css'

export interface Props{
    dataCards: ICardOrdered[]
    buttonIndex: number
}

export default function AddCard({dataCards, buttonIndex}: Props) {
  
    return(
        <>
        <div className="card">
            <textarea className="card_title" placeholder="Digite o titulo"></textarea>
            <textarea className="card_quest" placeholder="Digite aqui a pergunta"></textarea>
        </div>
            <div className="card_missAndHit">
            <button id="card_hit" >Proximo</button>
        </div>
        </>
    )
}