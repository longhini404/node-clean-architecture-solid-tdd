import {
  createUserParamsSchema,
  createUserResultSchema,
  errorSchema,
  listUsersResultSchema,
  loadUserByIdResultSchema,
  loginParamsSchema,
  loginResultSchema,
  updateUserParamsSchema,
} from './schemas/index'

export default {
  createUserParams: createUserParamsSchema,
  createUserResult: createUserResultSchema,
  error: errorSchema,
  listUsersSchema: listUsersResultSchema,
  loadUserByIdSchema: loadUserByIdResultSchema,
  loginParams: loginParamsSchema,
  loginResult: loginResultSchema,
  updateUserParams: updateUserParamsSchema,
}
