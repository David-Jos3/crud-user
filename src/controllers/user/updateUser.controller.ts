import { Request, Response } from 'express'
import { UserRepositoryInterface } from '../../interface/user.interface'

export class UpdateUserController {
  // eslint-disable-next-line no-useless-constructor
  constructor(private userTypeOrmRepository: UserRepositoryInterface) {}

  public async updateUser(request: Request, response: Response): Promise<void> {
    const { id } = request.params
    const body = request.body
    try {
      await this.userTypeOrmRepository.updateUserRepository(id, body)
      response.status(201).json({ message: 'data updated successfully' })
    } catch (erro) {
      console.log(erro)
      response.status(500).json({ message: 'Internal server error' })
    }
  }
}
