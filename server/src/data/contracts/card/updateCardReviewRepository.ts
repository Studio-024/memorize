import { IReviewCardViewModel } from '../../models/reviewCardViewModel'

export interface IUpdateCardReviewRepository {
    updateCardReview(card: IReviewCardViewModel): Promise<void>
}