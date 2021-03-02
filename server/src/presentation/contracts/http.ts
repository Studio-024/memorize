export type HttpResponse<T = any> = {
    statusCode: number
    data: T
  }

export type HttpRequest <T = any>= {
  body?: T
}

export const ok = (data: any): HttpResponse => ({
  statusCode: 200,
  data
})

export const noContent = (): HttpResponse => ({
  statusCode: 200,
  data: null
})

export const genericError = (error: {message: string, status: number, name: string}) => ({
  statusCode: error.status,
  data: `${error.name}: ${error.message}` 
})
  
  export const serverError = (error: Error): HttpResponse => ({
    statusCode: 500,
    data: error.message
  })
  
 

  export const badRequest = (error: any): HttpResponse => ({
    statusCode: 400,
    data: error
  })

  export const notFound = (data: string): HttpResponse => ({
    statusCode: 404,
    data: ''
  })