import { ErrorREST } from "@/domain/err/errorRest";
import { serverError } from "@/domain/err/helper";
import {  IReview  } from "@/domain/entities/review";
import { IupdateCardReviewRepository } from "../contracts/updateCardReviewRepository";
import { IReviewCardUseCase } from "@/domain/usecases/reviewCard";
import { GetReviewByCod } from "../contracts/getReviewByCod";


export class ReviewCardService implements IReviewCardUseCase {
    constructor(
        private readonly updateCardRepository: IupdateCardReviewRepository,
        private readonly getTableByCod: GetReviewByCod        
        ){}

    async reviewCard(card: IReview){
        // sove problem
    
        const review = this.getTableByCod.getReviewByCod(card.cod)
        console.log(card.cod)

        card.easiness_factor = 1.3


        if (card.userGrade >= 3){
            if (card.streak == 0) {
                card.interval_time = 1
            } else if (card.streak == 1){
                card.interval_time = 6
            } else {
                card.interval_time *= card.easiness_factor
            }

            card.easiness_factor += (0.1 - (5 - card.userGrade) * (0.08 + (5 - card.userGrade) * 0.02))

            // test code 
            console.log(card.easiness_factor)

            if(card.easiness_factor < 1.3) card.easiness_factor = 1.3

            card.streak++

    } else{
        card.streak = 0
        card.interval_time = 1
    }
    // test code
    console.log(` output: streak: ${card.streak} easiness factor: ${card.easiness_factor} interval: ${card.interval_time}`)

    card.revision_date = new Date()

    try {
        await this.updateCardRepository.updateCardReview(card)
    } catch (error) {
        throw new ErrorREST(serverError(error.stack))
    }

    // return(card.streak, card.easinessFactor, card.interval_time )
    }
}