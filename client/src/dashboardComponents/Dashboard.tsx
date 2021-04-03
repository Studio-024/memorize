import Status from './Status';
import Cards from './Cards';
import New from './New';
import {useEffect, useState } from 'react';
import { OrderCardService } from '../service/OrderCardService';
import { getCard } from '../service/apiData';
import { ICardOrdered } from '../domain/useCase/orderCard';


const Dashboard = () => { 
    const [orderCards, setOrderCards ] = useState<ICardOrdered[]>([])
    const [index, setIndex] = useState(0)
    
    useEffect(() => {
        async function downloadCards() {
            const orderObj = new OrderCardService();
            const data = await orderObj.order(getCard());
            setOrderCards(data)
        }

        downloadCards()

    }, [])

	return(
		<div className="conteiner">
        
        {/* Header */}
        <header className="dashboard__header__status">
            <Status dataCards={orderCards} buttonIndex={index}/>
        </header>

        {/* Main */}
        <main>
            <Cards dataCards={orderCards} buttonIndex={index} />

            <section className="dashboard__content__next">
                <button className="buttons" id="dashboard__content__erro" onClick={() => {
                setIndex(index + 1)
                }}>Errei</button>
                <button className="buttons" id="dashboard__content__acerto" onClick={() => {
                setIndex(index + 1)
                }}>Acertei</button>
            </section>
        </main>
        
        {/* Footer */}
        <footer>
            <New/>
        </footer>
            {/*Printa o cod*/}
            <div className="three" id="print_cod"></div>
    </div>
	);
}

export default Dashboard;