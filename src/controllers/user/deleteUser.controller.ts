import { Request, Response } from 'express'
import { UserRepositoryInterface } from '../../interface/user.interface'

export class DeleteUserController {
  // eslint-disable-next-line no-useless-constructor
  constructor(private userTypeOrmRepository: UserRepositoryInterface) {}

  public async deleteUser(request: Request, response: Response) {
    const { id } = request.params
    try {
      await this.userTypeOrmRepository.deleteUserRepository(id)
      response.status(201).json({ message: 'data deleted successfully' })
    } catch (erro) {
      console.log(erro)
      response.status(500).json({ message: 'Internal server error' })
    }
  }
}
