import { UpdateProduct } from '@/domain/usecases/product'

export interface UpdateProductRepository {
  update: (params: UpdateProductRepository.Params) => Promise<void>
}

export namespace UpdateProductRepository {
  export type Params = UpdateProduct.Params
}
