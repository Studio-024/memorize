export const badRequest = (messageError: string, nameError?: string) => ({
	status: 400,
	message: messageError,
	name: nameError,
	stack: 'undefined'
})

export const conflict = (messageError: string) => ({
	status: 409,
	message: messageError,
	name: 'unauthorized',
	stack: 'undefined'
})

export const serverError = ( stack: string) => ({
	status: 500,
	message: 'oops...',
	name: 'ServerError',
	stack: stack || 'undefined'
})

export const missingParamError = ( param: string) => ({
	status: 422,
	message: `missing Parameter: ${param}`,
	stack: 'undefined'
})