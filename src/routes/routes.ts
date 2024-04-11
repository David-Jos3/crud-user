import { GetUserController } from '../controllers/user/getUser.controller'
import { CreateUserController } from '../controllers/user/createUser.controller'
import { AuthLoginControllers } from '../controllers/user/authUserController.controller'
import { UpdateUserController } from './../controllers/user/updateUser.controller'
import { DeleteUserController } from '../controllers/user/deleteUser.controller'
import { Router } from 'express'
import { Home } from '../controllers/home.controller'

export class Routers {
  public router: Router
  private home: Home

  constructor(
    private createUserController: CreateUserController,
    private authControllers: AuthLoginControllers,
    private getUserController: GetUserController,
    private updateUserController: UpdateUserController,
    private deleteUserController: DeleteUserController,
  ) {
    this.home = new Home()
    this.router = Router()
    this.initializeRoutes()
  }

  private initializeRoutes() {
    this.router.get('/', this.home.getHome.bind(this.home))
    this.router.post(
      '/signup',
      this.createUserController.createUser.bind(this.createUserController),
    )
    this.router.post(
      '/signin',
      this.authControllers.authLoginUser.bind(this.authControllers),
    )
    this.router.get(
      '/user',
      this.getUserController.findAllUser.bind(this.getUserController),
    )
    this.router.put(
      '/user/:id',
      this.updateUserController.updateUser.bind(this.updateUserController),
    )
    this.router.delete(
      '/user/:id',
      this.deleteUserController.deleteUser.bind(this.deleteUserController),
    )
  }
}
