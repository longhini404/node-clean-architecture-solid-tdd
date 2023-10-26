import { Product } from '@/domain/entities'

export interface LoadProductByTitleRepository {
  loadByTitle: (
    params: LoadProductByTitleRepository.Params
  ) => Promise<LoadProductByTitleRepository.Result>
}

export namespace LoadProductByTitleRepository {
  export type Result = Product

  export type Params = {
    title: string
  }
}
