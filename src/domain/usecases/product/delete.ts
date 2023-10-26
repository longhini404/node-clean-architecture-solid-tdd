export interface DeleteProduct {
  delete: (params: DeleteProduct.Params) => Promise<void>
}

export namespace DeleteProduct {
  export type Params = {
    product_id: number
  }
}
