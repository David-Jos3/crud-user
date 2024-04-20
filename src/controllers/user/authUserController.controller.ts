import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import 'dotenv/config'
import { Request, Response } from 'express'
import { UserRepositoryInterface } from '../../interface/user.interface'

export class AuthLoginControllers {
  // eslint-disable-next-line no-useless-constructor
  constructor(private userTypeOrmRepository: UserRepositoryInterface) {}

  public async authLoginUser(request: Request, response: Response) {
    const { email, password } = request.body
    try {
      const user = await this.userTypeOrmRepository.getByEmailRepository(email)
      const passwordCompare = await bcrypt.compareSync(password, user.password)

      if (!passwordCompare) {
        return response.status(401).json({ error: 'Invalid credentials' })
      }

      const token = jwt.sign({ email }, `${process.env.SECRET}`, {
        expiresIn: 100,
      })

      return response
        .status(200)
        .json({ message: 'user successfully logged in', token })
    } catch (error) {
      console.error('controller layer', error)
      response.status(500).json({ messsage: 'Internal server Errror' })
    }
  }
}
