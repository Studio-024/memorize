import React, { ReactNode } from 'react';
import Status from './Status';
import Cards from './Cards';
import New from './New';



interface Props {
    quest: string;
    response: string;
}
export default function Dashboard({quest, response}: Props){ 
    return(
    <div className="conteiner">
        <Status/>
        <Cards quest={quest} response={response}/>
        <New/>
    </div>
    );
}
