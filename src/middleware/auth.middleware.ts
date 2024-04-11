import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import 'dotenv/config'
import { TokenPayload } from '../interface/tokenPayload.interface'

export class AuthJwt {
  private secretkey = process.env.JWT_SECRETKEY

  public async auth(request: Request, response: Response, next: NextFunction) {
    const { authorization } = request.headers
    if (!authorization) {
      return response.status(401).json({ message: 'Not authorized' })
    }
    const token = authorization.replace('Bearer', '').trim()

    try {
      const data = jwt.verify(token, `${this.secretkey}`) as TokenPayload
      request.user = data.email
      return next()
    } catch (erro) {
      console.error(erro)
      return next(erro)
    }
  }
}
