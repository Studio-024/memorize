import {Router} from 'express'
import { adaptRoute } from '../adapters/expressRouterAdapter'
import { makeAddCardController } from '../factories/addCardController'
import { makeListCardController } from '../factories/listCardController'
import { makeReviewCardController } from '../factories/reviewCardController'
import { makeSignupUserController } from '../factories/signupUserController'

const routes = Router()

routes.get('/card', adaptRoute(makeListCardController()))

routes.post('/card', adaptRoute(makeAddCardController()))

routes.put('/card/review', adaptRoute(makeReviewCardController()))


routes.post('/test/user', adaptRoute(makeSignupUserController()))

export default routes
