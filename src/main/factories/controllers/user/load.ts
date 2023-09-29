import { Controller } from '@/presentation/protocols'
import { LoadUserController } from '@/presentation/controllers/user'
import { PostgresUserRepository } from '@/infra/db/postgres/repositories'
import { makeLoadUserValidation } from '@/main/factories/validation'
import { makePerformanceMonitorDecorator } from '@/main/factories/decorators'
import { LoadUserService } from '@/data/services/user'

export const makeLoadUserController = (): Controller => {
  const postgresUserRepository = new PostgresUserRepository()
  const loadUserService = new LoadUserService(postgresUserRepository)
  const loadUserController = new LoadUserController(makeLoadUserValidation(), loadUserService)
  return makePerformanceMonitorDecorator('GET /api/user/load/:user_id', loadUserController)
}
