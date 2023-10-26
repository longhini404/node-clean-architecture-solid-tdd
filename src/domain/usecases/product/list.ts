import { Product } from '@/domain/entities'

export interface ListProducts {
  load: (params: ListProducts.Params) => Promise<ListProducts.Result>
}

export namespace ListProducts {
  export type Params = {
    page: number
    items: number
  }

  export type Result = {
    products: Product[]
    pagination: {
      total: number
      page: number
      items: number
    }
  }
}
