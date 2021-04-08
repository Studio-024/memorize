import { useEffect, useState } from "react"
import { ICardOrdered } from "../domain/useCase/orderCard"

interface Props{
    dataCards: ICardOrdered[]
    buttonIndex: number
}

export default function Status({dataCards, buttonIndex}: Props) {
    const [reviewed, setReviewed] = useState(0)
    const [last, setLast] = useState(0)
    const [total, setTotal] = useState(0)

    useEffect(() => {
        setTotal(dataCards.length)
    })

    useEffect(() => {
        if(dataCards && buttonIndex != 0) setReviewed(reviewed + 1)
        setLast(dataCards.length - reviewed)

    }, [buttonIndex])

    return(
        <section>
            {/* Left */}
            <div className="dashboard__header__left">
                <span>Revisado: {reviewed}</span>
            </div>
            {/* Right */}
            <div className="dashboard__header__right">
                <span>Falta: {last}</span>  
                <span>Total: {total}</span>
            </div>
        </section>
    )
}