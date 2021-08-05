import { ReviewCardService } from "@/data/services/reviewCard"
import { MysqlcardRepository } from "@/infra/repositories/mysqlCardRepository"
import { IController } from "@/presentation/contracts/controller"
import { reviewCardController } from "@/presentation/controllers/reviewCardController"

export const makeReviewCardController = (): IController => {
    const repo = new MysqlcardRepository()

    const review = new ReviewCardService(repo)

    return new reviewCardController(review)
}