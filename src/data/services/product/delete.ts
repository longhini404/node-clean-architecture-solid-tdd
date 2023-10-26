import { DeleteProduct } from '@/domain/usecases/product'
import {
  DeleteProductRepository,
  LoadProductByIdRepository,
} from '@/data/protocols/repository/product'
import { ProductNotFoundError } from '@/domain/errors/product'

export class DeleteProductService implements DeleteProduct {
  constructor(
    private readonly loadProductByIdRepository: LoadProductByIdRepository,
    private readonly deleteProductRepository: DeleteProductRepository
  ) {}

  async delete({ product_id }: DeleteProduct.Params): Promise<void> {
    const productFound = await this.loadProductByIdRepository.loadById({ id: product_id })
    if (!productFound) {
      throw new ProductNotFoundError()
    }
    await this.deleteProductRepository.delete({ product_id })
  }
}
