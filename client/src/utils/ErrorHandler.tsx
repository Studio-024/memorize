import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.min.css'

export class ErrorHandler extends Error {
    statusCode: number
    constructor(statusCode: number) {
        super()
        this.statusCode = statusCode
    }
    
    Threat () {
        if (this.statusCode) {
            console.log(this.statusCode)
            toast.error('DB off!')
        }

        if (!this.statusCode) {
            toast.error('API off!')
        }
    }

}