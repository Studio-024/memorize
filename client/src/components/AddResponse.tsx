import { useState, useEffect } from 'react'
import { ICardOrdered } from '../domain/useCase/orderCard'
import '../css/AddCard.css'


export default function AddCard() {
    return(
        <>
        <div className="card">
            
            <div id="container_quest">
                <p contentEditable="true" spellCheck={true} className="card_quest" placeholder="Digite aqui a resposta"></p>
            </div>
        </div>
        <div className="card_missAndHit">
            <button className="button_staps" >Salvar Card</button>
        </div>
        </>
    )
}