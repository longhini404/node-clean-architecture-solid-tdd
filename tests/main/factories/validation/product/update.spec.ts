import { Validation } from '@/presentation/protocols'
import { makeUpdateProductController } from '@/main/factories/controllers/product' // Importe o controller de atualização de produtos, se existir
import { RequiredFieldValidation, ValidationComposite } from '@/validation/validators'

jest.mock('@/validation/validators/validation-composite')

describe('UpdateProductValidationFactory', () => {
  it('Should call ValidationComposite with all validations', () => {
    makeUpdateProductController()
    const validations: Validation[] = []
    validations.push(new RequiredFieldValidation('product_id'))
    expect(ValidationComposite).toHaveBeenCalledWith(validations)
  })
})
