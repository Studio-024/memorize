import { ReviewCardService } from '@/data/services/card/reviewCard'
import { IController } from '@/presentation/contracts/controller'
import { reviewCardController } from '@/presentation/controllers/reviewCardController'
import { repo } from './mysqlCardRepo'

export const makeReviewCardController = (): IController => {

    const review = new ReviewCardService(repo, repo)

    return new reviewCardController(review)
}