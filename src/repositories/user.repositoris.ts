import { UserDto } from './../dtos/user.dto'
import { AppDataSource } from './../data-source'
import { User } from '../entities/user.entities'
import { Repository } from 'typeorm'
import { UserRepositoryInterface } from '../interface/user.interface'
import bcrypt from 'bcrypt'

export class UserRepository implements UserRepositoryInterface {
  private userRepository: Repository<User>
  constructor() {
    this.userRepository = AppDataSource.getRepository(User)
  }

  public async createUserRepository(
    username: string,
    email: string,
    passwordHash: string,
  ): Promise<UserDto> {
    const user = new User()
    user.username = username
    user.email = email
    user.password = passwordHash
    await this.userRepository.save(user)
    return user
  }

  public async getByEmailRepository(email: string): Promise<UserDto> {
    const userEmail = await this.userRepository.findOne({ where: { email } })
    if (userEmail) {
      return userEmail
    } else {
      throw new Error('Usuário não encontrado')
    }
  }

  public async findAllRepository(): Promise<UserDto[]> {
    return await this.userRepository.find()
  }

  public async updateUserRepository(id: string, data: UserDto): Promise<void> {
    if (data.password) data.password = bcrypt.hashSync(data.password, 10)
    await this.userRepository.update(id, data)
  }

  public async deleteUserRepository(id: string): Promise<void> {
    await this.userRepository.delete(id)
  }
}
