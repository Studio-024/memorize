import { Authentication } from "@/data/services/authentication";
import { errorHandler, noContent, unauthorized } from "../contracts/http";
import { Middleware } from "../contracts/middleware";
import { requiredParams } from "../helper/requireParams";

export class AuthMiddleware implements Middleware{
    constructor(private readonly authentication: Authentication){}

    async handle(httpRequest: any){
        const error = requiredParams(['accessToken'], httpRequest)
        if(error){
            return errorHandler(error.response)
        }
        
        const isAuthenticated = await this.authentication.auth(httpRequest.accessToken)
        if(!isAuthenticated){
             return unauthorized('token invalid')
        }

        return noContent()
    }
}