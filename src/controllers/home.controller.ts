import { Response, Request } from 'express'

export class Home {
  public getHome(_request: Request, response: Response) {
    try {
      response.status(200).json({ message: 'application working' })
    } catch (error) {
      response.status(500).json({ message: 'Internal Server Error' })
      console.error(error)
    }
  }
}
