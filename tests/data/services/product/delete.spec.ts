import { DeleteProductService } from '@/data/services/product'
import { ProductNotFoundError } from '@/domain/errors/product'
import { LoadProductByIdRepositoryStub, DeleteProductRepositoryStub } from '@/tests/data/mocks'

interface SutTypes {
  sut: DeleteProductService
  loadProductByIdRepositoryStub: LoadProductByIdRepositoryStub
  deleteProductRepositoryStub: DeleteProductRepositoryStub
}

const makeSut = (): SutTypes => {
  const loadProductByIdRepositoryStub = new LoadProductByIdRepositoryStub()
  const deleteProductRepositoryStub = new DeleteProductRepositoryStub()
  const sut = new DeleteProductService(loadProductByIdRepositoryStub, deleteProductRepositoryStub)
  return {
    sut,
    loadProductByIdRepositoryStub,
    deleteProductRepositoryStub,
  }
}

export const makeFakeRequestParams = (): any => ({
  id: 1,
})

describe('DeleteProduct Service', () => {
  it('Should call LoadProductById with correct value', async () => {
    const { sut, loadProductByIdRepositoryStub } = makeSut()
    const makeFakeRequest = makeFakeRequestParams()
    const loadProductByIdSpy = jest.spyOn(loadProductByIdRepositoryStub, 'loadById')
    await sut.delete(makeFakeRequest)
    expect(loadProductByIdSpy).toHaveBeenCalledWith({
      product_id: makeFakeRequest.product_id,
    })
  })

  it('Should call deleteProduct with correct value', async () => {
    const { sut, deleteProductRepositoryStub } = makeSut()
    const makeFakeRequest = makeFakeRequestParams()
    const deleteProductSpy = jest.spyOn(deleteProductRepositoryStub, 'delete')
    await sut.delete(makeFakeRequest)
    expect(deleteProductSpy).toHaveBeenCalledWith({
      product_id: makeFakeRequest.product_id,
    })
  })

  it('Should throw if product is not found', async () => {
    const { sut, loadProductByIdRepositoryStub } = makeSut()
    jest.spyOn(loadProductByIdRepositoryStub, 'loadById').mockResolvedValueOnce(null)
    const makeFakeRequest = makeFakeRequestParams()
    const promise = sut.delete(makeFakeRequest)
    await expect(promise).rejects.toThrow(new ProductNotFoundError())
  })
})
