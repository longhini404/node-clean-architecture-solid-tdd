import { DeleteProduct } from '@/domain/usecases/product'

export interface DeleteProductRepository {
  delete: (params: DeleteProductRepository.Params) => Promise<void>
}

export namespace DeleteProductRepository {
  export type Params = DeleteProduct.Params
}
