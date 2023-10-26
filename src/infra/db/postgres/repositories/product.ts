import { getManager } from 'typeorm'
import {
  CreateProductRepository,
  DeleteProductRepository,
  ListProductsRepository,
  LoadProductByIdRepository,
  LoadProductByTitleRepository,
  UpdateProductRepository,
} from '@/data/protocols/repository/product'
import { ProductEntity } from '@/infra/db/postgres/entities'

export class PostgresProductRepository
  implements
    CreateProductRepository,
    DeleteProductRepository,
    ListProductsRepository,
    LoadProductByIdRepository,
    LoadProductByTitleRepository,
    UpdateProductRepository
{
  async create(params: CreateProductRepository.Params): Promise<CreateProductRepository.Result> {
    const repository = getManager().getRepository(ProductEntity)
    const response = await repository.save(params)
    return {
      id: response.id,
    }
  }

  async delete({ product_id }: DeleteProductRepository.Params): Promise<void> {
    const repository = getManager().getRepository(ProductEntity)
    await repository.delete({ id: product_id })
  }

  async load(params: ListProductsRepository.Params): Promise<ListProductsRepository.Result> {
    const repository = getManager().getRepository(ProductEntity)
    const [result, total] = await repository.findAndCount({
      skip: (params.page - 1) * params.items,
      take: params.items,
    })
    const products = result.map(product => ({
      id: product.id,
      title: product.title,
      description: product.description,
      price: product.price,
      discountPercentage: product.discountPercentage,
      rating: product.rating,
      stock: product.stock,
      brand: product.brand,
      category: product.category,
    }))
    return {
      products,
      pagination: {
        total,
        page: params.page,
        items: params.items,
      },
    }
  }

  async loadById({
    id: product_id,
  }: LoadProductByIdRepository.Params): Promise<LoadProductByIdRepository.Result> {
    const repository = getManager().getRepository(ProductEntity)
    const response = await repository.findOne({ id: product_id })
    return response && response
  }

  async loadByTitle({
    title,
  }: LoadProductByTitleRepository.Params): Promise<LoadProductByTitleRepository.Result> {
    const repository = getManager().getRepository(ProductEntity)
    const response = await repository.findOne({ title })
    return response && response
  }

  async update({
    product_id,
    information_to_update,
  }: UpdateProductRepository.Params): Promise<void> {
    const repository = getManager().getRepository(ProductEntity)
    await repository.update(
      {
        id: product_id,
      },
      information_to_update
    )
  }
}
