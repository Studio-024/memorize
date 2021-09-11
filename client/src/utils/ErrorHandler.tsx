export class ErrorHandler extends Error {
    response: {statusCode: number, data: any}
    constructor(apiError?: {status: number, data: any}) {
        super()
        this.response ={ statusCode: apiError?.status || 500, data: null}
    }
}
