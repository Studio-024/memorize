import { IReview } from "../entities/review";


export interface IReviewCard{ 
    reviewCard(card: IReview): Promise<void>
}

