import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.min.css'

export function ErrorHandler(error: {status: number, message: string}):any {
    let statusCode = error.status
    let message = error.message || 'ops'

    function notification() {
        if (statusCode) {
            toast.error('DB off!')
        }
    }

    notification()
    return (
        <div>
            <ToastContainer />
            {toast.error('DB off!')}
            {notification()}
        </div>
    )
}