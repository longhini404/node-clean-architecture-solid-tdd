import {
  errorSchema,
  loginParamsSchema,
  loginResultSchema,
  createUserParamsSchema,
  createUserResultSchema,
  listUsersResultSchema,
  loadUserByIdResultSchema,
  updateUserParamsSchema,
  createProductParamsSchema,
  createProductResultSchema,
  listProductsResultSchema,
  loadProductByIdResultSchema,
  updateProductParamsSchema,
} from './schemas/index'

export default {
  error: errorSchema,

  loginParams: loginParamsSchema,
  loginResult: loginResultSchema,

  createUserParams: createUserParamsSchema,
  createUserResult: createUserResultSchema,
  listUsersSchema: listUsersResultSchema,
  loadUserByIdSchema: loadUserByIdResultSchema,
  updateUserParams: updateUserParamsSchema,

  createProductParams: createProductParamsSchema,
  createProductResult: createProductResultSchema,
  listProductsSchema: listProductsResultSchema,
  loadProductByIdSchema: loadProductByIdResultSchema,
  updateProductParams: updateProductParamsSchema,
}
