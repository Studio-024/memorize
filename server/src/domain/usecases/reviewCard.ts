import { IReview } from '../entities/card/review'

export interface IReviewCardUseCase { 
    reviewCard(review: IReview): Promise<void>
}