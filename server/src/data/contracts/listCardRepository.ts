import { ICardViewModel } from "../models/IcardViewModel";

export interface IListCardRepository {
    listCard(): Promise<ICardViewModel[]>
}