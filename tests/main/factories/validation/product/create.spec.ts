import { Validation } from '@/presentation/protocols'
import { makeCreateProductController } from '@/main/factories/controllers/product'
import { RequiredFieldValidation, ValidationComposite } from '@/validation/validators'

jest.mock('@/validation/validators/validation-composite')

describe('CreateProductValidationFactory', () => {
  it('Should call ValidationComposite with all validations', () => {
    makeCreateProductController()
    const validations: Validation[] = []
    for (const field of [
      'title',
      'description',
      'price',
      'discountPercentage',
      'rating',
      'stock',
      'brand',
      'category',
    ]) {
      validations.push(new RequiredFieldValidation(field))
    }
    expect(ValidationComposite).toHaveBeenCalledWith(validations)
  })
})
