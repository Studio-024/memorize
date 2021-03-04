import { IAddCardRepository } from "@/data/contracts/addCardRepository";
import { IListCardRepository } from "@/data/contracts/listCardRepository";
import { ICardViewModel } from "@/data/models/cardViewModel";
import { ICardMysqlViewModel } from "../models/cardMysqlViewModel";
import { pool } from "../mysqlPoolConnection";

export class MysqlcardRepository implements IListCardRepository, IAddCardRepository{
    async listCard(): Promise<ICardMysqlViewModel[]>{  
        try {
            const [rows] =  await pool.query<ICardMysqlViewModel[]>( 'select * from flashcard', []); 
            return rows
        } catch (error) {
            throw new Error(error)
       }
    }

    async addCard(card: ICardViewModel): Promise<void>{
        try {
        await pool.query(`INSERT INTO flashcard SET ?`, card);
    } catch (error) {
            throw new Error(error.stack)
        }
    }
}