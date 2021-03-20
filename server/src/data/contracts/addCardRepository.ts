import { ICard } from "@/domain/entities/card";

export interface IAddCardRepository {
    addCard(card: ICard): Promise<void>
}