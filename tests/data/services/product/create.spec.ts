import { CreateProductService } from '@/data/services/product/create'
import { ProductAlreadyRegisteredError } from '@/domain/errors/product'
import { LoadProductByTitleRepositoryStub, CreateProductRepositoryStub } from '@/tests/data/mocks'

interface SutTypes {
  sut: CreateProductService
  loadProductByTitleRepositoryStub: LoadProductByTitleRepositoryStub
  createProductRepositoryStub: CreateProductRepositoryStub
}

const makeSut = (): SutTypes => {
  const loadProductByTitleRepositoryStub = new LoadProductByTitleRepositoryStub()
  const createProductRepositoryStub = new CreateProductRepositoryStub()
  const sut = new CreateProductService(
    createProductRepositoryStub,
    loadProductByTitleRepositoryStub
  )
  return {
    sut,
    loadProductByTitleRepositoryStub,
    createProductRepositoryStub,
  }
}

export const makeFakeProductRequest = (): any => ({
  title: 'Sample Product',
  description: 'A sample product description.',
  price: 100.0,
  discountPercentage: 10.0,
  rating: 4.5,
  stock: 100,
  brand: 'Sample Brand',
  category: 'Sample Category',
})

describe('CreateProduct Service', () => {
  it('Should call LoadProductByTitle with correct value', async () => {
    const { sut, loadProductByTitleRepositoryStub } = makeSut()
    jest.spyOn(loadProductByTitleRepositoryStub, 'loadByTitle').mockResolvedValueOnce(null)
    const fakeProductRequest = makeFakeProductRequest()
    const loadProductByTitleSpy = jest.spyOn(loadProductByTitleRepositoryStub, 'loadByTitle')
    await sut.create(fakeProductRequest)
    expect(loadProductByTitleSpy).toHaveBeenCalledWith({
      title: fakeProductRequest.title,
    })
  })

  it('Should call CreateProduct with correct value', async () => {
    const { sut, createProductRepositoryStub, loadProductByTitleRepositoryStub } = makeSut()
    jest.spyOn(loadProductByTitleRepositoryStub, 'loadByTitle').mockResolvedValueOnce(null)
    const fakeProductRequest = makeFakeProductRequest()
    const createProductSpy = jest.spyOn(createProductRepositoryStub, 'create')
    await sut.create(fakeProductRequest)
    expect(createProductSpy).toHaveBeenCalledWith(fakeProductRequest)
  })

  it('Should return correct value on CreateProduct', async () => {
    const { sut, createProductRepositoryStub, loadProductByTitleRepositoryStub } = makeSut()
    jest.spyOn(loadProductByTitleRepositoryStub, 'loadByTitle').mockResolvedValueOnce(null)
    const fakeProductRequest = makeFakeProductRequest()
    const createdProduct = await sut.create(fakeProductRequest)
    expect(createdProduct).toEqual({ id: createProductRepositoryStub.result })
  })

  it('Should throw error when LoadProductByTitleRepository returns a product', async () => {
    const { sut, loadProductByTitleRepositoryStub } = makeSut()
    jest.spyOn(loadProductByTitleRepositoryStub, 'loadByTitle').mockResolvedValueOnce({
      title: 'Sample Product',
      description: 'A sample product description.',
      price: 100.0,
      discountPercentage: 10.0,
      rating: 4.5,
      stock: 100,
      brand: 'Sample Brand',
      category: 'Sample Category',
    })
    const fakeProductRequest = makeFakeProductRequest()
    const promise = sut.create(fakeProductRequest)
    expect(promise).rejects.toThrow(new ProductAlreadyRegisteredError())
  })
})
