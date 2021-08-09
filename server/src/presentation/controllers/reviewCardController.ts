
import { IReview } from "@/domain/entities/review";
import { IReviewCardUseCase } from "@/domain/usecases/reviewCard";
import { IController } from "../contracts/controller";
import { errorHandler, HttpRequest, HttpResponse, noContent } from "../contracts/http";
import { IReviewPresentationViewModel } from "../view-models/reviewPresentationViewModel";

export class reviewCardController implements IController {
    constructor(
        private readonly reviewCardUseCase: IReviewCardUseCase 
    ){}


    async handle(request: HttpRequest<IReviewPresentationViewModel>): Promise<HttpResponse>{
        const ReviewCard: IReviewPresentationViewModel = {
            cod: request.query!.cod,
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