import { Request, Response } from 'express'
import { UserRepositoryInterface } from '../../interface/user.interface'

export class GetUserController {
  // eslint-disable-next-line no-useless-constructor
  constructor(private userTypeOrmRepository: UserRepositoryInterface) {}

  public async findAllUser(
    _request: Request,
    response: Response,
  ): Promise<void> {
    try {
      const users = await this.userTypeOrmRepository.findAllRepository()
      response.json(users)
    } catch (error) {
      console.error(error)
      response.status(500).json({ message: 'Internal server error' })
    }
  }
}
