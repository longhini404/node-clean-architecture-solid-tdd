import { MissingParamError } from '@/domain/errors/generic'
import { HttpRequest } from '@/presentation/protocols'
import { badRequest, success } from '@/presentation/helpers'
import { LoadProductByIdController } from '@/presentation/controllers/product'
import { ValidationStub } from '@/tests/validation/mocks'
import { LoadProductByIdStub } from '@/tests/presentation/mocks'

interface SutTypes {
  sut: LoadProductByIdController
  validationStub: ValidationStub
  loadProductByIdStub: LoadProductByIdStub
}

const makeSut = (): SutTypes => {
  const validationStub = new ValidationStub()
  const loadProductByIdStub = new LoadProductByIdStub()
  const sut = new LoadProductByIdController(validationStub, loadProductByIdStub)
  return {
    sut,
    validationStub,
    loadProductByIdStub,
  }
}

const makeFakeRequest = (): HttpRequest => ({
  params: {
    product_id: 1,
  },
})

describe('LoadProductByIdController', () => {
  it('Should return error if validation throws', async () => {
    const { sut, validationStub } = makeSut()
    const error = new MissingParamError('wrong_field')
    jest.spyOn(validationStub, 'validate').mockReturnValueOnce(error)
    const httpResponse = await sut.handle(makeFakeRequest())
    expect(httpResponse).toEqual(badRequest(error))
  })

  it('Should call LoadProductById with correct values', async () => {
    const { sut, loadProductByIdStub } = makeSut()
    const loadProductByIdSpy = jest.spyOn(loadProductByIdStub, 'load')
    const request = makeFakeRequest()
    await sut.handle(request)
    expect(loadProductByIdSpy).toHaveBeenCalledWith({
      product_id: request.params.product_id,
    })
  })

  it('Should return 200 on success', async () => {
    const { sut, loadProductByIdStub } = makeSut()
    const httpRequest = await sut.handle(makeFakeRequest())
    expect(httpRequest).toEqual(success(loadProductByIdStub.result))
  })
})
