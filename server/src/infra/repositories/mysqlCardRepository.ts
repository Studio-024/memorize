import { IAddCardRepository } from "@/data/contracts/addCardRepository";
import { GetReviewByCod } from "@/data/contracts/getReviewByCod";
import { IListCardRepository } from "@/data/contracts/listCardRepository";
import { IupdateCardReviewRepository } from "@/data/contracts/updateCardReviewRepository";
import { ICardViewModel } from "@/data/models/cardViewModel";
import { RowDataPacket } from "mysql2";
import { ICardMysqlViewModel } from "../models/cardMysqlViewModel";
import { IReviewMysqlViewModel } from "../models/reviewMysqlViewModel";
import { pool } from "../mysqlPoolConnection";

export class MysqlcardRepository implements IListCardRepository, IAddCardRepository, IupdateCardReviewRepository, GetReviewByCod{
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
            // guambiarra a gente aceita
            await pool.query(`INSERT INTO reviews SET streak= 0` );
            const test: any = await pool.query('SELECT @@IDENTITY;')
            await pool.query(`INSERT INTO flashcards SET ?`, {front: card.front, back: card.back, review_cod: test[0][0]['@@IDENTITY']});


        } catch (error) {
            throw new Error(error.stack)
        }
    }
    async updateCardReview(cardReview: IReviewMysqlViewModel ): Promise<void>{
        try{
            await pool.query(`UPDATE reviews SET streak=${cardReview.streak}, interval_time=${cardReview.interval_time} WHERE cod= ${cardReview.cod}`)
            
        }catch(error){
            console.error(error.stack)
            throw new Error(error.stack)
            
        }
    }
    
    async getReviewByCod(options: number){
        try {
            const [rows] =  await pool.query<IReviewMysqlViewModel[]>( `select * from reviews where cod=${options}`, []); 
            return rows[0]
        } catch (error) {
            throw new Error(error)
       }
    }
}