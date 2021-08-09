import { IReview } from "@/domain/entities/review";

export interface GetReviewByCod {
    getReviewByCod(cod: number): Promise<IReview>
}
