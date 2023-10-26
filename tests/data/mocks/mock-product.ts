import {
  CreateProductRepository,
  DeleteProductRepository,
  ListProductsRepository,
  LoadProductByIdRepository,
  LoadProductByTitleRepository,
  UpdateProductRepository,
} from '@/data/protocols/repository/product'

export const makeProductMock = (): any => ({
  title: 'Sample Product',
  description: 'A sample product description.',
  price: 100.0,
  discountPercentage: 10.0,
  rating: 4.5,
  stock: 100,
  brand: 'Sample Brand',
  category: 'Sample Category',
})

export class CreateProductRepositoryStub implements CreateProductRepository {
  result = 1

  async create(params: CreateProductRepository.Params): Promise<CreateProductRepository.Result> {
    return {
      id: this.result,
    }
  }
}

export class DeleteProductRepositoryStub implements DeleteProductRepository {
  async delete(params: DeleteProductRepository.Params): Promise<void> {}
}

export class ListProductsRepositoryStub implements ListProductsRepository {
  result = {
    products: [makeProductMock()],
    pagination: {
      total: 1,
      page: 1,
      items: 10,
    },
  }

  async load(params: ListProductsRepository.Params): Promise<ListProductsRepository.Result> {
    return this.result
  }
}

export class LoadProductByIdRepositoryStub implements LoadProductByIdRepository {
  result = makeProductMock()

  async loadById(
    params: LoadProductByIdRepository.Params
  ): Promise<LoadProductByIdRepository.Result> {
    return this.result
  }
}

export class LoadProductByTitleRepositoryStub implements LoadProductByTitleRepository {
  result = makeProductMock()

  async loadByTitle(
    params: LoadProductByTitleRepository.Params
  ): Promise<LoadProductByTitleRepository.Result> {
    return this.result
  }
}

export class UpdateProductRepositoryStub implements UpdateProductRepository {
  async update(params: UpdateProductRepository.Params): Promise<void> {}
}
