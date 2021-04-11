import { useEffect, useState } from 'react'
import { ICardOrdered } from '../domain/useCase/orderCard'

interface Props {
    dataCards: ICardOrdered[]
    buttonIndex: number
}

export default function Status({dataCards, buttonIndex}: Props) {
    const [reviewed, setReviewed] = useState(0)
    const [missing, setMissing] = useState(0)
    const [total, setTotal] = useState(0)

    useEffect(() => {
        setTotal(dataCards.length)
    })

    useEffect(() => {
        if(dataCards && buttonIndex > 0 && buttonIndex <= dataCards.length) {
            setReviewed(reviewed + 1)
            setMissing(dataCards.length - reviewed - 1) //n adianta colocar antes kk
        }

    }, [buttonIndex])

    return(
        <section>
            {/* Left */}
            <div className="dashboard__header__left">
                <span>Revisado: {reviewed}</span>
            </div>
            {/* Right */}
            <div className="dashboard__header__right">
                <span>Falta: {missing}</span>  
                <span>Total: {total}</span>
            </div>
        </section>
    )
}