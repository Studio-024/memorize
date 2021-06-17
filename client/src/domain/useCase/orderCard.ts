import { ICard } from "../entities/Card"

export interface ICardOrdered {
    question: string
    response: string
}

export interface OrderCardUseCase {
    order(data: Promise<ICard[]>): Promise<ICardOrdered[]>
}