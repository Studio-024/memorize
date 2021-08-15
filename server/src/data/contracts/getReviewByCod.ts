import { IReviewCardViewModel } from "../models/reviewCardViewModel";

export interface GetReviewByCod {
    getReviewByCod(cod: number): Promise<IReviewCardViewModel>
}
