import { UserDto } from '../dtos/user.dto'

export abstract class UserRepositoryInterface {
  abstract createUserRepository(
    username: string,
    email: string,
    password: string,
  ): Promise<UserDto>

  abstract getByEmailRepository(email: string): Promise<UserDto>
  abstract findAllRepository(): Promise<UserDto[]>
  abstract updateUserRepository(id: string, data: UserDto): Promise<void>
  abstract deleteUserRepository(id: string): Promise<void>
}
