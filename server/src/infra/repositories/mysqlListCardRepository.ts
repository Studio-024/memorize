import { IListCardRepository } from "@/data/contracts/listCardRepository";
import { ICardMysqlViewModel } from "../models/cardMysqlViewModel";
import { pool } from "../mysqlPoolConnection";

export class ListCardRepository implements IListCardRepository{
    async listCard(): Promise<ICardMysqlViewModel[]>{  
        try {
            console.log(process.env.USER_KEY)
            const [rows] =  await pool.query<ICardMysqlViewModel[]>( 'select * from flashcard', []); 
            console.log(rows)
            return rows
        } catch (error) {
            console.log(error)
            throw new Error(error)
            
       }
    }
}