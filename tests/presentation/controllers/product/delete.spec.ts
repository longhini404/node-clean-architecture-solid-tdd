import { MissingParamError } from '@/domain/errors/generic'
import { HttpRequest } from '@/presentation/protocols'
import { badRequest, noContent } from '@/presentation/helpers'
import { DeleteProductController } from '@/presentation/controllers/product'
import { ValidationStub } from '@/tests/validation/mocks'
import { DeleteProductStub } from '@/tests/presentation/mocks'

interface SutTypes {
  sut: DeleteProductController
  validationStub: ValidationStub
  deleteProductStub: DeleteProductStub
}

const makeSut = (): SutTypes => {
  const validationStub = new ValidationStub()
  const deleteProductStub = new DeleteProductStub()
  const sut = new DeleteProductController(validationStub, deleteProductStub)
  return {
    sut,
    validationStub,
    deleteProductStub,
  }
}

const makeFakeRequest = (): HttpRequest => ({
  params: {
    product_id: 1,
  },
})

describe('DeleteProductController', () => {
  it('Should return error if validation throws', async () => {
    const { sut, validationStub } = makeSut()
    const error = new MissingParamError('wrong_field')
    jest.spyOn(validationStub, 'validate').mockReturnValueOnce(error)
    const httpResponse = await sut.handle(makeFakeRequest())
    expect(httpResponse).toEqual(badRequest(error))
  })

  it('Should call DeleteProduct with correct values', async () => {
    const { sut, deleteProductStub } = makeSut()
    const deleteProductSpy = jest.spyOn(deleteProductStub, 'delete')
    const request = makeFakeRequest()
    await sut.handle(request)
    expect(deleteProductSpy).toHaveBeenCalledWith({
      product_id: request.params.product_id,
    })
  })

  it('Should return noContent on success', async () => {
    const { sut } = makeSut()
    const httpRequest = await sut.handle(makeFakeRequest())
    expect(httpRequest).toEqual(noContent())
  })
})
