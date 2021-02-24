import {Router} from 'express'
import { adaptRoute } from '../adapters/expressRouterAdapter'
import { makeListCardController } from '../factories/listCardController'

const routes = Router()

routes.get('/card', adaptRoute(makeListCardController()))

export default routes
