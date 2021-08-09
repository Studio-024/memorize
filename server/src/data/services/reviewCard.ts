import { ErrorREST } from "@/domain/err/errorRest";
import { serverError } from "@/domain/err/helper";
import {  IReview  } from "@/domain/entities/review";
import { IupdateCardReviewRepository } from "../contracts/updateCardReviewRepository";
import { IReviewCardUseCase } from "@/domain/usecases/reviewCard";
import { GetReviewByCod } from "../contracts/getReviewByCod";
import { IReviewCardViewModel } from "../models/reviewCardViewModel";


export class ReviewCardService implements IReviewCardUseCase {
    constructor(
        private readonly updateCardRepository: IupdateCardReviewRepository,
        private readonly getTableByCod: GetReviewByCod        
        ){}

    // modificar IReviewCardViewModel aqui
    async reviewCard(card: IReviewCardViewModel){
         const review = await this.getTableByCod.getReviewByCod(card.cod)

          const cardReview: IReviewCardViewModel = {
           ...review,
           userGrade: card.userGrade 
          }
    

        cardReview.easiness_factor = 1.3


        if (cardReview.userGrade>= 3){
            if (cardReview.streak == 0) {
                cardReview.interval_time = 1
            } else if (cardReview.streak == 1){
                cardReview.interval_time = 6
            } else {
                console.log('easse ', cardReview.easiness_factor)
                cardReview.interval_time *= cardReview.easiness_factor
            }

            cardReview.easiness_factor += (0.1 - (5 - cardReview.userGrade) * (0.08 + (5 - cardReview.userGrade) * 0.02))


            if(cardReview.easiness_factor < 1.3) cardReview.easiness_factor = 1.3

            cardReview.streak++

    } else{
        cardReview.streak = 0
        cardReview.interval_time = 1
    }
    // test code
    console.log(` output: streak: ${cardReview.streak} easiness factor: ${cardReview.easiness_factor} interval: ${cardReview.interval_time}`)

    cardReview.revision_date = new Date()

    try {
        await this.updateCardRepository.updateCardReview(cardReview)
    } catch (error) {
        throw new ErrorREST(serverError(error.stack))
    }

    // return(card.streak, card.easinessFactor, card.interval_time )
    }
}