import { LoadProductById } from '@/domain/usecases/product'
import { badRequest, success } from '@/presentation/helpers'
import { Controller, HttpRequest, HttpResponse, Validation } from '@/presentation/protocols'

type HttpParams = {
  product_id: number
}

export class LoadProductByIdController implements Controller {
  constructor(
    private readonly validation: Validation,
    private readonly loadProduct: LoadProductById
  ) {}

  async handle(httpRequest: HttpRequest<HttpParams>): Promise<HttpResponse> {
    const error = this.validation.validate(httpRequest.params)

    if (error) {
      return badRequest(error)
    }

    const { product_id } = httpRequest.params

    const product = await this.loadProduct.load({
      product_id,
    })

    return success(product)
  }
}
