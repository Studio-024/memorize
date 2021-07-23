import { ICard } from '../domain/entities/Card'
import { OrderCardUseCase, ICardOrdered } from '../domain/useCase/orderCard'

export class OrderCardService implements OrderCardUseCase {
    
   async order(data: Promise<ICard[]>): Promise<ICardOrdered[]> {
        let cards = await data

        let cardOrdered = cards.map(element => ({
            front: element.front,
            back: element.back
        }))

        return cardOrdered
    }
}