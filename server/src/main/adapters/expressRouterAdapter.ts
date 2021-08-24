import { IController } from '@/presentation/contracts/controller'
import { Request, Response } from 'express'

export const adaptRoute = (controller: IController) => {
	return async (req: Request, res: Response) => {
		const httpResponse = await controller.handle(req)
    	res.status(httpResponse.statusCode).json(httpResponse.data)
  	}
}