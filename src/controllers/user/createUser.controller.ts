import bcrypt from 'bcrypt'
import { Request, Response } from 'express'
import { UserRepositoryInterface } from '../../interface/user.interface'
import { UserDto } from '../../dtos/user.dto'

export class CreateUserController {
  // eslint-disable-next-line no-useless-constructor
  constructor(private userTypeOrmRepository: UserRepositoryInterface) {}

  public async createUser(request: Request, response: Response): Promise<void> {
    const { username, email, password }: UserDto = request.body
    try {
      const passwordHash = bcrypt.hashSync(password, 10)
      await this.userTypeOrmRepository.createUserRepository(
        username,
        email,
        passwordHash,
      )
      response.status(201).json({ message: 'successfully registered user' })
    } catch (error) {
      console.error(error)
      response.status(500).json({ message: 'Internal server error' })
    }
  }
}
