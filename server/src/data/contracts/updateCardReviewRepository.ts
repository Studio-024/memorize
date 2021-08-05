import { IReviewCardViewModel } from "../models/reviewCardViewModel";

export interface IupdateCardReviewRepository {
    updateCardReview(card: IReviewCardViewModel): Promise<void>
}