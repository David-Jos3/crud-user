import 'reflect-metadata'
import express from 'express'
import 'dotenv/config'
import { Routers } from './routes/routes'

export class Server {
  private app: express.Application
  private port: string | undefined

  constructor(private routers: Routers) {
    this.app = express()
    this.port = process.env.PORT
    this.app.use(express.json())
    this.app.use(this.routers.router)
    this.startServer()
  }

  public startServer() {
    this.app.listen(this.port, () => {
      console.log(`Servidor rodando na porta ${this.port}`)
    })
  }
}
