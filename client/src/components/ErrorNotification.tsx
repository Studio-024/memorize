import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

export default function ErrorNotification() {
    const handleClick = () => {
        toast.success(`Teste`)
    }

    return (
        <div>
            <ToastContainer />
            <button onClick={handleClick}>Foo</button>
        </div>
    )
}