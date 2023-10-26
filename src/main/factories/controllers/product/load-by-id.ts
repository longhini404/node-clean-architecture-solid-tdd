import { Controller } from '@/presentation/protocols'
import { LoadProductByIdController } from '@/presentation/controllers/product'
import { PostgresProductRepository } from '@/infra/db/postgres/repositories'
import { LoadProductByIdService } from '@/data/services/product'
import { makePerformanceMonitorDecorator } from '@/main/factories/decorators'
import { makeLoadProductByIdValidation } from '../../validation/product'

export const makeLoadProductByIdController = (): Controller => {
  const postgresProductRepository = new PostgresProductRepository()
  const loadProductByIdService = new LoadProductByIdService(postgresProductRepository)
  const loadProductByIdController = new LoadProductByIdController(
    makeLoadProductByIdValidation(),
    loadProductByIdService
  )
  return makePerformanceMonitorDecorator(
    'GET /api/product/load/:product_id',
    loadProductByIdController
  )
}
