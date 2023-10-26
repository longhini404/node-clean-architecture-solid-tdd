import { Validation } from '@/presentation/protocols'
import { makeLoadProductByIdController } from '@/main/factories/controllers/product'
import { RequiredFieldValidation, ValidationComposite } from '@/validation/validators'

jest.mock('@/validation/validators/validation-composite')

describe('LoadProductByIdValidationFactory', () => {
  it('Should call ValidationComposite with all validations', () => {
    makeLoadProductByIdController()
    const validations: Validation[] = []
    validations.push(new RequiredFieldValidation('product_id'))
    expect(ValidationComposite).toHaveBeenCalledWith(validations)
  })
})
