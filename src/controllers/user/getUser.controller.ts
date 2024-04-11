import { Request, Response } from 'express'
import { UserRepository } from '../../repositories/user.repositoris'

export class GetUserController {
  private userRepository: UserRepository

  constructor() {
    this.userRepository = new UserRepository()
  }

  public async findAllUser(
    _request: Request,
    response: Response,
  ): Promise<void> {
    try {
      const users = await this.userRepository.findAllRepository()
      response.json(users)
    } catch (error) {
      console.error(error)
      response.status(500).json({ message: 'Internal server error' })
    }
  }
}
