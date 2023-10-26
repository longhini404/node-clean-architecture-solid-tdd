import { HttpRequest } from '@/presentation/protocols'
import { success } from '@/presentation/helpers'
import { ListProductsController } from '@/presentation/controllers/product'
import { ListProductsStub } from '@/tests/presentation/mocks'

interface SutTypes {
  sut: ListProductsController
  listProductsStub: ListProductsStub
}

const makeSut = (): SutTypes => {
  const listProductsStub = new ListProductsStub()
  const sut = new ListProductsController(listProductsStub)
  return {
    sut,
    listProductsStub,
  }
}

const makeFakeRequest = (): HttpRequest => ({
  query: {
    page: 1,
    items: 10,
  },
})

describe('ListProductsController', () => {
  it('Should call ListProducts with correct values', async () => {
    const { sut, listProductsStub } = makeSut()
    const listProductsSpy = jest.spyOn(listProductsStub, 'load')
    const request = makeFakeRequest()
    await sut.handle(request)
    expect(listProductsSpy).toHaveBeenCalledWith({
      page: request.query.page,
      items: request.query.items,
    })
  })

  it('Should return noContent on success', async () => {
    const { sut, listProductsStub } = makeSut()
    const httpRequest = await sut.handle(makeFakeRequest())
    expect(httpRequest).toEqual(
      success({
        products: listProductsStub.result.products,
        pagination: listProductsStub.result.pagination,
      })
    )
  })

  it('Should return noContent on success even without receiving pagination information', async () => {
    const { sut, listProductsStub } = makeSut()
    const httpRequest = await sut.handle({
      query: {},
    })
    expect(httpRequest).toEqual(
      success({
        products: listProductsStub.result.products,
        pagination: listProductsStub.result.pagination,
      })
    )
  })
})
