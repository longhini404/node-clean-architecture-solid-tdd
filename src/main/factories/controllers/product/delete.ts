import { Controller } from '@/presentation/protocols'
import { DeleteProductController } from '@/presentation/controllers/product'
import { PostgresProductRepository } from '@/infra/db/postgres/repositories'
import { DeleteProductService } from '@/data/services/product'
import { makePerformanceMonitorDecorator } from '@/main/factories/decorators'
import { makeDeleteProductValidation } from '../../validation/product'

export const makeDeleteProductController = (): Controller => {
  const postgresProductRepository = new PostgresProductRepository()
  const deleteProductService = new DeleteProductService(
    postgresProductRepository,
    postgresProductRepository
  )
  const deleteProductController = new DeleteProductController(
    makeDeleteProductValidation(),
    deleteProductService
  )
  return makePerformanceMonitorDecorator('DELETE /api/product/delete/:id', deleteProductController)
}
