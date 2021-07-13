import Status from './Status'
import Cards from './Cards'
import New from './New'
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
        
            <header className="dashboard__header__status">
                <Status dataCards={orderCards} buttonIndex={index} />
            </header>

            <main>
                <Cards dataCards={orderCards} buttonIndex={index} />

                <section className="dashboard__content__next">
                    <button className="buttons" id="dashboard__content__erro" onClick={resetCard}>Errei</button>
                    <button className="buttons" id="dashboard__content__acerto" onClick={resetCard}>Acertei</button>
                </section>
            </main>
            
            <footer>
                <New/>
            </footer>
            
        </div>
	)
}

export default Dashboard