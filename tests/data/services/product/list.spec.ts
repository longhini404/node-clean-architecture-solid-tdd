import { ListProductsService } from '@/data/services/product'
import { ListProductsRepositoryStub } from '@/tests/data/mocks'

interface SutTypes {
  sut: ListProductsService
  listProductsRepositoryStub: ListProductsRepositoryStub
}

const makeSut = (): SutTypes => {
  const listProductsRepositoryStub = new ListProductsRepositoryStub()
  const sut = new ListProductsService(listProductsRepositoryStub)
  return {
    sut,
    listProductsRepositoryStub,
  }
}

export const makeFakeRequestParams = (): any => ({
  page: 1,
  items: 10,
})

describe('ListProducts Service', () => {
  it('Should call ListProducts with correct value', async () => {
    const { sut, listProductsRepositoryStub } = makeSut()
    const listProductsSpy = jest.spyOn(listProductsRepositoryStub, 'load')
    const makeFakeRequest = makeFakeRequestParams()
    await sut.load(makeFakeRequest)
    expect(listProductsSpy).toHaveBeenCalledWith({
      page: makeFakeRequest.page,
      items: makeFakeRequest.items,
    })
  })
})
