import { getCard } from '../service/api';
import { useEffect, useState } from 'react';
import Revision from '../components/Revision';
import { ToastContainer } from 'react-toastify';
import {Route, Switch, Redirect } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.min.css';
import { ICardOrdered } from '../domain/useCase/orderCard';
import { OrderCardService } from '../service/OrderCardService';
import '../css/AddButton.css';
import Add from '../components/Add';
import { errorHelper } from '../utils/errorHelper';



const Dashboard = () => { 
    const [orderCards, setOrderCards ] = useState<ICardOrdered[]>([])

    function handleClickAdd(){
        document.getElementById('AddCard')!.style.display = 'initial'
    }
    async function downloadCards() {
        const orderObj = new OrderCardService();
        orderObj.order(getCard()) 
            .then(data => setOrderCards(data))
            .catch(err => errorHelper.apiError(err.response.statusCode))

    }

    useEffect(() => {
        downloadCards()
    }, [])

	return (
        <div className='container' id='containerCard'>
            <main>
                <ToastContainer />
                <Add/>
              <Switch>
                    <Route exact path={`/dashboard`}>
                        <Redirect to={'/dashboard/front'} />
                    </Route> 
                    <Route exact path={`/dashboard/front`}> 
                       <Revision dataCards={orderCards} />
                    </Route>
                    <Route exact path={`/dashboard/back`}>
                     <Revision dataCards={orderCards} />
                    </Route>
                </Switch>

                <button className='crud_button' onClick={handleClickAdd}>+</button>
            </main>
        </div>
	)
}

export default Dashboard