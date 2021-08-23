import { IReviewCardViewModel } from '@/data/models/reviewCardViewModel'
import { RowDataPacket } from 'mysql2'

export interface IReviewMysqlViewModel extends IReviewCardViewModel, RowDataPacket {
    cod: number
}