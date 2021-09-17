import { ICard } from '../entities/Card'

export interface ICardOrdered {
    cod: number
    front: string
    back: string
    review_cod: number
}

export interface OrderCardUseCase {
    order(data: Promise<ICard[]>): Promise<ICardOrdered[]>
}