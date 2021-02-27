import {ICardViewModel} from '@/data/models/cardViewModel'

import {RowDataPacket} from 'mysql2'

export interface ICardMysqlViewModel extends ICardViewModel, RowDataPacket{
    cod: number,
    question: String,
    response: String,
    timeEnd: Date,
    timeNext: Date
}
      