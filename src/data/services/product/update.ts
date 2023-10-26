import { UpdateProduct } from '@/domain/usecases/product'
import {
  UpdateProductRepository,
  LoadProductByIdRepository,
} from '@/data/protocols/repository/product'
import { ProductNotFoundError } from '@/domain/errors/product'

export class UpdateProductService implements UpdateProduct {
  constructor(
    private readonly loadProductByIdRepository: LoadProductByIdRepository,
    private readonly updateProductRepository: UpdateProductRepository
  ) {}

  async update({ product_id, information_to_update }: UpdateProduct.Params): Promise<void> {
    const productFound = await this.loadProductByIdRepository.loadById({ id: product_id })
    if (!productFound) {
      throw new ProductNotFoundError()
    }
    await this.updateProductRepository.update({
      product_id,
      information_to_update,
    })
  }
}
