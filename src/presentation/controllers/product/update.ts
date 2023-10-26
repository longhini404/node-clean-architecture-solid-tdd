import { Product } from '@/domain/entities'
import { UpdateProduct } from '@/domain/usecases/product'
import { badRequest, noContent } from '@/presentation/helpers'
import { Controller, HttpRequest, HttpResponse, Validation } from '@/presentation/protocols'

type HttpParams = {
  product_id: number
}

type BodyParams = Partial<Product>

export class UpdateProductController implements Controller {
  constructor(
    private readonly validation: Validation,
    private readonly updateProduct: UpdateProduct
  ) {}

  async handle(httpRequest: HttpRequest<BodyParams, HttpParams>): Promise<HttpResponse> {
    const error = this.validation.validate(httpRequest.params)

    if (error) {
      return badRequest(error)
    }

    const { product_id } = httpRequest.params

    await this.updateProduct.update({
      product_id,
      information_to_update: httpRequest.body,
    })

    return noContent()
  }
}
