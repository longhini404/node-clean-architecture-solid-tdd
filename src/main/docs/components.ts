import { authToken } from './schemas/index'
import { badRequest, serverError, notFound, unauthorized, forbidden } from './components/index'

export default {
  securitySchemes: {
    authToken: authToken,
  },
  forbidden,
  badRequest,
  unauthorized,
  serverError,
  notFound,
}
