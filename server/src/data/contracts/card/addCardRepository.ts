import { ICard } from '@/domain/entities/card/card'

export interface IAddCardRepository {
    addCard(card: ICard): Promise<void>
}