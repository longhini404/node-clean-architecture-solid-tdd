import {
  loginPath,
  createUserPath,
  updateUserPath,
  deleteUserPath,
  listUsersPath,
  loadUserPath,
} from './path/index'

export default {
  '/api/login': loginPath,
  '/api/user/create': createUserPath,
  '/api/user/update/{user_id}': updateUserPath,
  '/api/user/delete/{user_id}': deleteUserPath,
  '/api/user/load': listUsersPath,
  '/api/user/load/{user_id}': loadUserPath,
}
