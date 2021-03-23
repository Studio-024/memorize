import React from 'react';
import Status from './Status';
import Cards from './Cards';
import New from './New';


const Dashboard = () => { 
    return(
        <div className="conteiner">
            <Status/>
            <Cards/>
            <New/>
        <div className="three" id="print_cod"></div>
    </div>
    );
}

export default Dashboard