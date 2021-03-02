import {Router} from 'express'
import { adaptRoute } from '../adapters/expressRouterAdapter'
import { makeAddCardController } from '../factories/addCardController'
import { makeListCardController } from '../factories/listCardController'

const routes = Router()

routes.get('/card', adaptRoute(makeListCardController()))

routes.put('/card', adaptRoute(makeAddCardController()))

export default routes
