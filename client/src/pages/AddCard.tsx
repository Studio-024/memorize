import { getCard } from '../service/api'
import { useEffect, useState} from 'react'
import React from 'react'
import { ICardOrdered } from '../domain/useCase/orderCard'
import { OrderCardService } from '../service/OrderCardService'
import AddQuest  from '../components/AddQuest'
import AddResponse  from '../components/AddResponse'
const CardContext = React.createContext('');

const AddCard = () => { 
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
        document.getElementById("dashboard__content__back")!.style.display = "none"
        document.getElementById("dashboard__content__seeBack")!.style.display = "initial"
        
    }

	return(
        <div className="container" id="containerCard">
            <main>
                {/* <AddQuest/> */}
                {/* <AddResponse/> */}
            </main>
        </div>
	)
}

export default AddCard