import { ICard } from "../entities/card";

export interface IListCard{
    listAll(): Promise<ICard[]>
}
