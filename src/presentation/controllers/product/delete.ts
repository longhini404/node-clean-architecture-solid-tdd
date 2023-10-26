import { DeleteProduct } from '@/domain/usecases/product'
import { badRequest, noContent } from '@/presentation/helpers'
import { Controller, HttpRequest, HttpResponse, Validation } from '@/presentation/protocols'

type HttpParams = {
  product_id: number
}

export class DeleteProductController implements Controller {
  constructor(
    private readonly validation: Validation,
    private readonly deleteProduct: DeleteProduct
  ) {}

  async handle(httpRequest: HttpRequest<HttpParams>): Promise<HttpResponse> {
    const error = this.validation.validate(httpRequest.params)

    if (error) {
      return badRequest(error)
    }

    const { product_id } = httpRequest.params

    await this.deleteProduct.delete({
      product_id,
    })

    return noContent()
  }
}
