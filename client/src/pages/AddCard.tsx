import { getCard } from '../service/api'
import { useEffect, useState} from 'react'
import React from 'react'
import { ICardOrdered } from '../domain/useCase/orderCard'
import { OrderCardService } from '../service/OrderCardService'
import AddQuest  from '../components/AddQuest'
import AddResponse  from '../components/AddResponse'
import { Link, Route, Router, Switch, useRouteMatch } from 'react-router-dom'
const CardContext = React.createContext('');


const AddCard = () => { 
    let match = useRouteMatch();
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
                    <Switch>
                        <Route path={`${match.path}/Quest`}>
                            <AddQuest/>
                        </Route>
                        <Route path={`${match.path}/Response`}>
                            <AddResponse/>
                            {console.log(match.path)}
                        </Route>
                    </Switch>
            </main>
        </div>
	)
}

export default AddCard