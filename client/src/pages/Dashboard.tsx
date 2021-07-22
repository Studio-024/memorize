import Revision from '../components/Revision'
import { getCard } from '../service/api'
import { useEffect, useState} from 'react'
import React from 'react'
import { ICardOrdered } from '../domain/useCase/orderCard'
import { OrderCardService } from '../service/OrderCardService'
import AddCard  from '../components/AddCard'
const CardContext = React.createContext('');

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
                <Revision dataCards={orderCards} buttonIndex={index}/>
                <AddCard dataCards={orderCards} buttonIndex={index}/>
            </main>
        </div>
	)
}

export default Dashboard