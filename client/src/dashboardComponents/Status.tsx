import React, { ReactNode } from 'react';

export default function Status(){
    return(
        <div className="dashboard__header__status">
            <div className="dashboard__header__left">
                <div>Revisado: </div>
            </div>
            <div className="dashboard__header__right">
                <div>Falta: </div>  
                <div>Total: </div>
            </div>
        </div>
    )
}