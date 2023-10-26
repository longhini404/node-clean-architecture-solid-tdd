import { Controller } from '@/presentation/protocols'
import { ListProductsController } from '@/presentation/controllers/product'
import { PostgresProductRepository } from '@/infra/db/postgres/repositories'
import { ListProductsService } from '@/data/services/product'
import { makePerformanceMonitorDecorator } from '@/main/factories/decorators'

export const makeListProductsController = (): Controller => {
  const postgresProductRepository = new PostgresProductRepository()
  const listProductsService = new ListProductsService(postgresProductRepository)
  const listProductsController = new ListProductsController(listProductsService)
  return makePerformanceMonitorDecorator('GET /api/product/load/', listProductsController)
}
