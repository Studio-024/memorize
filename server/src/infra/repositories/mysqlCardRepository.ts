import { IAddCardRepository } from '@/data/contracts/card/addCardRepository'
import { GetReviewByCod } from '@/data/contracts/card/getReviewByCod'
import { IListCardRepository } from '@/data/contracts/card/listCardRepository'
import { IUpdateCardReviewRepository } from '@/data/contracts/card/updateCardReviewRepository'

import { ICardViewModel } from '@/data/models/cardViewModel'
import { ICardMysqlViewModel } from '../models/cardMysqlViewModel'
import { IReviewMysqlViewModel } from '../models/reviewMysqlViewModel'

import { pool } from '../mysqlPoolConnection'

export class MysqlcardRepository implements
    IListCardRepository,
    IAddCardRepository,
    IUpdateCardReviewRepository,
    GetReviewByCod {
    private userId: number | null

    constructor() {
        this.userId = null
    }

    setUserId(id: number) {
         this.userId = id
    }
    async listCard(): Promise<ICardMysqlViewModel[]> {
        try {
            const [rows] =  await pool.query<ICardMysqlViewModel[]>(` SELECT flashcards.cod, front, back, interval_time, review_cod from flashcards INNER JOIN reviews ON flashcards.review_cod = reviews.cod WHERE flashcards.user_cod = ${this.userId} ORDER BY reviews.interval_time asc `, []) 
            return rows
        } catch (error: any) {
            throw new Error(error)
       }
    }

    async addCard(card: ICardViewModel): Promise<void> {
        try {
            await pool.query(` INSERT INTO reviews SET streak= 0 ` )
            const lastColumnCreated: any = await pool.query('SELECT @@IDENTITY')
            if(lastColumnCreated) {
                await pool.query(` INSERT INTO flashcards SET ? `, { 
                    front: card.front, 
                    back: card.back, 
                    review_cod: lastColumnCreated[0][0]['@@IDENTITY'], 
                    user_cod: this.userId 
                })
            }

        } catch (error: any) {
            throw new Error(error.stack)
        }
    }

    async updateCardReview(cardReview: IReviewMysqlViewModel ): Promise<void> {
        try {
            await pool.query(` UPDATE reviews SET streak=${cardReview.streak}, interval_time=${cardReview.interval_time} WHERE cod=${cardReview.cod}`)
            
        } catch(error: any) {
            throw new Error(error.stack)
        }
    }
    
    async getReviewByCod(options: number) {
        try {
            const [rows] =  await pool.query<IReviewMysqlViewModel[]>(` SELECT * FROM reviews WHERE cod=${options} `, []) 
            return rows[0]
        } catch (error: any) {
            throw new Error(error)
       }
    }
}