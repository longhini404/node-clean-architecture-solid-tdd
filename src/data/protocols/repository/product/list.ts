import { ListProducts } from '@/domain/usecases/product'

export interface ListProductsRepository {
  load: (params: ListProductsRepository.Params) => Promise<ListProductsRepository.Result>
}

export namespace ListProductsRepository {
  export type Params = ListProducts.Params

  export type Result = ListProducts.Result
}
