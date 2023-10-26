import { UpdateProductService } from '@/data/services/product'
import { ProductNotFoundError } from '@/domain/errors/product'
import { LoadProductByIdRepositoryStub, UpdateProductRepositoryStub } from '@/tests/data/mocks'

interface SutTypes {
  sut: UpdateProductService
  loadProductByIdRepositoryStub: LoadProductByIdRepositoryStub
  updateProductRepositoryStub: UpdateProductRepositoryStub
}

const makeSut = (): SutTypes => {
  const loadProductByIdRepositoryStub = new LoadProductByIdRepositoryStub()
  const updateProductRepositoryStub = new UpdateProductRepositoryStub()
  const sut = new UpdateProductService(loadProductByIdRepositoryStub, updateProductRepositoryStub)
  return {
    sut,
    loadProductByIdRepositoryStub,
    updateProductRepositoryStub,
  }
}

export const makeFakeRequestParams = (): any => ({
  product_id: 1,
  information_to_update: {
    title: 'Updated Product Title',
    description: 'Updated product description.',
    price: 99.99,
    discountPercentage: 5.0,
    rating: 4.0,
    stock: 50,
    brand: 'Updated Brand',
    category: 'Updated Category',
  },
})

describe('UpdateProduct Service', () => {
  it('Should call LoadProductById with correct value', async () => {
    const { sut, loadProductByIdRepositoryStub } = makeSut()
    const makeFakeRequest = makeFakeRequestParams()
    const loadProductByIdSpy = jest.spyOn(loadProductByIdRepositoryStub, 'loadById')
    await sut.update(makeFakeRequest)
    expect(loadProductByIdSpy).toHaveBeenCalledWith({
      id: makeFakeRequest.product_id,
    })
  })

  it('Should call UpdateProduct with correct value', async () => {
    const { sut, updateProductRepositoryStub } = makeSut()
    const makeFakeRequest = makeFakeRequestParams()
    const updateProductSpy = jest.spyOn(updateProductRepositoryStub, 'update')
    await sut.update(makeFakeRequest)
    expect(updateProductSpy).toHaveBeenCalledWith({
      product_id: makeFakeRequest.product_id,
      information_to_update: makeFakeRequest.information_to_update,
    })
  })

  it('Should throw if product is not found', async () => {
    const { sut, loadProductByIdRepositoryStub } = makeSut()
    jest.spyOn(loadProductByIdRepositoryStub, 'loadById').mockResolvedValueOnce(null)
    const makeFakeRequest = makeFakeRequestParams()
    const promise = sut.update(makeFakeRequest)
    await expect(promise).rejects.toThrow(new ProductNotFoundError())
  })
})
