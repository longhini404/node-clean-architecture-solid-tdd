import { CreateProduct } from '@/domain/usecases/product'

export interface CreateProductRepository {
  create: (params: CreateProductRepository.Params) => Promise<CreateProductRepository.Result>
}

export namespace CreateProductRepository {
  export type Params = CreateProduct.Params

  export type Result = CreateProduct.Result
}
