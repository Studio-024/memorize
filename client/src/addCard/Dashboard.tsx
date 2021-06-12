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
    
    function saveCard(){
           
        //Reset input Quest cards
        const dashboard__New_content__quest_textArea_Remove = document.getElementById("dashboard__New_content__quest_textArea");
        dashboard__New_content__quest_textArea_Remove?.parentNode?.removeChild(dashboard__New_content__quest_textArea_Remove);
        const dashboard__content__quest_input = document.getElementById("dashboard__content__quest_input");
        const dashboard__New_content__quest_textArea = document.createElement("textarea");
        dashboard__content__quest_input?.appendChild(dashboard__New_content__quest_textArea);
        dashboard__New_content__quest_textArea.setAttribute("id", "dashboard__New_content__quest_textArea")
        dashboard__New_content__quest_textArea.setAttribute("placeholder", "Digite a pergunda do seu novo card aqui!")

        //Reset input Response Card
        const dashboard__New_content__response_textArea_Remove = document.getElementById("dashboard__New_content__response_textArea")
        dashboard__New_content__response_textArea_Remove?.parentNode?.removeChild(dashboard__New_content__response_textArea_Remove);
        const dashbord__content__response_input = document.getElementById("dashboard__content__response_input");
        const dashboard__New_content__response_textArea = document.createElement("textarea");
        dashbord__content__response_input?.appendChild(dashboard__New_content__response_textArea);
        dashboard__New_content__response_textArea.setAttribute("id", "dashboard__New_content__response_textArea")
        dashboard__New_content__response_textArea.setAttribute("placeholder", "Digite a resposta do seu novo card aqui!")
    }

	return(
        <div className="conteiner" id="containerNewCard" style={{display: "none"}}>
        
        <header className="dashboard__header__status">
            <Status dataCards={orderCards} buttonIndex={index}/>
        </header>

        <main>
            <Cards dataCards={orderCards} buttonIndex={index} />

            <section className="dashboard__content__next">
                <button className="buttons" id="dashboard__content__saveCard" onClick={saveCard}>Salvar Card</button>

            </section>
        </main>
        
        <footer>
            <New/>
        </footer>
            {/*Printa o cod*/}
            <div className="three" id="print_cod"></div>
    </div>
	);
}

export default Dashboard;