import { useEffect, useState } from 'react'
import RevisionFront from '../components/Revision'
import RevisionBack from '../components/Revision'
import { getCard } from '../service/api'
import { ICardOrdered } from '../domain/useCase/orderCard'
import { OrderCardService } from '../service/OrderCardService'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import { Route, Switch } from 'react-router-dom'


const Dashboard = () => { 
    const [orderCards, setOrderCards ] = useState<ICardOrdered[]>([])


    async function downloadCards() {
        const orderObj = new OrderCardService()
        const data = await orderObj.order(getCard())

        setOrderCards(data)
    }

    useEffect(() => {
        downloadCards()
    }, [])
    
	return(
        <div className="container" id="containerCard">
            <main>
                <ToastContainer />
                <Switch>     
                    <Route exact path={`/dashboard`}>
                        <RevisionFront dataCards={orderCards} />
                    </Route>           
                    <Route exact path={`/dashboard/front`}>
                        <RevisionFront dataCards={orderCards}/>
                    </Route>
                    <Route exact path={`/dashboard/back`}>
                        <RevisionBack dataCards={orderCards}/>
                    </Route>
                </Switch>
            </main>
        </div>
	)
}

export default Dashboard