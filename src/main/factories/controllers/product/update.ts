import { Controller } from '@/presentation/protocols'
import { UpdateProductController } from '@/presentation/controllers/product'
import { PostgresProductRepository } from '@/infra/db/postgres/repositories'
import { UpdateProductService } from '@/data/services/product'
import { makePerformanceMonitorDecorator } from '@/main/factories/decorators'
import { makeUpdateProductValidation } from '../../validation/product'

export const makeUpdateProductController = (): Controller => {
  const postgresProductRepository = new PostgresProductRepository()
  const updateProductService = new UpdateProductService(
    postgresProductRepository,
    postgresProductRepository
  )
  const updateProductController = new UpdateProductController(
    makeUpdateProductValidation(),
    updateProductService
  )
  return makePerformanceMonitorDecorator(
    'POST /api/product/update/:product_id',
    updateProductController
  )
}
