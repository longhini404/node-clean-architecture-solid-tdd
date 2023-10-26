import { Product } from '@/domain/entities'

export interface LoadProductByIdRepository {
  loadById: (params: LoadProductByIdRepository.Params) => Promise<LoadProductByIdRepository.Result>
}

export namespace LoadProductByIdRepository {
  export type Result = Product

  export type Params = {
    id: number
  }
}
