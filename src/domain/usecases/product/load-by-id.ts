import { Product } from '@/domain/entities'

export interface LoadProductById {
  load: (params: LoadProductById.Params) => Promise<LoadProductById.Result>
}

export namespace LoadProductById {
  export type Params = {
    product_id: number
  }

  export type Result = Product
}
