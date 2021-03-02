import { IListCardRepository } from "@/data/contracts/listCardRepository";
import { ICardMysqlViewModel } from "../models/cardMysqlViewModel";
import { pool } from "../mysqlPoolConnection";

export class ListCardRepository implements IListCardRepository{
    async listCard(): Promise<ICardMysqlViewModel[]>{  
        try {
            const [rows] =  await pool.query<ICardMysqlViewModel[]>( 'select * from flashcard', []); 
            return rows
        } catch (error) {
            throw new Error(error)
            
       }
    }
}