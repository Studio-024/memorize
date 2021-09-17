import { ICard } from '../domain/entities/Card'
import { OrderCardUseCase, ICardOrdered } from '../domain/useCase/orderCard'

export class OrderCardService implements OrderCardUseCase {
    
   async order(data: Promise<ICard[]>): Promise<ICardOrdered[]> {
        let cards = await data

        let cardOrdered = cards.map(element => ({
            cod: element.cod,
            front: element.front,
            back: element.back,
            review_cod: element.review_cod
            
        }))

        return cardOrdered
    }
}