import React from 'react';
import Status from './Status';
import Cards from './Cards';
import New from './New';

interface Props {
    quest: string;
    response: string;
}

const Dashboard = ({quest, response}: Props) => { 
    return(
    <div className="conteiner">
        <Status/>
        
        <Cards quest={quest} response={response} />
            
        <New/>
            {/*Printa o cod*/}
            <div className="three" id="print_cod"></div>
    </div>
    );
}

export default Dashboard