import { Product } from '@/domain/entities'

export interface CreateProduct {
  create: (params: CreateProduct.Params) => Promise<CreateProduct.Result>
}

export namespace CreateProduct {
  export type Params = Product

  export type Result = {
    id: number
  }
}
