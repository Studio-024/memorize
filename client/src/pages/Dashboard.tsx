import React from 'react'
import { useEffect, useState} from 'react'
import AddCard  from '../components/AddQuest'
import RevisionQuest from '../components/RevisionQuest'
import RevisionResponse from '../components/RevisionResponse'
import { getCard } from '../service/api'
import { ICardOrdered } from '../domain/useCase/orderCard'
import { OrderCardService } from '../service/OrderCardService'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

const CardContext = React.createContext('');

const Dashboard = () => { 
    const [orderCards, setOrderCards ] = useState<ICardOrdered[]>([])
    const [index, setIndex] = useState(0)
    let match = useRouteMatch();
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
                <ToastContainer />
                <Switch>                
                    <Route exact path={`/dashboard/front`}>
                        <RevisionFront dataCards={orderCards} buttonIndex={index}/>
                    </Route>
                    <Route exact path={`/dashboard/back`}>
                        <RevisionBack dataCards={orderCards} buttonIndex={index}/>
                    </Route>
                </Switch>
            </main>
        </div>
	)
}

export default Dashboard