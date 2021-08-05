import { IAddCardRepository } from "@/data/contracts/addCardRepository";
import { IListCardRepository } from "@/data/contracts/listCardRepository";
import { IupdateCardReviewRepository } from "@/data/contracts/updateCardReviewRepository";
import { ICardViewModel } from "@/data/models/cardViewModel";
import { ICardMysqlViewModel } from "../models/cardMysqlViewModel";
import { IReviewMysqlViewModel } from "../models/reviewMysqlViewModel";
import { pool } from "../mysqlPoolConnection";

export class MysqlcardRepository implements IListCardRepository, IAddCardRepository, IupdateCardReviewRepository{
    async listCard(): Promise<ICardMysqlViewModel[]>{  
        try {
            const [rows] =  await pool.query<ICardMysqlViewModel[]>( 'select * from flashcards', []); 
            return rows
        } catch (error) {
            throw new Error(error)
       }
    }

    async addCard(card: ICardViewModel): Promise<void>{
        try {
            await pool.query(`INSERT INTO flashcards SET ?`, card);
        } catch (error) {
            throw new Error(error.stack)
        }
    }
    async updateCardReview(cardReview: IReviewMysqlViewModel ): Promise<void>{
        const updateQuery = {
            streak: cardReview.streak,
            interval_time: cardReview.interval_time,
            cod: cardReview.cod
        }

        try{
            await pool.query(`UPDATE reviews SET streak=${updateQuery.streak}, interval_time=${updateQuery.interval_time} WHERE cod= ${updateQuery.cod}`)
            
        }catch(error){
            console.error(error.stack)
            throw new Error(error.stack)
            
        }
    }
}