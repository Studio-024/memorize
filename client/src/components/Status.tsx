import React, { ReactNode } from 'react';

export default function Status(){
    return(
        <div className="status">
            <div className="left">
                <div>Revisado: </div>
            </div>
            <div className="right">
                <div>Falta: </div>  
                <div>Total: </div>
            </div>
        </div>
    )
}