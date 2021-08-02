interface IReview {
    streak: number
    interval_time: number
    revison_date: Date
    userGrade: number
    easinessFactor: number
}

export interface IReviewCard{ 
    reviewCard(card: IReview): Promise<void>
}

