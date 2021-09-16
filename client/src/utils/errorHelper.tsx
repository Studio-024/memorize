import { toast } from "react-toastify"

export const errorHelper = {
    sucess: (massege: string)=> toast.success(massege),
    missingParameter: (parameter: string) => toast.warn(`${parameter} não preenchido`),
    emailAlredyExists: () => toast.warn('email já existe'),

    apiError: (errorStatusCode: number | null) => {
        if (!errorStatusCode) toast.error('API off!')     
        switch(errorStatusCode) {
            case 400: 
                toast.warn('bad request')
                break
            case 404: 
                toast.error('Wrong URL/route!')
                break
            case 422:
                toast.warn('Missing parameter!')
                break
            case 500:
                toast.error('DataBase off!')
                break
            default:
                toast.error('Unexpected error!')
                
        }
    }
}