import { DomainError } from '@/domain/errors/domain-error'

export class ProductNotFoundError extends DomainError {
  constructor() {
    super('Product not found')
    this.name = 'ProductNotFoundError'
  }
}
