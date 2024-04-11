import { Request, Response } from 'express'
import { UserRepository } from '../../repositories/user.repositoris'

export class UpdateUserController {
  private userRepository: UserRepository

  constructor() {
    this.userRepository = new UserRepository()
  }

  public async updateUser(request: Request, response: Response): Promise<void> {
    const { id } = request.params
    const body = request.body
    try {
      await this.userRepository.updateUserRepository(id, body)
      response.status(201).json({ message: 'data updated successfully' })
    } catch (erro) {
      console.log(erro)
      response.status(500).json({ message: 'Internal server error' })
    }
  }
}
