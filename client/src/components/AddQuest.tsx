import { useState, useEffect } from 'react'
import { ICardOrdered } from '../domain/useCase/orderCard'
import '../css/AddCard.css'

export default function AddQuest() {
    return(
        <>
        <div className="card">
            <div id="container_title">
                <h1 contentEditable="true"  spellCheck={true} className="card_title" placeholder="Digite aqui o titulo"></h1>
            </div>
            <div id="container_quest">
                <p contentEditable="true" spellCheck={true} className="card_quest" placeholder="Digite aqui a pergunta"></p>
            </div>
            <div style={{height: "3rem", margin: "1rem"}}/>
        </div>
            <div className="card_missAndHit">
            <button className="button_staps" >Proximo</button>
        </div>
        </>
    )
}