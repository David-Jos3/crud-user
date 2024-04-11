import bcrypt from 'bcrypt'
import { Request, Response } from 'express'
import { UserRepository } from '../../repositories/user.repositoris'
import { UserDto } from '../../dtos/user.dto'

export class CreateUserController {
  private userRepository: UserRepository

  constructor() {
    this.userRepository = new UserRepository()
  }

  public async createUser(request: Request, response: Response): Promise<void> {
    const { username, email, password }: UserDto = request.body
    try {
      const passwordHash = bcrypt.hashSync(password, 10)
      await this.userRepository.createUserRepository(
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
