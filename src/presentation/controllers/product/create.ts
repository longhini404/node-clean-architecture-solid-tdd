import { Product } from '@/domain/entities'
import { CreateProduct } from '@/domain/usecases/product'
import { badRequest, success } from '@/presentation/helpers'
import { Controller, HttpRequest, HttpResponse, Validation } from '@/presentation/protocols'

type BodyParams = Omit<Product, 'id'>

export class CreateProductController implements Controller {
  constructor(
    private readonly validation: Validation,
    private readonly createProduct: CreateProduct
  ) {}

  async handle(httpRequest: HttpRequest<BodyParams>): Promise<HttpResponse> {
    const error = this.validation.validate(httpRequest.body)

    if (error) {
      return badRequest(error)
    }

    const product = await this.createProduct.create(httpRequest.body)

    return success({
      id: product.id,
    })
  }
}
