import { getCard } from '../service/api'
import { useEffect, useState } from 'react'
import Revision from '../components/Revision'
import { ToastContainer } from 'react-toastify'
import { Route, Switch } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.min.css'
import { ICardOrdered } from '../domain/useCase/orderCard'
import { OrderCardService } from '../service/OrderCardService'
import AddButton from '../components/AddButton'

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
        <div className='container' id='containerCard'>
            <main>
                <ToastContainer />
                <Switch>
                    <Route exact path={`/dashboard`}>
                        <Revision dataCards={orderCards} />
                    </Route>
                    <Route exact path={`/dashboard/front`}>
                        {/* Front */}
                        <Revision dataCards={orderCards}/>
                    </Route>
                    <Route exact path={`/dashboard/back`}>
                        {/* Back */}
                        <Revision dataCards={orderCards}/>
                    </Route>
                </Switch>
                <AddButton/>
            </main>
        </div>
	)
}

export default Dashboard