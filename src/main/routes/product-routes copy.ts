import { Router } from 'express'
import { authentication } from '@/main/middlewares'
import { adaptRoute } from '@/main/adapters'
import {
  makeCreateProductController,
  makeDeleteProductController,
  makeListProductsController,
  makeLoadProductByIdController,
  makeUpdateProductController,
} from '@/main/factories/controllers/product'

export default (router: Router): void => {
  router.delete(
    '/product/delete/:product_id',
    authentication(),
    adaptRoute(makeDeleteProductController())
  )
  router.get(
    '/product/load/:product_id',
    authentication(),
    adaptRoute(makeLoadProductByIdController())
  )
  router.get('/product/load/', authentication(), adaptRoute(makeListProductsController()))
  router.post(
    '/product/update/:product_id',
    authentication(),
    adaptRoute(makeUpdateProductController())
  )
  router.post('/product/create', adaptRoute(makeCreateProductController()))
}
