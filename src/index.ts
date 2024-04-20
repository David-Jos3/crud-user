import { Server } from './server'
import { Routers } from './routes/routes'
import { GetUserController } from './controllers/user/getUser.controller'
import { CreateUserController } from './controllers/user/createUser.controller'
import { AuthLoginControllers } from './controllers/user/authUserController.controller'
import { UpdateUserController } from './controllers/user/updateUser.controller'
import { DeleteUserController } from './controllers/user/deleteUser.controller'
import { UserTypeOrmRepository } from './repositories/user.repositoris'

const getUserController = new GetUserController(new UserTypeOrmRepository())
const createUserController = new CreateUserController(
  new UserTypeOrmRepository(),
)
const authUserController = new AuthLoginControllers(new UserTypeOrmRepository())
const updateUserController = new UpdateUserController(
  new UserTypeOrmRepository(),
)
const deleteUserController = new DeleteUserController(
  new UserTypeOrmRepository(),
)

export {
  createUserController,
  authUserController,
  getUserController,
  updateUserController,
  deleteUserController,
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const server = new Server(
  new Routers(
    createUserController,
    authUserController,
    getUserController,
    updateUserController,
    deleteUserController,
  ),
)
