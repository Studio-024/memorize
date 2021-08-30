import { toast } from "react-toastify"

export const errorHelper = {
    sucess: (massege: string)=> toast.success(massege),
    missingParameter: (parameter: string) => toast.warn(`campo: ${parameter} não preenchido`),
    emailAlredyExists: () => toast.warn('email já existe'),
    apiError: (errorMassege: any) => {toast.warning(`${errorMassege}`)}
}