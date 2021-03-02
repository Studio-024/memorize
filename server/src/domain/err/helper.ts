export const badRequest = (messageError: string, nameError: string) => ({
    status: 400,
    message: messageError,
    name: nameError
  })