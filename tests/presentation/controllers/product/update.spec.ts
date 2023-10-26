import { MissingParamError } from '@/domain/errors/generic'
import { HttpRequest } from '@/presentation/protocols'
import { badRequest, noContent } from '@/presentation/helpers'
import { UpdateProductController } from '@/presentation/controllers/product'
import { ValidationStub } from '@/tests/validation/mocks'
import { UpdateProductStub } from '@/tests/presentation/mocks'

interface SutTypes {
  sut: UpdateProductController
  validationStub: ValidationStub
  updateProductStub: UpdateProductStub
}

const makeSut = (): SutTypes => {
  const validationStub = new ValidationStub()
  const updateProductStub = new UpdateProductStub()
  const sut = new UpdateProductController(validationStub, updateProductStub)
  return {
    sut,
    validationStub,
    updateProductStub,
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
  params: {
    product_id: 1,
  },
  body: fakeProduct,
})

describe('UpdateProductController', () => {
  it('Should return error if validation throws', async () => {
    const { sut, validationStub } = makeSut()
    const error = new MissingParamError('wrong_field')
    jest.spyOn(validationStub, 'validate').mockReturnValueOnce(error)
    const httpResponse = await sut.handle(makeFakeRequest())
    expect(httpResponse).toEqual(badRequest(error))
  })

  it('Should call updateProduct with correct values', async () => {
    const { sut, updateProductStub } = makeSut()
    const updateProductSpy = jest.spyOn(updateProductStub, 'update')
    const request = makeFakeRequest()
    await sut.handle(request)
    expect(updateProductSpy).toHaveBeenCalledWith({
      product_id: request.params.product_id,
      product: request.body,
    })
  })

  it('Should return noContent on success', async () => {
    const { sut } = makeSut()
    const httpRequest = await sut.handle(makeFakeRequest())
    expect(httpRequest).toEqual(noContent())
  })
})
