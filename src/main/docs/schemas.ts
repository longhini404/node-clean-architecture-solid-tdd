import {
  errorSchema,
  loginParamsSchema,
  loginResultSchema,
  createUserParamsSchema,
  listUsersResultSchema,
  loadUserByIdResultSchema,
  updateUserParamsSchema,
  createProductParamsSchema,
  listProductsResultSchema,
  loadProductByIdResultSchema,
  updateProductParamsSchema,
} from './schemas/index'

export default {
  error: errorSchema,

  loginParams: loginParamsSchema,
  loginResult: loginResultSchema,

  createUserParams: createUserParamsSchema,
  listUsersSchema: listUsersResultSchema,
  loadUserByIdSchema: loadUserByIdResultSchema,
  updateUserParams: updateUserParamsSchema,

  createProductParams: createProductParamsSchema,
  listProductsSchema: listProductsResultSchema,
  loadProductByIdSchema: loadProductByIdResultSchema,
  updateProductParams: updateProductParamsSchema,
}
