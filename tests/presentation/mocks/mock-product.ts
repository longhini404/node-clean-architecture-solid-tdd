import {
  CreateProduct,
  DeleteProduct,
  ListProducts,
  LoadProductById,
  UpdateProduct,
} from '@/domain/usecases/product'

const fakeProduct = {
  title: 'Sample Product',
  description: 'A sample product description.',
  price: 100.0,
  discountPercentage: 10.0,
  rating: 4.5,
  stock: 100,
  brand: 'Sample Brand',
  category: 'Sample Category',
}

export class CreateProductStub implements CreateProduct {
  result = {
    id: 1,
  }

  async create(params: CreateProduct.Params): Promise<CreateProduct.Result> {
    return this.result
  }
}

export class DeleteProductStub implements DeleteProduct {
  async delete(params: DeleteProduct.Params): Promise<void> {}
}

export class ListProductsStub implements ListProducts {
  result = {
    products: [fakeProduct],
    pagination: {
      total: 1,
      page: 1,
      items: 10,
    },
  }

  async load(params: ListProducts.Params): Promise<ListProducts.Result> {
    return this.result
  }
}

export class LoadProductByIdStub implements LoadProductById {
  result = fakeProduct

  async load(params: LoadProductById.Params): Promise<LoadProductById.Result> {
    return this.result
  }
}

export class UpdateProductStub implements UpdateProduct {
  async update(params: UpdateProduct.Params): Promise<void> {}
}
