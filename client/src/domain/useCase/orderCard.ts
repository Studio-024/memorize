import { ICard } from '../entities/Card'

export interface ICardOrdered {
    cod: number,
    front: string
    back: string
}

export interface OrderCardUseCase {
    order(data: Promise<ICard[]>): Promise<ICardOrdered[]>
}