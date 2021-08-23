import { ErrorREST } from '@/domain/err/errorRest'
import { missingParamError } from '@/domain/err/helper'
import { HttpRequest } from '../contracts/http'

export function requiredParams(reqParans: string[], request: HttpRequest) {
    const totalRequest = {
        ...request.query,
        ...request.body,
        ...request.headers,
        ...request
    }
    
    for(const param of reqParans) {
        if(!totalRequest[param]) {
            return  new ErrorREST(missingParamError(param))           
        }
    }
}