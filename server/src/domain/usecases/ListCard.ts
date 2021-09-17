import { ICard } from '../entities/card/card'

export interface IListCard {
    listAll(): Promise<ICard[]>
}