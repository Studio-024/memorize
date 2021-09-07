import { toast } from 'react-toastify'

export class ErrorHandler extends Error {
    errorStatusCode: number
    constructor(errorStatusCode: number) {
        super()
        this.errorStatusCode = errorStatusCode
    }
    
    Get () {
        if (this.errorStatusCode) {
            switch(this.errorStatusCode) {
                case 404: 
                    toast.error('Wrong URL/route!')
                    break
                case 500:
                    toast.error('DataBase off!')
                    break
                default:
                    toast.error('Unexpected error!')
            }
        }

        if (!this.errorStatusCode) {
            toast.error('API off!')
        }
    }

    Post () {
        if (this.errorStatusCode) {
            switch(this.errorStatusCode) {
                case 422:
                    toast.error('Missing parameter!')
                    break
                default:
                    toast.error('Unexpected error!')
            }
        }
    }
}