import { useState, useEffect } from 'react'
import '../css/Revision.css'
import { ICardOrdered } from '../domain/useCase/orderCard'
import { Link } from 'react-router-dom'

export interface Props {
    dataCards: ICardOrdered[]
}

const Revision = ({dataCards}: Props) => {
    const [index, setIndex] = useState(0)

    const [card, setCard] = useState<ICardOrdered[]>([{front: "null", back: "null"}])
    const [route, setRoute] = useState("/dashboard/front")
    
    useEffect(() => { 
        if(dataCards.length !== 0){
            setCard(dataCards)
        }
        console.log("dataCards", dataCards)
     
    }, [dataCards])




    const switchRoute = () => {
        if(route == "/dashboard/front"){
            setRoute("/dashboard/back");
        }
        if(route == "/dashboard/back"){
            setRoute("/dashboard/front");
        }
        
    }
    return(
        <>
        <div className="card">
            <h1 className="card_title">Title</h1>
            <p className="card_quest">{
                route === "/dashboard/front" 
                    ? card[index].front 
                    : card[index].back
            }</p>
            <div className="card_footer">
                <span>Total:&nbsp;<a>{index+1}/{card.length}</a></span> 
                <Link to={route} onClick={switchRoute}><div> Virar Card</div></Link>
            </div>
        </div>
            <div className="card_missAndHit">
            <Link to="/dashboard/front">
                <button onClick={() => {
                    if (card.length != 0 && index+1 < card.length) { 
                        setIndex(index + 1)
                    } 
                }} id="card_missed">Errei</button>
            </Link>

            <Link to="/dashboard/front"><button id="card_hit" onClick={() => {
                if (card.length != 0 && index+1 < card.length) { 
                    setIndex(index + 1)
                } 
            }}>Acertei</button></Link>
            
        </div>
        </>
    )
}
export default Revision;