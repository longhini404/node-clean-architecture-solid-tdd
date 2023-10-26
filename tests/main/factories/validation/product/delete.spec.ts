import { Validation } from '@/presentation/protocols'
import { makeDeleteProductController } from '@/main/factories/controllers/product'
import { RequiredFieldValidation, ValidationComposite } from '@/validation/validators'

jest.mock('@/validation/validators/validation-composite')

describe('DeleteProductValidationFactory', () => {
  it('Should call ValidationComposite with all validations', () => {
    makeDeleteProductController()
    const validations: Validation[] = []
    validations.push(new RequiredFieldValidation('product_id'))
    expect(ValidationComposite).toHaveBeenCalledWith(validations)
  })
})
