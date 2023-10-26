import { ListProducts } from '@/domain/usecases/product'
import { ListProductsRepository } from '@/data/protocols/repository/product'

export class ListProductsService implements ListProducts {
  constructor(private readonly listProductsRepository: ListProductsRepository) {}

  async load(params: ListProducts.Params): Promise<ListProducts.Result> {
    return await this.listProductsRepository.load(params)
  }
}
