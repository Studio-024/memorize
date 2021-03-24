import React, { ReactNode } from 'react';
import Status from './Status';
import Cards from './Cards';
import New from './New';
import Hit from './Hit';


interface Props {
    quest: string;
    response: string;
}
export default function Dashboard({quest, response}: Props){ 
    return(
    <div className="conteiner">
        
        {/* Header */}
        <header className="dashboard__header__status">
            <Status/>
        </header>

        {/* Main */}
        <main>
            <Cards quest={quest} response={response}/>
            <Hit/>
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
