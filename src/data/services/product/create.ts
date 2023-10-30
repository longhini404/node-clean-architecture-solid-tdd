import { CreateProduct } from '@/domain/usecases/product'
import {
  CreateProductRepository,
  LoadProductByTitleRepository,
} from '@/data/protocols/repository/product'
import { ProductAlreadyRegisteredError } from '@/domain/errors/product'

export class CreateProductService implements CreateProduct {
  constructor(
    private readonly createProductRepository: CreateProductRepository,
    private readonly loadProductByTitleRepository: LoadProductByTitleRepository
  ) {}

  async create(params: CreateProduct.Params): Promise<CreateProduct.Result> {
    const { title, description, price, discountPercentage, rating, stock, brand, category } = params

    const productFound = await this.loadProductByTitleRepository.loadByTitle({ title })
    if (productFound) {
      return Promise.reject(new ProductAlreadyRegisteredError())
    }

    const product = await this.createProductRepository.create({
      title,
      description,
      price,
      discountPercentage,
      rating,
      stock,
      brand,
      category,
    })

    return product
  }
}
