import Cards from '../components/Cards'
import { getCard } from '../service/api'
import { useEffect, useState } from 'react'
import { ICardOrdered } from '../domain/useCase/orderCard'
import { OrderCardService } from '../service/OrderCardService'

const Dashboard = () => { 
    const [orderCards, setOrderCards ] = useState<ICardOrdered[]>([])
    const [index, setIndex] = useState(0)
    
    useEffect(() => {
        async function downloadCards() {
            const orderObj = new OrderCardService()
            const data = await orderObj.order(getCard())

            setOrderCards(data)
        }

        downloadCards()

    }, [])
    function resetCard() {
        setIndex(index + 1)
        document.getElementById("dashboard__content__response")!.style.display = "none"
        document.getElementById("dashboard__content__SeeResponse")!.style.display = "initial"
        
    }

	return(
        <div className="container" id="containerCard">
            <main>
                <Cards dataCards={orderCards} buttonIndex={index}/>
                <div className="card_missAndHit">
                    <button id="card_missed" onClick={resetCard}>Errei</button>
                    <button id="card_hit" onClick={resetCard}>Acertei</button>
                </div>
            </main>
        </div>
	)
}

export default Dashboard