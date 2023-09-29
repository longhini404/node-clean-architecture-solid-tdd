import { LoadUser } from '@/domain/usecases/user'
import { badRequest, success } from '@/presentation/helpers'
import { Controller, HttpRequest, HttpResponse, Validation } from '@/presentation/protocols'

type HttpParams = {
  user_id: number
}

export class LoadUserController implements Controller {
  constructor(private readonly validation: Validation, private readonly loadUser: LoadUser) {}

  async handle(httpRequest: HttpRequest<HttpParams>): Promise<HttpResponse> {
    const error = this.validation.validate(httpRequest.params)

    if (error) {
      return badRequest(error)
    }

    const { user_id } = httpRequest.params

    const user = await this.loadUser.load({
      user_id,
    })

    return success(user)
  }
}
