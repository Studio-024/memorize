import { IReview } from '@/domain/entities/review'

export interface IReviewCardViewModel extends IReview {
    interval_time: number
    easiness_factor: number
    streak: number
}
