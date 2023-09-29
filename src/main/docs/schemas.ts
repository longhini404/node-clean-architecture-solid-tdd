import {
  errorSchema,
  loginResultSchema,
  loginParamsSchema,
  createUserParamsSchema,
  createUserResultSchema,
  updateUserParamsSchema,
  listUsersResultSchema,
  loadUserResultSchema,
} from './schemas/index'

export default {
  error: errorSchema,
  loginParams: loginParamsSchema,
  loginResult: loginResultSchema,
  createUserParams: createUserParamsSchema,
  createUserResult: createUserResultSchema,
  updateUserParams: updateUserParamsSchema,
  listUsersSchema: listUsersResultSchema,
  loadUserSchema: loadUserResultSchema,
}
