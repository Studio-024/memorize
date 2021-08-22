import {Router} from 'express'
import { adaptMiddleware } from '../adapters/expressMiddlewareAdapter'
import { adaptRoute } from '../adapters/expressRouterAdapter'
import { makeAddCardController } from '../factories/addCardController'
import { makeListCardController } from '../factories/listCardController'
import { makeAuthMiddleware } from '../factories/middlewares/middlewareAdapter'
import { makeReviewCardController } from '../factories/reviewCardController'
import { makeSignInUserController } from '../factories/signInUserController'
import { makeSignupUserController } from '../factories/signupUserController'

const routes = Router()

routes.get('/card',adaptMiddleware(makeAuthMiddleware()) ,adaptRoute(makeListCardController()))

routes.post('/card', adaptMiddleware(makeAuthMiddleware()), adaptRoute(makeAddCardController()))

routes.put('/card/review', adaptMiddleware(makeAuthMiddleware()), adaptRoute(makeReviewCardController()))


routes.post('/user/signup', adaptRoute(makeSignupUserController()))

routes.post('/user/login', adaptRoute(makeSignInUserController()))

export default routes
