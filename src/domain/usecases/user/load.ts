import { User } from '@/domain/entities'

export interface LoadUser {
  load: (params: LoadUser.Params) => Promise<LoadUser.Result>
}

export namespace LoadUser {
  export type Params = {
    user_id: number
  }

  export type Result = Omit<User, 'password'>
}
