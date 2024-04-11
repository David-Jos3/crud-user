import { Request, Response } from 'express'
import { UserRepository } from '../../repositories/user.repositoris'

export class DeleteUserController {
  private userRepository: UserRepository

  constructor() {
    this.userRepository = new UserRepository()
  }

  public async deleteUser(request: Request, response: Response) {
    const { id } = request.params
    try {
      await this.userRepository.deleteUserRepository(id)
      response.status(201).json({ message: 'data deleted successfully' })
    } catch (erro) {
      console.log(erro)
      response.status(500).json({ message: 'Internal server error' })
    }
  }
}
