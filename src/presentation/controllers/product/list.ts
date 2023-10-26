import { ListProducts } from '@/domain/usecases/product'
import { success } from '@/presentation/helpers'
import { Controller, HttpRequest, HttpResponse } from '@/presentation/protocols'

type QueryParams = {
  page: number
  items: number
}

export class ListProductsController implements Controller {
  constructor(private readonly listProducts: ListProducts) {}

  async handle(httpRequest: HttpRequest<QueryParams>): Promise<HttpResponse> {
    const pagination = {
      page: +httpRequest.query.page || 1,
      items: +httpRequest.query.items || 10,
    }
    const response = await this.listProducts.load(pagination)

    return success({
      products: response.products,
      pagination: response.pagination,
    })
  }
}
