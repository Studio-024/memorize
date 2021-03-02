export class MissingParamError extends Error{
    constructor(paramName: String){
        super(`MissingParamError: ${paramName}`)
        this.name = ` MissingParamError: ${paramName}`
    }

}


