import { ErrorREST } from "@/domain/err/errorRest"
import { missingParamError } from "@/domain/err/helper"
import { HttpRequest } from "../contracts/http"

export function requiredParams(reqParans: string[], request: HttpRequest) {
    for(const param of reqParans){
        if(!request.body[param]){
            return  new ErrorREST(missingParamError(param))
           
        }
    }
}



