import { Controller } from '@/presentation/protocols'
import { CreateProductController } from '@/presentation/controllers/product'
import { PostgresProductRepository } from '@/infra/db/postgres/repositories'
import { CreateProductService } from '@/data/services/product'
import { makePerformanceMonitorDecorator } from '@/main/factories/decorators'
import { makeCreateProductValidation } from '../../validation/product'

export const makeCreateProductController = (): Controller => {
  const postgresProductRepository = new PostgresProductRepository()
  const createProductService = new CreateProductService(
    postgresProductRepository,
    postgresProductRepository
  )
  const createProductController = new CreateProductController(
    makeCreateProductValidation(),
    createProductService
  )
  return makePerformanceMonitorDecorator('POST /api/product/create', createProductController)
}
