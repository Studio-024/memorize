import { ICardViewModel } from '@/data/models/cardViewModel'
import { RowDataPacket } from 'mysql2'

export interface ICardMysqlViewModel extends ICardViewModel, RowDataPacket {
    cod: number
    front: string
    back: string
    interval_time: number
}