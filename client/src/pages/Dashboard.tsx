import RevisionFront from '../components/Revision'
import RevisionBack from '../components/Revision'
import { getCard } from '../service/api'
import { useEffect, useState} from 'react'
import { ICardOrdered } from '../domain/useCase/orderCard'
import { OrderCardService } from '../service/OrderCardService'
import { Route, Switch, useRouteMatch } from 'react-router-dom'

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

	return(
        <div className="container" id="containerCard">
            <main>
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