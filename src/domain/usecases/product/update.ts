import { Product } from '@/domain/entities'

export interface UpdateProduct {
  update: (params: UpdateProduct.Params) => Promise<void>
}

export namespace UpdateProduct {
  export type Params = {
    product_id: number
    information_to_update: Partial<Product>
  }
}
