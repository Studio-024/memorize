import { ICard } from '../entities/Card'

export interface ICardOrdered {
    front: string
    back: string
}

export interface OrderCardUseCase {
    order(data: Promise<ICard[]>): Promise<ICardOrdered[]>
}