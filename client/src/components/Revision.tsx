import '../css/Revision.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ICardOrdered } from '../domain/useCase/orderCard'
import Progress from './Progress'
import {  reviewCard } from '../service/api'
import { errorHelper } from '../utils/errorHelper'

export interface Props {
    dataCards: ICardOrdered[]
}

const Revision = ({dataCards}: Props) => {
    const [index, setIndex] = useState(0)
    const [card, setCard] = useState<ICardOrdered[]>([{cod: 0, front: 'null', back: 'null', review_cod: 0}])
    const [route, setRoute] = useState('/dashboard/front')
    
    useEffect(() => { 
        if (dataCards.length !== 0) {
            setCard(dataCards)
        }
     
    }, [dataCards])

    const switchRoute = () => {
        switch (route) {
            case '/dashboard/front':
                setRoute('/dashboard/back')
                break
            case '/dashboard/back':
                setRoute('/dashboard/front')
                break
        }
    }

    const review = (userGrade: number) => {
        if (card[index].cod !== -1)
        reviewCard(userGrade, card[index].review_cod)
            .then(()=>{nextCard()})
            .catch(err => errorHelper.apiError(err.response.statusCode))
    }

    const nextCard = () => {
        if (index+1 < card.length) { 
            setIndex(index + 1)
        } else {
            card[index].cod = -1
            card[index].front = 'Não há mais cards'
            card[index].back = 'Não há mais cards'
            switchRoute()
        }
    }
    
    return (
        <>
        <div className='card'>
            <div id='card_background' />
            <h1 className='card_title'>Title</h1>
            
            <p className='card_quest'>{
                route === '/dashboard/front'
                    ? card[index].front 
                    : card[index].back
            }</p>

            <div className='card_footer'>
                <Progress Value={index+1} Max={card.length} Color={"rgb(62 255 53)"} />
                <Link to={route} onClick={switchRoute}><div>Virar Card</div></Link>
            </div>
        </div>

        <div className='card_missAndHit'>
            <Link to='/dashboard/front'>
                <button id='card_missed' onClick={() => {review(2)}}>Errei</button>
            </Link>

            <Link to='/dashboard/front'>
                <button id='card_hit' onClick={() => {review(4)}}>Acertei</button>
            </Link>
            
        </div>
        </>
    )
}

export default Revision