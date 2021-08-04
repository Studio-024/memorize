import { getCard } from '../service/api'
import { useEffect, useState} from 'react'
import { ICardOrdered } from '../domain/useCase/orderCard'
import { OrderCardService } from '../service/OrderCardService'
import AddQuest  from '../components/Add'
import AddResponse  from '../components/Add'
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom'

const AddCard = () => { 
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
                <Switch>
                    <Route path={`/addCard/front`}>
                        <AddQuest add={"front"}/>
                    </Route>
                    <Route path={`/addCard/back`}>
                        <AddResponse add={"back"}/>
                    </Route>
                </Switch>
            </main>
        </div>
	)
}

export default AddCard