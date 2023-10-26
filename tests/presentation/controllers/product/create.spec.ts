import { MissingParamError } from '@/domain/errors/generic'
import { HttpRequest } from '@/presentation/protocols'
import { success, badRequest } from '@/presentation/helpers'
import { CreateProductController } from '@/presentation/controllers/product'
import { ValidationStub } from '@/tests/validation/mocks'
import { CreateProductStub } from '@/tests/presentation/mocks'

interface SutTypes {
  sut: CreateProductController
  validationStub: ValidationStub
  createProductStub: CreateProductStub
}

const makeSut = (): SutTypes => {
  const validationStub = new ValidationStub()
  const createProductStub = new CreateProductStub()
  const sut = new CreateProductController(validationStub, createProductStub)
  return {
    sut,
    validationStub,
    createProductStub,
  }
}

const fakeProduct = {
  title: 'Sample Product',
  description: 'A sample product description.',
  price: 100.0,
  discountPercentage: 10.0,
  rating: 4.5,
  stock: 100,
  brand: 'Sample Brand',
  category: 'Sample Category',
}

const makeFakeRequest = (): HttpRequest => ({
  body: fakeProduct,
})

describe('CreateProductController', () => {
  it('Should return error if validation throws', async () => {
    const { sut, validationStub } = makeSut()
    const error = new MissingParamError('wrong_field')
    jest.spyOn(validationStub, 'validate').mockReturnValueOnce(error)
    const httpResponse = await sut.handle(makeFakeRequest())
    expect(httpResponse).toEqual(badRequest(error))
  })

  it('Should call CreateProduct with correct values', async () => {
    const { sut, createProductStub } = makeSut()
    const createProductSpy = jest.spyOn(createProductStub, 'create')
    const request = makeFakeRequest()
    await sut.handle(request)
    expect(createProductSpy).toHaveBeenCalledWith(fakeProduct)
  })

  it('Should return 200 on success', async () => {
    const { sut, createProductStub } = makeSut()
    const httpResponse = await sut.handle(makeFakeRequest())
    expect(httpResponse).toEqual(
      success({
        id: createProductStub.result.id,
      })
    )
  })
})
