import { ICardViewModel } from '../models/cardViewModel'

export interface IListCardRepository {
    listCard(): Promise<ICardViewModel[]>
}