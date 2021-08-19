import { getCard } from '../service/api';
import { useEffect, useState } from 'react';
import Revision from '../components/Revision';
import { ToastContainer } from 'react-toastify';
import { Link, Route, Switch, useHistory } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.min.css';
import { ICardOrdered } from '../domain/useCase/orderCard';
import { OrderCardService } from '../service/OrderCardService';
import '../css/AddButton.css';
import Add from '../components/Add';

const Dashboard = () => { 
    let history = useHistory();
    const [orderCards, setOrderCards ] = useState<ICardOrdered[]>([]);

    function handleClickAdd(){
        document.getElementById('AddContainer')!.style.display = 'initial';
    }
    async function downloadCards() {
        const orderObj = new OrderCardService();
        const data = await orderObj.order(getCard());

        setOrderCards(data);
    }

    useEffect(() => {
        downloadCards();
    }, [])

	return(
        <div className='container' id='containerCard'>
            <main>
                <ToastContainer />
                <Add/>
                <Switch>
                    <Route exact path={`/dashboard`}>
                        <>{history.push('/')}</>
                        <>{history.push('dashboard/front')}</>
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
                <button className="crud_button" onClick={handleClickAdd}>+</button>
            </main>
        </div>
	)
}

export default Dashboard;