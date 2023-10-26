import { LoadProductById } from '@/domain/usecases/product'
import { LoadProductByIdRepository } from '@/data/protocols/repository/product'
import { ProductNotFoundError } from '@/domain/errors/product'

export class LoadProductByIdService implements LoadProductById {
  constructor(private readonly loadProductByIdRepository: LoadProductByIdRepository) {}

  async load({ product_id }: LoadProductById.Params): Promise<LoadProductById.Result> {
    const product = await this.loadProductByIdRepository.loadById({ id: product_id })
    if (!product) {
      throw new ProductNotFoundError()
    }
    return {
      id: product.id,
      title: product.title,
      description: product.description,
      price: product.price,
      discountPercentage: product.discountPercentage,
      rating: product.rating,
      stock: product.stock,
      brand: product.brand,
      category: product.category,
    }
  }
}
