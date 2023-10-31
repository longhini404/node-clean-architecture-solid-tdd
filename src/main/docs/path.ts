import {
  createUserPath,
  deleteUserPath,
  listUsersPath,
  loadUserByIdPath,
  loginPath,
  updateUserPath,
  createProductPath,
  deleteProductPath,
  listProductsPath,
  loadProductByIdPath,
  updateProductPath,
} from './path/index'

export default {
  '/api/login': loginPath,

  '/api/user/create': createUserPath,
  '/api/user/delete/{user_id}': deleteUserPath,
  '/api/user/load': listUsersPath,
  '/api/user/load/{user_id}': loadUserByIdPath,
  '/api/user/update/{user_id}': updateUserPath,

  '/api/product/create': createProductPath,
  '/api/product/delete/{product_id}': deleteProductPath,
  '/api/product/load': listProductsPath,
  '/api/product/load/{product_id}': loadProductByIdPath,
  '/api/product/update/{product_id}': updateProductPath,
}
