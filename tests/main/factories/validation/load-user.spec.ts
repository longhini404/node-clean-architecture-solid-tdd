import { Validation } from '@/presentation/protocols'
import { makeLoadUserController } from '@/main/factories/controllers/user'
import { RequiredFieldValidation, ValidationComposite } from '@/validation/validators'

jest.mock('@/validation/validators/validation-composite')

describe('LoadUserValidationFactory', () => {
  it('Should call ValidationComposite with all validations', () => {
    makeLoadUserController()
    const validations: Validation[] = []
    validations.push(new RequiredFieldValidation('user_id'))
    expect(ValidationComposite).toHaveBeenCalledWith(validations)
  })
})
