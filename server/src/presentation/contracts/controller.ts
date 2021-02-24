import { HttpResponse } from '@/presentation/contracts/httpResponse'

export interface IController {
  handle: () => Promise<HttpResponse>
}