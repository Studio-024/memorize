import { HttpRequest, HttpResponse } from '@/presentation/contracts/http'

export interface IController {
	handle: (HttpRequest: HttpRequest) => Promise<HttpResponse>
}