import { LoadProductByIdService } from '@/data/services/product'
import { ProductNotFoundError } from '@/domain/errors/product'
import { LoadProductByIdRepositoryStub } from '@/tests/data/mocks'

interface SutTypes {
  sut: LoadProductByIdService
  loadProductByIdRepositoryStub: LoadProductByIdRepositoryStub
}

const makeSut = (): SutTypes => {
  const loadProductByIdRepositoryStub = new LoadProductByIdRepositoryStub()
  const sut = new LoadProductByIdService(loadProductByIdRepositoryStub)
  return {
    sut,
    loadProductByIdRepositoryStub,
  }
}

export const makeFakeRequestParams = (): any => ({
  product_id: 1,
})

describe('LoadProductById Service', () => {
  it('Should call LoadProductById with correct value', async () => {
    const { sut, loadProductByIdRepositoryStub } = makeSut()
    const makeFakeRequest = makeFakeRequestParams()
    const loadProductByIdSpy = jest.spyOn(loadProductByIdRepositoryStub, 'loadById')
    await sut.load(makeFakeRequest)
    expect(loadProductByIdSpy).toHaveBeenCalledWith({
      id: makeFakeRequest.product_id,
    })
  })

  it('Should throw if product is not found', async () => {
    const { sut, loadProductByIdRepositoryStub } = makeSut()
    jest.spyOn(loadProductByIdRepositoryStub, 'loadById').mockResolvedValueOnce(null)
    const makeFakeRequest = makeFakeRequestParams()
    const promise = sut.load(makeFakeRequest)
    await expect(promise).rejects.toThrow(new ProductNotFoundError())
  })
})
