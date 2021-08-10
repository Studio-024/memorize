import { IReview } from "../entities/review";

export interface IReviewCardUseCase { 
    reviewCard(review: IReview): Promise<void>
}