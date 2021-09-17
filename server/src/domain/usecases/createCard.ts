import { ICard } from '../entities/card/card'

export interface ICreateCard { 
    save(card: Omit<ICard, 'cod'>): Promise<void>
}