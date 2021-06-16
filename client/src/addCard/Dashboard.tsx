import Status from '../dashboardComponents/Status';
import Cards from './Cards';
import New from './New';
import { useState } from 'react';
import { ICardOrdered } from '../domain/useCase/orderCard';

export interface Props{
    dataCards: ICardOrdered[]
    buttonIndex: number
}

const Dashboard = () => { 
    const [orderCards, setOrderCards ] = useState<ICardOrdered[]>([])
    const [index, setIndex] = useState(0)
    
	return(
        <div className="container" id="containerNewCard" style={{display: "none"}}>
            <header className="dashboard__header__status">
                <Status dataCards={orderCards} buttonIndex={index} />
            </header>

            <main>
                <Cards/>
            </main>
            
            <footer>
                <New/>
            </footer>
        </div>
	);
}

export default Dashboard;