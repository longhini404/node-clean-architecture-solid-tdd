import { DomainError } from '@/domain/errors/domain-error'

export class ProductAlreadyRegisteredError extends DomainError {
  constructor() {
    super('Product already registered')
    this.name = 'ProductAlreadyRegisteredError'
  }
}
