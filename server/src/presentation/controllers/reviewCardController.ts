
import { IReview } from "@/domain/entities/review";
import { IReviewCardUseCase } from "@/domain/usecases/reviewCard";
import { IController } from "../contracts/controller";
import { errorHandler, HttpRequest, HttpResponse, noContent } from "../contracts/http";

export class reviewCardController implements IController {
    constructor(
        private readonly reviewCardUseCase: IReviewCardUseCase 
    ){}


    // add infra viewModel
    async handle(request: HttpRequest<IReview>): Promise<HttpResponse>{
        const ReviewCard: IReview = {
            cod: request.query!.cod,
            streak : request.body!.streak,
            interval_time: request.body!.interval_time,
            userGrade: request.body!.userGrade
        }


        try {
           await this.reviewCardUseCase.reviewCard(ReviewCard)
           return noContent()

        } catch (error) {
           return errorHandler(error.response) 
        }


    }
}