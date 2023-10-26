import {
  createUserPath,
  deleteUserPath,
  listUsersPath,
  loadUserByIdPath,
  loginPath,
  updateUserPath,
} from './path/index'

export default {
  '/api/login': loginPath,
  '/api/user/create': createUserPath,
  '/api/user/delete/{user_id}': deleteUserPath,
  '/api/user/load': listUsersPath,
  '/api/user/load/{user_id}': loadUserByIdPath,
  '/api/user/update/{user_id}': updateUserPath,
}
