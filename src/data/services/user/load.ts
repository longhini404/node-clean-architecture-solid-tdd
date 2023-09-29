import { LoadUser } from '@/domain/usecases/user'
import { LoadUserByIdRepository } from '@/data/protocols/repository/user'
import { UserNotFoundError } from '@/domain/errors/user'

export class LoadUserService implements LoadUser {
  constructor(private readonly loadUserByIdRepository: LoadUserByIdRepository) {}

  async load({ user_id }: LoadUser.Params): Promise<LoadUser.Result> {
    const user = await this.loadUserByIdRepository.loadById({ id: user_id })
    if (!user) {
      throw new UserNotFoundError()
    }
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      cellphone: user.cellphone,
      avatar: user.avatar,
      gender: user.gender,
    }
  }
}
